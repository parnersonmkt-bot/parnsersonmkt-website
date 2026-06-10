<script lang="ts">
	import { site, whatsappLink } from '$lib/config';
	import { Send, Check, Loader2, AlertCircle } from 'lucide-svelte';

	let name = $state('');
	let email = $state('');
	let company = $state('');
	let budget = $state('');
	let message = $state('');
	let website = $state(''); // honeypot — debe quedar vacío

	let touched = $state(false);
	let status = $state<'idle' | 'sending' | 'sent' | 'error'>('idle');
	let errorMsg = $state('');

	const budgets = ['< $1.000 / mes', '$1.000 – $3.000 / mes', '$3.000 – $10.000 / mes', '+ $10.000 / mes'];

	const emailValid = $derived(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
	const valid = $derived(name.trim().length > 1 && emailValid && message.trim().length > 4);

	async function submit(e: SubmitEvent) {
		e.preventDefault();
		touched = true;
		if (!valid || status === 'sending') return;

		status = 'sending';
		errorMsg = '';
		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, email, company, budget, message, website })
			});
			const data = await res.json().catch(() => ({}));
			if (res.ok && data.ok) {
				status = 'sent';
			} else {
				status = 'error';
				errorMsg = data.error || 'No se pudo enviar la consulta. Intentá de nuevo.';
			}
		} catch {
			status = 'error';
			errorMsg = 'Problema de conexión. Revisá tu internet e intentá de nuevo.';
		}
	}

	function reset() {
		name = email = company = budget = message = '';
		touched = false;
		status = 'idle';
		errorMsg = '';
	}
</script>

{#if status === 'sent'}
	<div class="card-surface flex flex-col items-center gap-4 p-10 text-center">
		<div class="grid h-16 w-16 place-items-center rounded-full text-white" style="background: var(--brand-500)">
			<Check size={32} />
		</div>
		<h3 class="text-2xl font-bold">¡Consulta enviada!</h3>
		<p class="max-w-md text-muted-foreground">
			Gracias por escribirnos. Te responderemos a la brevedad. Si es urgente, también podés
			contactarnos por <a href={whatsappLink()} target="_blank" rel="noopener" class="font-semibold text-brand-500">WhatsApp</a>.
		</p>
		<button type="button" class="btn-ghost mt-2" onclick={reset}>Enviar otra consulta</button>
	</div>
{:else}
	<form class="card-surface space-y-5 p-7 sm:p-9" onsubmit={submit} novalidate>
		<div class="grid gap-5 sm:grid-cols-2">
			<div>
				<label for="name" class="mb-1.5 block text-sm font-medium">Nombre *</label>
				<input
					id="name"
					type="text"
					bind:value={name}
					placeholder="Tu nombre"
					autocomplete="name"
					class="w-full rounded-xl border bg-transparent px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
					style="border-color: var(--card-border)"
				/>
			</div>
			<div>
				<label for="email" class="mb-1.5 block text-sm font-medium">Email *</label>
				<input
					id="email"
					type="email"
					bind:value={email}
					placeholder="tucorreo@empresa.com"
					autocomplete="email"
					class="w-full rounded-xl border bg-transparent px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
					style="border-color: var(--card-border)"
				/>
				{#if touched && email && !emailValid}
					<p class="mt-1 text-xs text-red-500">Ingresá un email válido.</p>
				{/if}
			</div>
		</div>

		<div class="grid gap-5 sm:grid-cols-2">
			<div>
				<label for="company" class="mb-1.5 block text-sm font-medium">Empresa</label>
				<input
					id="company"
					type="text"
					bind:value={company}
					placeholder="Nombre de tu empresa"
					autocomplete="organization"
					class="w-full rounded-xl border bg-transparent px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
					style="border-color: var(--card-border)"
				/>
			</div>
			<div>
				<label for="budget" class="mb-1.5 block text-sm font-medium">Presupuesto mensual</label>
				<select
					id="budget"
					bind:value={budget}
					class="w-full rounded-xl border bg-transparent px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
					style="border-color: var(--card-border)"
				>
					<option value="">Selecciona una opción</option>
					{#each budgets as b (b)}
						<option value={b}>{b}</option>
					{/each}
				</select>
			</div>
		</div>

		<div>
			<label for="message" class="mb-1.5 block text-sm font-medium">¿Cómo podemos ayudarte? *</label>
			<textarea
				id="message"
				bind:value={message}
				rows="4"
				placeholder="Contanos sobre tu negocio y tus objetivos de crecimiento…"
				class="w-full resize-none rounded-xl border bg-transparent px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
				style="border-color: var(--card-border)"
			></textarea>
		</div>

		<!-- honeypot anti-spam: oculto para humanos -->
		<div class="absolute left-[-9999px]" aria-hidden="true">
			<label for="website">No completar</label>
			<input id="website" type="text" tabindex="-1" autocomplete="off" bind:value={website} />
		</div>

		{#if touched && !valid}
			<p class="text-xs text-red-500">Completá los campos obligatorios (*) para continuar.</p>
		{/if}

		{#if status === 'error'}
			<p class="flex items-center gap-2 text-sm text-red-500">
				<AlertCircle size={16} class="shrink-0" /> {errorMsg}
			</p>
		{/if}

		<button type="submit" class="btn-primary w-full" disabled={status === 'sending'}>
			{#if status === 'sending'}
				<Loader2 size={16} class="animate-spin" /> Enviando…
			{:else}
				<Send size={16} /> Enviar consulta
			{/if}
		</button>
		<p class="text-center text-xs text-muted-foreground">
			Te responderemos por email. También podés escribirnos a
			<a href="mailto:{site.email}" class="font-medium text-brand-500">{site.email}</a>
			o por <a href={whatsappLink()} target="_blank" rel="noopener" class="font-medium text-brand-500">WhatsApp</a>.
		</p>
	</form>
{/if}
