<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	export let isLoaded = false;
	onMount(() => {
		isLoaded = true;
		return () => {
			isLoaded = false;
		};
	});
</script>

<div in:fade={{ duration: 800, delay: 1000 }} out:fade={{ duration: 800 }}>
	<slot {isLoaded} />
</div>
