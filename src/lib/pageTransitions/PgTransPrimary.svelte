<script>
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';
	export let isLoaded = false;
	onMount(() => {
		isLoaded = true;
		return () => {
			isLoaded = false;
		};
	});
</script>

<div in:fade={{ duration: 800, delay: 1000 }} out:fade={{ duration: 800 }}>
	<div class="w-screen h-screen overflow-scroll">
		<slot {isLoaded} />
	</div>
</div>
