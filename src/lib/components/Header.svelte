<script lang="ts">
	import { page } from '$app/state';
	import { nav, whatsappLink } from '$lib/config';
	import Logo from './Logo.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import { Menu, X, MessageCircle } from 'lucide-svelte';

	let open = $state(false);
	let scrolled = $state(false);

	function onScroll() {
		scrolled = window.scrollY > 12;
	}

	function isActive(href: string) {
		if (href === '/') return page.url.pathname === '/';
		if (href.startsWith('/#')) return false;
		return page.url.pathname.startsWith(href);
	}
</script>

<svelte:window on:scroll={onScroll} />

<header class="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-6">
	<!-- floating pill -->
	<nav
		aria-label="Principal"
		class="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border py-2.5 pr-2.5 pl-5
			border-white/15 backdrop-blur-md transition-all duration-300
			bg-gradient-to-r from-brand-600 via-brand-500 to-brand-400
			dark:border-white/10 dark:from-[#121212]/75 dark:via-[#121212]/75 dark:to-[#121212]/75 dark:backdrop-blur-xl"
		style="box-shadow: {scrolled
			? '0 16px 50px -14px rgba(241,118,14,0.55)'
			: '0 10px 35px -16px rgba(241,118,14,0.45)'}"
	>
		<a href="/" class="flex items-center" aria-label="Inicio — Parnerson Marketing">
			<Logo variant="white" size={30} />
		</a>

		<!-- Desktop nav -->
		<ul class="hidden items-center gap-1 lg:flex">
			{#each nav as item (item.href)}
				<li>
					<a
						href={item.href}
						class="rounded-full px-4 py-2 text-sm font-medium text-white/85 transition-colors hover:text-white"
						class:!text-white={isActive(item.href)}
						class:font-semibold={isActive(item.href)}
					>
						{item.label}
					</a>
				</li>
			{/each}
		</ul>

		<div class="flex items-center gap-2">
			<ThemeToggle />
			<a href={whatsappLink()} target="_blank" rel="noopener" class="btn-light hidden !py-2.5 sm:inline-flex">
				<MessageCircle size={16} /> Hablemos
			</a>
			<button
				type="button"
				class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10 lg:hidden"
				onclick={() => (open = !open)}
				aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
				aria-expanded={open}
			>
				{#if open}<X size={20} />{:else}<Menu size={20} />{/if}
			</button>
		</div>
	</nav>

	<!-- Mobile menu -->
	{#if open}
		<div
			class="mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl border p-3 lg:hidden
				border-white/15 bg-gradient-to-br from-brand-600 to-brand-500
				dark:border-white/10 dark:from-[#121212]/95 dark:to-[#121212]/95 dark:backdrop-blur-xl"
			style="box-shadow: 0 20px 50px -16px rgba(0,0,0,0.4)"
		>
			<ul class="flex flex-col gap-1">
				{#each nav as item (item.href)}
					<li>
						<a
							href={item.href}
							class="block rounded-2xl px-4 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
							onclick={() => (open = false)}
						>
							{item.label}
						</a>
					</li>
				{/each}
				<li class="px-1 pt-2 pb-1">
					<a
						href={whatsappLink()}
						target="_blank"
						rel="noopener"
						class="btn-light w-full"
						onclick={() => (open = false)}
					>
						<MessageCircle size={16} /> Hablemos por WhatsApp
					</a>
				</li>
			</ul>
		</div>
	{/if}
</header>
