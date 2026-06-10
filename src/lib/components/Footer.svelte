<script lang="ts">
	import { site, nav, whatsappLink } from '$lib/config';
	import { services } from '$lib/content';
	import Logo from './Logo.svelte';
	import { Mail, MapPin, Phone } from 'lucide-svelte';
</script>

<footer class="border-t" style="background-color: var(--background-secondary)">
	<div class="container-px grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
		<div class="max-w-xs">
			<Logo size={40} />
			<p class="mt-5 text-sm leading-relaxed text-muted-foreground">
				{site.description}
			</p>
			<div class="mt-6 flex gap-3">
				<a href={site.social.instagram} target="_blank" rel="noopener" aria-label="Instagram" class="grid h-10 w-10 place-items-center rounded-full border transition-colors hover:border-brand-500 hover:text-brand-500" style="border-color: var(--card-border)">
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
				</a>
				<a href={site.social.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" class="grid h-10 w-10 place-items-center rounded-full border transition-colors hover:border-brand-500 hover:text-brand-500" style="border-color: var(--card-border)">
					<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>
				</a>
				<a href={site.social.facebook} target="_blank" rel="noopener" aria-label="Facebook" class="grid h-10 w-10 place-items-center rounded-full border transition-colors hover:border-brand-500 hover:text-brand-500" style="border-color: var(--card-border)">
					<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.03 4.39 11.03 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z"/></svg>
				</a>
			</div>
		</div>

		<div>
			<h3 class="text-sm font-semibold">Navegación</h3>
			<ul class="mt-4 space-y-3 text-sm text-muted-foreground">
				{#each nav as item (item.href)}
					<li><a href={item.href} class="transition-colors hover:text-brand-500">{item.label}</a></li>
				{/each}
			</ul>
		</div>

		<div>
			<h3 class="text-sm font-semibold">Servicios</h3>
			<ul class="mt-4 space-y-3 text-sm text-muted-foreground">
				{#each services as s (s.id)}
					<li><a href="/servicios#{s.id}" class="transition-colors hover:text-brand-500">{s.title}</a></li>
				{/each}
			</ul>
		</div>

		<div>
			<h3 class="text-sm font-semibold">Contacto</h3>
			<ul class="mt-4 space-y-3 text-sm text-muted-foreground">
				<li><a href="mailto:{site.email}" class="flex items-center gap-2 transition-colors hover:text-brand-500"><Mail size={16} class="shrink-0" /> {site.email}</a></li>
				<li><a href={whatsappLink()} target="_blank" rel="noopener" class="flex items-center gap-2 transition-colors hover:text-brand-500"><Phone size={16} class="shrink-0" /> {site.phoneDisplay}</a></li>
				<li class="flex items-start gap-2"><MapPin size={16} class="mt-0.5 shrink-0" /> {site.location}</li>
			</ul>
		</div>
	</div>

	<div class="border-t" style="border-color: var(--card-border)">
		<div class="container-px flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-foreground sm:flex-row">
			<p>© {new Date().getFullYear()} {site.legalName}. Todos los derechos reservados.</p>
			<p>Crecimiento digital con propósito · Hecho con energía naranja.</p>
		</div>
	</div>
</footer>
