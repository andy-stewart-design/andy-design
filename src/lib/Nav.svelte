<script>
	export let activeLink = '';
	import AndyMark from '$lib/SVG/AndyMark.svelte';

	let isModalActive = false;
	let toggleModal = function () {
		isModalActive = !isModalActive;
	};

	let navLinks = [
		{ name: 'Home', link: '/' },
		{ name: 'About', link: '/about' }
	];
</script>

<a class="fixed top-8 left-4 md:left-8 w-10 h-10 z-30 mix-blend-difference" href="/">
	<AndyMark dark={true} />
</a>

<div
	class="fixed top-0 right-0 w-1/2 h-screen p-8 pt-20 bg-black bg-opacity-80 backdrop-blur shadow-lg z-30 transform translate-x-full transition-transform duration-700"
	class:modalOpen={isModalActive}
>
	<nav class="flex flex-col items-start">
		{#each navLinks as navLink}
			<a
				sveltekit:prefetch
				href={navLink.link}
				class:current={activeLink === navLink.link}
				class="w-full text-white text-xl opacity-60 hover:opacity-100 transition-opacity duration-500 mb-2"
			>
				<button on:click={toggleModal} class="flex items-start w-full py-2 px-4"
					>{navLink.name}</button
				>
			</a>
		{/each}
	</nav>
</div>

<button
	on:click={toggleModal}
	class="fixed top-8 right-4 md:right-8 w-6 h-6 rounded-full bg-white bg-opacity-75 backdrop-blur border-1 border-black border-opacity-20 shadow-lg ml-4 z-40"
/>

<style>
	.current {
		@apply opacity-100;
	}
	.modalOpen {
		@apply translate-x-0;
	}
</style>
