<script lang="ts">
	import { site, whatsappLink } from '$lib/config';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { MessageCircle, Mail, MapPin, Clock, Zap } from 'lucide-svelte';

	const perks = [
		{ icon: Zap, title: 'Respuesta en < 24h', text: 'Te contactamos el mismo día hábil.' },
		{ icon: Clock, title: 'Diagnóstico gratuito', text: 'Sin compromiso ni permanencia.' },
		{ icon: MessageCircle, title: 'Trato directo', text: 'Hablas con estrategas, no con bots.' }
	];
</script>

<svelte:head>
	<title>Contacto · {site.name}</title>
	<meta
		name="description"
		content="Hablemos de tu crecimiento. Agenda un diagnóstico gratuito con Parnerson Marketing por WhatsApp o formulario."
	/>
</svelte:head>

<PageHeader
	eyebrow="Contacto"
	title="Hablemos de tu crecimiento"
	subtitle="Cuéntanos sobre tu negocio y te mostraremos oportunidades concretas para escalar. Sin humo, sin compromiso."
/>

<section class="container-px pb-24 sm:pb-32">
	<div class="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
		<!-- Left: info -->
		<div use:reveal>
			<div class="space-y-4">
				{#each perks as perk (perk.title)}
					{@const Icon = perk.icon}
					<div class="flex items-start gap-4">
						<div class="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white" style="background-image: linear-gradient(135deg, var(--brand-400), var(--brand-600))">
							<Icon size={20} />
						</div>
						<div>
							<h3 class="font-semibold">{perk.title}</h3>
							<p class="text-sm text-muted-foreground">{perk.text}</p>
						</div>
					</div>
				{/each}
			</div>

			<div class="mt-8 space-y-3 border-t pt-8" style="border-color: var(--card-border)">
				<a href={whatsappLink()} target="_blank" rel="noopener" class="flex items-center gap-3 text-sm transition-colors hover:text-brand-500">
					<MessageCircle size={18} class="text-brand-500" /> {site.phoneDisplay}
				</a>
				<a href="mailto:{site.email}" class="flex items-center gap-3 text-sm transition-colors hover:text-brand-500">
					<Mail size={18} class="text-brand-500" /> {site.email}
				</a>
				<p class="flex items-center gap-3 text-sm text-muted-foreground">
					<MapPin size={18} class="text-brand-500" /> {site.location}
				</p>
			</div>

			<a href={whatsappLink()} target="_blank" rel="noopener" class="btn-primary mt-8 w-full sm:w-auto">
				<MessageCircle size={18} /> Prefiero escribir por WhatsApp
			</a>
		</div>

		<!-- Right: form -->
		<div use:reveal={{ delay: 120 }}>
			<ContactForm />
		</div>
	</div>
</section>
