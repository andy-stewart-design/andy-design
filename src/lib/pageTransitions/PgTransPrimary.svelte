<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	export let isLoaded = false;
	onMount(() => {
		isLoaded = true;
		console.log(isLoaded);
		return () => {
			isLoaded = false;
		};
	});
</script>

<div in:fade={{ duration: 400, delay: 600 }} out:fade={{ duration: 400 }}>
	<slot {isLoaded} />
</div>
