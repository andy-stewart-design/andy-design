<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import Nav from '$lib/Nav.svelte';

	let isLoaded = true;

	onMount(() => {
		isLoaded = false;
	});
</script>

{#if isLoaded}
	<div
		transition:fade={{ duration: 1000, delay: 500 }}
		class="w-screen h-screen absolute top-0 left-0 bg-white"
	/>
{/if}

<Nav activeLink={$page.path} />

<slot />
