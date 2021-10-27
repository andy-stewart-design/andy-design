<script>
	import { onMount } from 'svelte';
	import PgTransPrimary from '$lib/pageTransitions/PgTransPrimary.svelte';
	import IntersectionOberver from '$lib/IntersectionOberver.svelte';
	import HeroProject from '$lib/modules/HeroProject.svelte';
	import Image from '$lib/media/Image.svelte';

	let video;
	let isPaused = false;
	onMount(() => {
		let isPaused = false;
		let videoObserver = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					console.log(entry.isIntersecting, isPaused);
					if (entry.isIntersecting && isPaused) {
						video.play();
						isPaused = false;
					} else if (!isPaused) {
						video.pause();
						isPaused = true;
					}
				});
			},
			{ rootMargin: '-200px 0px -200px 0px' }
		);
		videoObserver.observe(video);
	});
</script>

<svelte:head>
	<title>The Design Portfolio of Andy Stewart</title>
	<meta
		name="description"
		content="Personal website and blog written from scratch with SvelteKit and TailwindCSS."
	/>
</svelte:head>

<PgTransPrimary>
	<HeroProject src="/FPO-01.jpeg" />
	<IntersectionOberver>
		<main>
			<div class="p-8">
				<div class="my-4 w-full bg-blue-600">
					<div class="relative w-full pt-9/16">
						<video
							class="absolute top-0 left-0 w-full h-full object-cover"
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

				<div class="my-4">
					<Image dataSrc="/FPO-02.jpeg" isLazy={true} />
				</div>

				<div class="my-4">
					<Image dataSrc="/FPO-03.jpeg" isLazy={true} />
				</div>

				<div class="my-4">
					<Image dataSrc="/FPO-04.jpeg" isLazy={true} />
				</div>

				<div class="my-4">
					<Image dataSrc="/FPO-05.jpeg" isLazy={true} />
				</div>
			</div>
		</main>
	</IntersectionOberver>
</PgTransPrimary>
