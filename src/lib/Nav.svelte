<script>
	export let activeLink = '';
	import AndyMark from '$lib/SVG/AndyMark.svelte';

	let isModalActive = false;
	let toggleModal = function () {
		isModalActive = !isModalActive;
		console.log(isModalActive);
	};
</script>

<a class="fixed top-8 left-4 md:left-8 w-10 h-10 z-30 mix-blend-difference" href="/">
	<AndyMark />
</a>

<div
	class="fixed top-0 left-0 w-screen h-screen p-8 bg-black z-30 transform translate-x-full transition-transform duration-700"
	class:modalOpen={isModalActive}
>
	<nav class="flex flex-col items-start">
		<button on:click={toggleModal} class="mb-2">
			<a
				sveltekit:prefetch
				href="/"
				class:current={activeLink === '/'}
				class="text-white text-3xl opacity-60 hover:opacity-100 transition-opacity duration-500 py-2"
				>Home
			</a>
		</button>
		<button on:click={toggleModal}>
			<a
				sveltekit:prefetch
				href="/about"
				class:current={activeLink === '/about'}
				class="text-white text-3xl opacity-60 hover:opacity-100 transition-opacity duration-500 py-2"
				>About
			</a>
		</button>
	</nav>
</div>

<button
	on:click={toggleModal}
	class="fixed top-8 right-4 md:right-8 w-6 h-6 rounded-full bg-white ml-4 z-40 mix-blend-difference"
/>

<style>
	.current {
		@apply opacity-100;
	}
	.modalOpen {
		@apply translate-x-0;
	}
</style>
