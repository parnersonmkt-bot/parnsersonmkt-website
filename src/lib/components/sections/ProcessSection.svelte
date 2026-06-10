<script lang="ts">
	import { process } from '$lib/content';
	import SectionHeading from '../SectionHeading.svelte';
	import { reveal } from '$lib/actions/reveal';
</script>

<section id="proceso" class="container-px py-24 sm:py-32" style="scroll-margin-top: 5rem">
	<SectionHeading
		eyebrow="Cómo trabajamos"
		title="Un método probado, transparente y orientado a datos"
		subtitle="Sin cajas negras. Cada etapa tiene objetivos claros y métricas que puedes seguir en tiempo real."
	/>

	<div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
		{#each process as step, i (step.number)}
			<div use:reveal={{ delay: i * 90 }} class="relative">
				<!-- connector line -->
				{#if i < process.length - 1}
					<div class="absolute left-[3.25rem] top-7 hidden h-px w-[calc(100%-2rem)] lg:block" style="background: linear-gradient(90deg, color-mix(in srgb, var(--brand-500) 50%, transparent), transparent)"></div>
				{/if}
				<div
					class="grid h-14 w-14 place-items-center rounded-2xl font-display text-lg font-bold text-white"
					style="background-image: linear-gradient(135deg, var(--brand-400), var(--brand-600))"
				>
					{step.number}
				</div>
				<h3 class="mt-5 text-lg font-bold">{step.title}</h3>
				<p class="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
			</div>
		{/each}
	</div>
</section>
