<script lang="ts">
	import { site } from '$lib/config';
	import { Send, Check } from 'lucide-svelte';

	let name = $state('');
	let email = $state('');
	let company = $state('');
	let budget = $state('');
	let message = $state('');
	let touched = $state(false);
	let sent = $state(false);

	const budgets = ['< $1.000 / mes', '$1.000 – $3.000 / mes', '$3.000 – $10.000 / mes', '+ $10.000 / mes'];

	const emailValid = $derived(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
	const valid = $derived(name.trim().length > 1 && emailValid && message.trim().length > 4);

	function submit(e: SubmitEvent) {
		e.preventDefault();
		touched = true;
		if (!valid) return;

		const text = [
			`Hola Parnerson 👋, soy ${name}.`,
			company ? `Empresa: ${company}` : '',
			`Email: ${email}`,
			budget ? `Presupuesto: ${budget}` : '',
			'',
			message
		]
			.filter(Boolean)
			.join('\n');

		const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
		window.open(url, '_blank', 'noopener');
		sent = true;
	}
</script>

{#if sent}
	<div class="card-surface flex flex-col items-center gap-4 p-10 text-center">
		<div class="grid h-16 w-16 place-items-center rounded-full text-white" style="background: var(--brand-500)">
			<Check size={32} />
		</div>
		<h3 class="text-2xl font-bold">¡Mensaje en camino!</h3>
		<p class="max-w-md text-muted-foreground">
			Se abrió WhatsApp con tu mensaje listo para enviar. Si no se abrió, escríbenos
			directamente a <a href="mailto:{site.email}" class="font-semibold text-brand-500">{site.email}</a>.
		</p>
		<button type="button" class="btn-ghost mt-2" onclick={() => (sent = false)}>Enviar otro mensaje</button>
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
					class="w-full rounded-xl border bg-transparent px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
					style="border-color: var(--card-border)"
				/>
				{#if touched && email && !emailValid}
					<p class="mt-1 text-xs text-red-500">Ingresa un email válido.</p>
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
				placeholder="Cuéntanos sobre tu negocio y tus objetivos de crecimiento…"
				class="w-full resize-none rounded-xl border bg-transparent px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
				style="border-color: var(--card-border)"
			></textarea>
		</div>

		{#if touched && !valid}
			<p class="text-xs text-red-500">Completa los campos obligatorios (*) para continuar.</p>
		{/if}

		<button type="submit" class="btn-primary w-full">
			<Send size={16} /> Enviar y abrir WhatsApp
		</button>
		<p class="text-center text-xs text-muted-foreground">
			Al enviar, abriremos WhatsApp con tu mensaje listo. También puedes escribirnos a
			<a href="mailto:{site.email}" class="font-medium text-brand-500">{site.email}</a>.
		</p>
	</form>
{/if}
