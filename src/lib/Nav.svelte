<script>
	export let activeLink = '';
	import AndyMark from '$lib/SVG/AndyMark.svelte';
</script>

<a class="fixed top-8 left-4 md:left-8 w-10 h-10 z-30 mix-blend-difference" href="/">
	<AndyMark />
</a>

<nav
	class="flex items-center justify-end fixed top-8 right-4 md:right-8 h-10 z-30 mix-blend-difference"
>
	<a
		sveltekit:prefetch
		href="/"
		class:current={activeLink === '/'}
		class="font-bold text-white opacity-60 hover:opacity-100 transition-opacity duration-500 py-2 ml-4"
		>Home</a
	>
	<a
		sveltekit:prefetch
		href="/about"
		class:current={activeLink === '/about'}
		class="font-bold text-white opacity-60 hover:opacity-100 transition-opacity duration-500 py-2 ml-4"
		>About</a
	>
</nav>

<style>
	.current {
		@apply opacity-100;
	}
</style>
