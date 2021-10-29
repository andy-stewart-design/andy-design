<script>
	import { onMount } from 'svelte';
	export let src;
	export let autoplay = 'true';
	export let loop = 'true';
	export let muted = 'true';
	let video;

	onMount(() => {
		video.src = video.dataset.src;
	});
</script>

<div class="w-full">
	<div class="relative w-full pt-9/16">
		<video
			class="lazy-media absolute top-0 left-0 w-full h-full object-cover"
			{autoplay}
			{loop}
			{muted}
			src=""
			data-src={src}
			bind:this={video}
			on:click={video.play()}
		>
			<track kind="captions" />
			Sorry, your browser doesn't support embedded videos.
		</video>
	</div>
</div>
