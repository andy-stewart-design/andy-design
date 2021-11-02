<script>
	export let activeLink = '';
</script>

<nav class="absolute top-0 left-0 z-30">
	<a href="/" class:current={activeLink === '/'} class="font-bold text-white py-2 mr-4">Home</a>
	<a href="/about" class:current={activeLink === '/about'} class="font-bold text-white py-2 mr-4"
		>About</a
	>
</nav>

<style>
	.current {
		@apply text-blue-600;
	}
</style>
