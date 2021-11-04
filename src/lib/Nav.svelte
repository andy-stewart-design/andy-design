<script>
	export let activeLink = '';
	import AndyMark from '$lib/SVG/AndyMark.svelte';
</script>

<nav class="flex justify-between absolute top-0 left-0 w-full p-4 z-30">
	<a href="/">
		<AndyMark />
	</a>

	<div>
		<a href="/" class:current={activeLink === '/'} class="font-bold text-white py-2 mr-4">Home</a>
		<a href="/about" class:current={activeLink === '/about'} class="font-bold text-white py-2 mr-4"
			>About</a
		>
	</div>
</nav>

<style>
	.current {
		@apply text-blue-600;
	}
</style>
