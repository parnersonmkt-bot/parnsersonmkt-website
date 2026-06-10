<script lang="ts">
	import { site } from '$lib/config';
	import Hero from '$lib/components/sections/Hero.svelte';
	import ClientMarquee from '$lib/components/sections/ClientMarquee.svelte';
	import ServicesSection from '$lib/components/sections/ServicesSection.svelte';
	import WhyUs from '$lib/components/sections/WhyUs.svelte';
	import ProcessSection from '$lib/components/sections/ProcessSection.svelte';
	import TestimonialsSection from '$lib/components/sections/TestimonialsSection.svelte';
	import CtaSection from '$lib/components/sections/CtaSection.svelte';
</script>

<svelte:head>
	<title>{site.name} · {site.tagline}</title>
	<meta name="description" content={site.description} />
	<meta property="og:title" content="{site.name} · {site.tagline}" />
	<meta property="og:description" content={site.description} />
	<meta property="og:type" content="website" />
</svelte:head>

<Hero />
<ClientMarquee />
<ServicesSection />
<WhyUs />
<ProcessSection />
<TestimonialsSection />
<CtaSection />
