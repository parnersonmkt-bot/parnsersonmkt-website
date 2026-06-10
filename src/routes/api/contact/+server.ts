import { json } from '@sveltejs/kit';
import { Resend } from 'resend';
import { env } from '$env/dynamic/private';
import type { RequestHandler } from './$types';

// Serverless function — must not be prerendered (the layout sets prerender = true).
export const prerender = false;

const isEmail = (v: unknown): v is string =>
	typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const esc = (s: string) =>
	s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

export const POST: RequestHandler = async ({ request }) => {
	let data: Record<string, unknown>;
	try {
		data = await request.json();
	} catch {
		return json({ ok: false, error: 'Solicitud inválida.' }, { status: 400 });
	}

	const name = String(data.name ?? '').trim();
	const email = String(data.email ?? '').trim();
	const company = String(data.company ?? '').trim();
	const budget = String(data.budget ?? '').trim();
	const message = String(data.message ?? '').trim();

	// Honeypot (anti-spam): if filled, silently accept without sending.
	if (String(data.website ?? '').trim()) return json({ ok: true });

	if (name.length < 2 || !isEmail(email) || message.length < 5) {
		return json({ ok: false, error: 'Revisá los campos obligatorios.' }, { status: 400 });
	}

	const apiKey = env.RESEND_API_KEY;
	if (!apiKey) {
		console.error('[contact] RESEND_API_KEY no configurada');
		return json(
			{ ok: false, error: 'El envío de correo no está configurado todavía.' },
			{ status: 500 }
		);
	}

	const to = env.CONTACT_TO_EMAIL || 'parnersonmkt@gmail.com';
	const from = env.CONTACT_FROM_EMAIL || 'Parnerson Web <onboarding@resend.dev>';

	const html = `
		<div style="font-family:system-ui,sans-serif;line-height:1.6;color:#111">
			<h2 style="color:#F1760E;margin:0 0 12px">Nueva consulta desde la web</h2>
			<p><strong>Nombre:</strong> ${esc(name)}</p>
			<p><strong>Email:</strong> ${esc(email)}</p>
			${company ? `<p><strong>Empresa:</strong> ${esc(company)}</p>` : ''}
			${budget ? `<p><strong>Presupuesto:</strong> ${esc(budget)}</p>` : ''}
			<p><strong>Mensaje:</strong></p>
			<p style="white-space:pre-wrap;background:#f8f8f8;padding:12px;border-radius:8px">${esc(message)}</p>
		</div>`;

	try {
		const resend = new Resend(apiKey);
		const { error } = await resend.emails.send({
			from,
			to,
			replyTo: email,
			subject: `Nueva consulta de ${name}`,
			html
		});

		if (error) {
			console.error('[contact] Resend error:', error);
			return json({ ok: false, error: 'No se pudo enviar la consulta.' }, { status: 502 });
		}
		return json({ ok: true });
	} catch (e) {
		console.error('[contact] error inesperado:', e);
		return json({ ok: false, error: 'Ocurrió un error al enviar.' }, { status: 500 });
	}
};
