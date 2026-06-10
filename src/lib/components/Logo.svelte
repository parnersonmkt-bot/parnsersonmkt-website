<script lang="ts">
	type Props = {
		/** 'white' = always white logo (for dark/orange backgrounds);
		 *  'auto'  = color logo in light mode, white logo in dark mode. */
		variant?: 'white' | 'auto';
		/** pixel height of the logo */
		size?: number;
		class?: string;
	};
	let { variant = 'auto', size = 36, class: klass = '' }: Props = $props();

	const alt = 'Parnerson Marketing';
</script>

{#if variant === 'white'}
	<img src="/brand/logo-white.png" {alt} style="height:{size}px;width:auto" class="block {klass}" />
{:else}
	<!-- color logo for light backgrounds, white logo for dark -->
	<img
		src="/brand/logo-horizontal.png"
		{alt}
		style="height:{size}px;width:auto"
		class="block dark:hidden {klass}"
	/>
	<img
		src="/brand/logo-white.png"
		{alt}
		style="height:{size}px;width:auto"
		class="hidden dark:block {klass}"
	/>
{/if}
