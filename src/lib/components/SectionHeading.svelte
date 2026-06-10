<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	type Props = {
		eyebrow?: string;
		title: string;
		subtitle?: string;
		align?: 'center' | 'left';
	};
	let { eyebrow, title, subtitle, align = 'center' }: Props = $props();
</script>

<div
	use:reveal
	class="max-w-2xl {align === 'center' ? 'mx-auto text-center' : 'text-left'}"
>
	{#if eyebrow}<span class="eyebrow">{eyebrow}</span>{/if}
	<h2 class="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
		{title}
	</h2>
	{#if subtitle}
		<p class="mt-4 text-lg leading-relaxed text-muted-foreground">{subtitle}</p>
	{/if}
</div>
