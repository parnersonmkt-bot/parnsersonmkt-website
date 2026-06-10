<script lang="ts">
	import { whatsappLink } from '$lib/config';
	import { MessageCircle } from 'lucide-svelte';
</script>

<a
	href={whatsappLink()}
	target="_blank"
	rel="noopener"
	aria-label="Escríbenos por WhatsApp"
	class="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-0 overflow-hidden rounded-full px-4 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:gap-2 hover:pr-6"
	style="background-image: linear-gradient(135deg, var(--brand-400), var(--brand-500) 55%, var(--brand-600)); box-shadow: 0 12px 30px -8px color-mix(in srgb, var(--brand-500) 70%, transparent);"
>
	<MessageCircle size={24} class="shrink-0" />
	<span class="max-w-0 overflow-hidden whitespace-nowrap text-sm transition-all duration-300 group-hover:max-w-[140px]">
		Hablemos
	</span>
</a>
