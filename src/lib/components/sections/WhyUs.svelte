<script lang="ts">
	import { differentiators, commitments } from '$lib/content';
	import { reveal } from '$lib/actions/reveal';
</script>

<section id="resultados" class="container-px py-24 sm:py-32" style="scroll-margin-top: 5rem">
	<div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
		<!-- Image -->
		<div class="relative" use:reveal>
			<div
				class="pointer-events-none absolute -bottom-5 -left-5 h-40 w-40 rounded-3xl opacity-30 blur-2xl"
				style="background: linear-gradient(135deg, var(--brand-400), var(--brand-600))"
			></div>
			<div class="relative overflow-hidden rounded-3xl border" style="border-color: var(--card-border)">
				<img
					src="/images/meeting.jpg"
					alt="Equipo de Parnerson en una reunión de estrategia"
					width="1400"
					height="933"
					loading="lazy"
					class="aspect-[4/3] h-full w-full object-cover"
				/>
			</div>
			<!-- floating badge -->
			<div class="card-surface absolute -right-3 -top-3 px-4 py-2.5 text-sm font-semibold shadow-lg sm:-right-5">
				<span class="text-gradient-brand">Crecimiento con propósito</span>
			</div>
		</div>

		<!-- Value props -->
		<div use:reveal={{ delay: 120 }}>
			<span class="eyebrow">Por qué Parnerson</span>
			<h2 class="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
				Una agencia que rinde cuentas
			</h2>
			<p class="mt-4 text-lg leading-relaxed text-muted-foreground">
				No prometemos números mágicos. Construimos crecimiento real, sostenible y medible,
				con un equipo cercano que trabaja como parte del tuyo.
			</p>

			<div class="mt-8 grid gap-x-6 gap-y-7 sm:grid-cols-2">
				{#each differentiators as item (item.title)}
					{@const Icon = item.icon}
					<div class="flex gap-4">
						<div class="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-brand-500" style="background: color-mix(in srgb, var(--brand-500) 12%, transparent)">
							<Icon size={20} />
						</div>
						<div>
							<h3 class="font-semibold">{item.title}</h3>
							<p class="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Commitments strip -->
	<div use:reveal class="mt-16 grid gap-4 sm:grid-cols-3">
		{#each commitments as c (c.label)}
			{@const Icon = c.icon}
			<div class="card-surface flex items-center gap-3 px-5 py-4">
				<span class="grid h-10 w-10 shrink-0 place-items-center rounded-full text-white" style="background-image: linear-gradient(135deg, var(--brand-400), var(--brand-600))">
					<Icon size={18} />
				</span>
				<span class="font-medium">{c.label}</span>
			</div>
		{/each}
	</div>
</section>
