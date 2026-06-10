<script lang="ts">
	import { clients } from '$lib/content';
	const row = [...clients, ...clients];
</script>

<section class="border-y py-8" style="border-color: var(--card-border); background-color: var(--background-secondary)">
	<div class="container-px">
		<p class="text-center text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
			Marcas que confían en nuestro crecimiento
		</p>
	</div>
	<div class="relative mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
		<div class="animate-marquee flex w-max items-center gap-14 pr-14">
			{#each row as name, i (name + i)}
				<span class="font-display text-2xl font-bold text-muted-foreground/70 transition-colors hover:text-brand-500">
					{name}
				</span>
			{/each}
		</div>
	</div>
</section>
