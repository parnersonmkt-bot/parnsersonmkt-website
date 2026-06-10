<script lang="ts">
	import { toggleMode, mode } from 'mode-watcher';
	import { Sun, Moon } from 'lucide-svelte';
</script>

<button
	type="button"
	onclick={toggleMode}
	class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
	aria-label="Cambiar entre modo claro y oscuro"
	title="Cambiar tema"
>
	{#if mode.current === 'dark'}
		<Sun size={18} />
	{:else}
		<Moon size={18} />
	{/if}
</button>
