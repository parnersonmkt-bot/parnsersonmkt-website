<script lang="ts">
	import { faqs } from '$lib/content';
	import SectionHeading from '../SectionHeading.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { Plus } from 'lucide-svelte';

	let openIndex = $state<number | null>(0);
	const toggle = (i: number) => (openIndex = openIndex === i ? null : i);
</script>

<section class="container-px py-24 sm:py-32">
	<SectionHeading
		eyebrow="Preguntas frecuentes"
		title="Todo lo que necesitas saber"
		subtitle="Y si tienes otra pregunta, escríbenos: respondemos rápido y sin rodeos."
	/>

	<div class="mx-auto mt-12 max-w-3xl divide-y" style="border-color: var(--card-border)" use:reveal>
		{#each faqs as faq, i (faq.q)}
			<div style="border-color: var(--card-border)">
				<button
					type="button"
					class="flex w-full items-center justify-between gap-4 py-5 text-left"
					onclick={() => toggle(i)}
					aria-expanded={openIndex === i}
				>
					<span class="text-lg font-semibold">{faq.q}</span>
					<Plus
						size={22}
						class="shrink-0 text-brand-500 transition-transform duration-300 {openIndex === i ? 'rotate-45' : ''}"
					/>
				</button>
				<div
					class="grid transition-all duration-300 {openIndex === i ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0'}"
				>
					<div class="overflow-hidden">
						<p class="leading-relaxed text-muted-foreground">{faq.a}</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
