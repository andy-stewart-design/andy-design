<script>
	export let activeLink = '';
	import AndyMark from '$lib/SVG/AndyMark.svelte';
</script>

<nav
	class="flex justify-between fixed top-0 left-0 w-full py-4 px-4 md:px-8 z-30 mix-blend-difference"
>
	<a href="/">
		<AndyMark />
	</a>

	<div>
		<a
			sveltekit:prefetch
			href="/"
			class:current={activeLink === '/'}
			class="font-bold text-white opacity-60 hover:opacity-100 transition-opacity duration-500 py-2 mr-4"
			>Home</a
		>
		<a
			sveltekit:prefetch
			href="/about"
			class:current={activeLink === '/about'}
			class="font-bold text-white opacity-60 hover:opacity-100 transition-opacity duration-500 py-2 mr-4"
			>About</a
		>
	</div>
</nav>

<style>
	.current {
		@apply opacity-100;
	}
</style>
