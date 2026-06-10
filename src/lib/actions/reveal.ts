/**
 * Svelte action: reveal an element on scroll using IntersectionObserver.
 * Progressive enhancement — if JS/IO is unavailable the element simply
 * stays visible (handled by CSS: `.reveal` only hides when JS adds it).
 */
export function reveal(node: HTMLElement, options: { delay?: number } = {}) {
	// Respect reduced motion
	const prefersReduced =
		typeof window !== 'undefined' &&
		window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	if (prefersReduced || typeof IntersectionObserver === 'undefined') {
		node.classList.add('is-visible');
		return;
	}

	node.classList.add('reveal');
	if (options.delay) node.style.transitionDelay = `${options.delay}ms`;

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('is-visible');
					observer.unobserve(node);
				}
			}
		},
		{ threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
