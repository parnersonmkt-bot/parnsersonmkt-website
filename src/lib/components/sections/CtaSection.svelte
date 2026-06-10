<script lang="ts">
	import { whatsappLink } from '$lib/config';
	import { reveal } from '$lib/actions/reveal';
	import { MessageCircle, ArrowRight } from 'lucide-svelte';
</script>

<section class="container-px py-24 sm:py-28">
	<div
		use:reveal
		class="relative overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-12 sm:py-24"
		style="background-image: linear-gradient(135deg, var(--brand-500), var(--brand-700))"
	>
		<!-- decorative layers -->
		<div class="cta-lines pointer-events-none absolute inset-0"></div>
		<div class="cta-dots pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000,transparent_75%)]"></div>
		<!-- drifting light -->
		<div class="animate-cta-drift pointer-events-none absolute -top-20 left-1/4 h-80 w-80 rounded-full bg-white/25 blur-3xl"></div>
		<div class="animate-cta-drift pointer-events-none absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-white/15 blur-3xl" style="animation-delay: -6s"></div>

		<div class="relative mx-auto max-w-2xl text-white">
			<h2 class="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
				¿Listos para escalar tu negocio?
			</h2>
			<p class="mx-auto mt-5 max-w-xl text-lg text-white/90">
				Agenda un diagnóstico gratuito. Analizamos tu situación y te mostramos
				oportunidades de crecimiento concretas, sin compromiso.
			</p>
			<div class="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
				<a
					href={whatsappLink()}
					target="_blank"
					rel="noopener"
					class="btn-light w-full sm:w-auto"
				>
					<MessageCircle size={18} /> Hablar por WhatsApp
				</a>
				<a
					href="/contacto"
					class="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 sm:w-auto"
				>
					Enviar mensaje <ArrowRight size={16} />
				</a>
			</div>
		</div>
	</div>
</section>
