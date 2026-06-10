<script lang="ts">
	import { whatsappLink } from '$lib/config';
	import { reveal } from '$lib/actions/reveal';
	import { ArrowRight, MessageCircle, TrendingUp, Sparkles, BarChart3, Zap } from 'lucide-svelte';
</script>

<section class="relative overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-28">
	<!-- Background layers -->
	<div class="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_80%_60%_at_70%_0%,#000_45%,transparent_100%)]"></div>
	<div
		class="pointer-events-none absolute -top-32 right-0 h-[520px] w-[520px] rounded-full opacity-50 blur-[120px]"
		style="background: radial-gradient(circle, var(--brand-500), transparent 70%)"
	></div>
	<div
		class="pointer-events-none absolute top-60 -left-32 h-[360px] w-[360px] rounded-full opacity-25 blur-[120px]"
		style="background: radial-gradient(circle, var(--brand-300), transparent 70%)"
	></div>

	<div class="container-px relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
		<!-- Copy -->
		<div use:reveal>
			<span class="eyebrow">
				<Sparkles size={14} /> Agencia de crecimiento digital
			</span>

			<h1 class="mt-6 text-4xl font-extrabold leading-[1.04] tracking-tight sm:text-5xl lg:text-6xl">
				Hacemos crecer tu negocio con
				<span class="text-gradient-brand">marketing que sí funciona</span>
			</h1>

			<p class="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
				Estrategia, performance marketing y automatización con IA para atraer más clientes
				y escalar tu marca. Menos humo, más resultados reales.
			</p>

			<div class="mt-8 flex flex-col gap-3 sm:flex-row">
				<a href={whatsappLink()} target="_blank" rel="noopener" class="btn-primary w-full sm:w-auto">
					<MessageCircle size={18} /> Diagnóstico gratis
				</a>
				<a href="/servicios" class="btn-ghost w-full sm:w-auto">
					Ver servicios <ArrowRight size={16} />
				</a>
			</div>

			<div class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
				<span class="flex items-center gap-2"><Zap size={15} class="text-brand-500" /> Sin permanencia</span>
				<span class="flex items-center gap-2"><TrendingUp size={15} class="text-brand-500" /> Resultados medibles</span>
				<span class="flex items-center gap-2"><BarChart3 size={15} class="text-brand-500" /> Reportes claros</span>
			</div>
		</div>

		<!-- Visual -->
		<div class="relative" use:reveal={{ delay: 150 }}>
			<div
				class="pointer-events-none absolute -inset-4 rounded-[2rem] opacity-40 blur-2xl"
				style="background: linear-gradient(135deg, var(--brand-400), var(--brand-600))"
			></div>

			<div
				class="relative overflow-hidden rounded-3xl border"
				style="border-color: var(--card-border); box-shadow: 0 40px 90px -40px color-mix(in srgb, var(--brand-500) 45%, transparent)"
			>
				<img
					src="/images/team-working.jpg"
					alt="Equipo de Parnerson trabajando en estrategias de marketing digital"
					width="1600"
					height="1067"
					class="h-full w-full object-cover"
					fetchpriority="high"
				/>
				<!-- brand tint -->
				<div class="pointer-events-none absolute inset-0" style="background: linear-gradient(180deg, transparent 40%, color-mix(in srgb, var(--brand-700) 35%, transparent))"></div>
			</div>

			<!-- floating chip: top -->
			<div class="animate-float-slow card-surface absolute -left-4 top-8 hidden items-center gap-3 px-4 py-3 shadow-lg sm:flex">
				<span class="grid h-9 w-9 place-items-center rounded-xl text-white" style="background: var(--brand-500)"><TrendingUp size={18} /></span>
				<div>
					<div class="text-sm font-semibold leading-tight">Crecimiento sostenido</div>
					<div class="text-xs text-muted-foreground">optimización continua</div>
				</div>
			</div>

			<!-- floating chip: bottom with mini bars -->
			<div class="animate-float-slow card-surface absolute -right-4 bottom-8 hidden flex-col gap-2 px-4 py-3 shadow-lg sm:flex" style="animation-delay: 1.5s">
				<div class="flex items-center gap-2 text-xs font-medium text-muted-foreground"><BarChart3 size={14} class="text-brand-500" /> Rendimiento</div>
				<div class="flex h-10 items-end gap-1">
					{#each [40, 60, 45, 75, 90] as h, i (i)}
						<span class="w-2.5 rounded-sm" style="height: {h}%; background: linear-gradient(180deg, var(--brand-400), var(--brand-600))"></span>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
