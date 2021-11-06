<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import Nav from '$lib/Nav.svelte';

	let isLoaded = true;

	onMount(() => {
		isLoaded = false;
		console.log('Hey there, code peeker ;)');
	});
</script>

{#if isLoaded}
	<div
		transition:fade={{ duration: 800, delay: 1000 }}
		class="w-screen h-screen fixed top-0 left-0 bg-black z-50"
	/>
{/if}

<Nav activeLink={$page.path} />

<div class="bg-black">
	<slot />
</div>

<style>
	@font-face {
		font-family: 'JetBrains Mono';
		font-style: normal;
		font-weight: 400;
		src: url('/JetBrainsMono-Medium.woff2') format('woff2');
	}

	:global(a) {
		font-family: 'JetBrains Mono';
	}
</style>
