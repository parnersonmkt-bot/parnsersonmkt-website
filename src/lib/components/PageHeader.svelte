<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	type Props = { eyebrow?: string; title: string; subtitle?: string };
	let { eyebrow, title, subtitle }: Props = $props();
</script>

<section class="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20">
	<div class="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_50%,transparent_100%)]"></div>
	<div
		class="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full opacity-40 blur-[110px]"
		style="background: radial-gradient(circle, var(--brand-500), transparent 70%)"
	></div>
	<div class="container-px relative">
		<div class="mx-auto max-w-3xl text-center" use:reveal>
			{#if eyebrow}<span class="eyebrow">{eyebrow}</span>{/if}
			<h1 class="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
				{title}
			</h1>
			{#if subtitle}
				<p class="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{subtitle}</p>
			{/if}
		</div>
	</div>
</section>
