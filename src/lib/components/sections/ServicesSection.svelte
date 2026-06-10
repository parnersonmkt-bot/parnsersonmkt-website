<script lang="ts">
	import { services } from '$lib/content';
	import SectionHeading from '../SectionHeading.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { ArrowRight, Check } from 'lucide-svelte';

	type Props = { detailed?: boolean };
	let { detailed = false }: Props = $props();
</script>

<section id="servicios" class="container-px py-24 sm:py-32">
	<SectionHeading
		eyebrow="Qué hacemos"
		title="Un ecosistema completo de crecimiento"
		subtitle="Integramos cada disciplina del marketing digital en una sola máquina de resultados, sin piezas sueltas ni proveedores desconectados."
	/>

	<div class="mt-14 grid gap-6 md:grid-cols-2">
		{#each services as service, i (service.id)}
			{@const Icon = service.icon}
			<article
				id={service.id}
				use:reveal={{ delay: (i % 2) * 100 }}
				class="card-surface group relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
				style="scroll-margin-top: 6rem"
			>
				<!-- image banner -->
				<div class="relative h-44 overflow-hidden sm:h-52">
					<img
						src={service.image}
						alt={service.title}
						width="700"
						height="400"
						loading="lazy"
						class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
					/>
					<div class="absolute inset-0" style="background: linear-gradient(180deg, transparent 30%, color-mix(in srgb, var(--card) 92%, transparent))"></div>
					<div
						class="absolute bottom-4 left-5 grid h-12 w-12 place-items-center rounded-2xl text-white shadow-lg"
						style="background-image: linear-gradient(135deg, var(--brand-400), var(--brand-600))"
					>
						<Icon size={24} />
					</div>
				</div>

				<div class="p-7 pt-5 sm:p-9 sm:pt-6">
					<p class="text-xs font-semibold uppercase tracking-wide text-brand-500">{service.tagline}</p>
					<h3 class="mt-1.5 text-xl font-bold sm:text-2xl">{service.title}</h3>
					<p class="mt-3 leading-relaxed text-muted-foreground">{service.description}</p>

					{#if detailed}
						<ul class="mt-6 grid gap-2.5 sm:grid-cols-2">
							{#each service.features as feature (feature)}
								<li class="flex items-start gap-2 text-sm">
									<Check size={17} class="mt-0.5 shrink-0 text-brand-500" />
									<span class="text-muted-foreground">{feature}</span>
								</li>
							{/each}
						</ul>
					{/if}
				</div>
			</article>
		{/each}
	</div>

	{#if !detailed}
		<div class="mt-10 flex justify-center" use:reveal>
			<a href="/servicios" class="btn-ghost">
				Conoce todos los servicios <ArrowRight size={16} />
			</a>
		</div>
	{/if}
</section>
