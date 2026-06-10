<script lang="ts">
	import { testimonials } from '$lib/content';
	import SectionHeading from '../SectionHeading.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { Star, Quote } from 'lucide-svelte';
</script>

<section class="py-24 sm:py-32" style="background-color: var(--background-secondary)">
	<div class="container-px">
		<SectionHeading
			eyebrow="Testimonios"
			title="Marcas que crecen con nosotros"
			subtitle="La mejor métrica es la confianza de quienes nos eligen para escalar su negocio."
		/>

		<div class="mt-14 grid gap-6 lg:grid-cols-3">
			{#each testimonials as t, i (t.author)}
				<figure
					use:reveal={{ delay: i * 90 }}
					class="card-surface relative flex flex-col p-7 sm:p-8"
				>
					<Quote size={34} class="text-brand-500/30" />
					<div class="mt-4 flex gap-0.5">
						{#each Array(5) as _, s (s)}
							<Star size={16} class="fill-brand-500 text-brand-500" />
						{/each}
					</div>
					<blockquote class="mt-4 flex-1 leading-relaxed">"{t.quote}"</blockquote>
					<figcaption class="mt-6 border-t pt-4" style="border-color: var(--card-border)">
						<div class="font-semibold">{t.author}</div>
						<div class="text-sm text-muted-foreground">{t.role}</div>
					</figcaption>
				</figure>
			{/each}
		</div>
	</div>
</section>
