<script>
	let video;
</script>

<div class="w-full">
	<div class="relative w-full pt-9/16">
		<video
			class="lazy-media absolute top-0 left-0 w-full h-full object-cover"
			autoplay
			loop
			muted="muted"
			src="https://player.vimeo.com/external/427897966.hd.mp4?s=ea4a73abbc089ba6f0ad5d4757df2380f8a39675&profile_id=175"
			bind:this={video}
			on:click={video.play()}
		>
			<track kind="captions" />
			Sorry, your browser doesn't support embedded videos.
		</video>
		<!-- {#if isPaused}
            <div class="absolute top-0 left-0 w-full h-full bg-red-500 opacity-50" />
        {/if} -->
	</div>
</div>
