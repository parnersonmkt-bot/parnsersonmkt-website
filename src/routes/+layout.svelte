<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import { site } from '$lib/config';
	import { page } from '$app/state';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import WhatsAppFloat from '$lib/components/WhatsAppFloat.svelte';

	let { children } = $props();

	const ogImage = `${site.url}/og-social.png`;
	const canonical = $derived(`${site.url}${page.url.pathname}`.replace(/\/$/, '') || site.url);
</script>

<svelte:head>
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
	<link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png" />
	<link rel="icon" type="image/png" href="/favicon.png" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />

	<!-- Canonical + Open Graph / social sharing defaults -->
	<link rel="canonical" href={canonical} />
	<meta property="og:url" content={canonical} />
	<meta property="og:site_name" content={site.legalName} />
	<meta property="og:locale" content="es_AR" />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Parnerson Marketing" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content={ogImage} />
</svelte:head>

<ModeWatcher />

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>

<WhatsAppFloat />
