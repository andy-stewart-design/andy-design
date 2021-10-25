<script>
	export let activeLink = '';
</script>

<nav>
	<a href="/" class:current={activeLink === '/'} class="font-bold py-2 mr-4">Home</a>
	<a href="/about" class:current={activeLink === '/about'} class="font-bold py-2 mr-4">About</a>
</nav>

<style>
	.current {
		@apply text-blue-600;
	}
</style>
