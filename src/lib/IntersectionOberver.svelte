<script>
	import { onMount } from 'svelte';
	let main;

	onMount(() => {
		const lazyImages = main.querySelectorAll('.lazy-io');

		let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					let lazyImage = entry.target;
					lazyImage.src = lazyImage.dataset.src;
					lazyImage.classList.add('transition-fade');
					lazyImageObserver.unobserve(lazyImage);
				}
			});
		});
		/** Now observe all the non-loaded images using the observer we have setup above **/
		lazyImages.forEach(function (lazyImage) {
			lazyImageObserver.observe(lazyImage);
		});

		return () => {
			lazyImageObserver.disconnect();
		};
	});
</script>

<div bind:this={main}>
	<slot />
</div>
