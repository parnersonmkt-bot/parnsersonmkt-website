<script lang="ts">
	import { site } from '$lib/config';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import ServicesSection from '$lib/components/sections/ServicesSection.svelte';
	import ProcessSection from '$lib/components/sections/ProcessSection.svelte';
	import WhyUs from '$lib/components/sections/WhyUs.svelte';
	import FaqSection from '$lib/components/sections/FaqSection.svelte';
	import CtaSection from '$lib/components/sections/CtaSection.svelte';
</script>

<svelte:head>
	<title>Servicios · {site.name}</title>
	<meta
		name="description"
		content="Performance marketing, automatización con IA, SEO, contenido, diseño web y CRO. Un ecosistema completo de crecimiento digital."
	/>
</svelte:head>

<PageHeader
	eyebrow="Servicios"
	title="Crecimiento digital de extremo a extremo"
	subtitle="Cada servicio está diseñado para conectarse con los demás y crear una máquina de adquisición, conversión y fidelización que escala contigo."
/>

<ServicesSection detailed />
<WhyUs />
<ProcessSection />
<FaqSection />
<CtaSection />
