<script>
	import PgTransPrimary from '$lib/pageTransitions/PgTransPrimary.svelte';
	import IntersectionOberver from '$lib/IntersectionOberver.svelte';
	import HeroProject from '$lib/modules/HeroProject.svelte';
	import Video from '$lib/media/Video.svelte';
	import Image from '$lib/media/Image.svelte';
</script>

<svelte:head>
	<title>The Design Portfolio of Andy Stewart</title>
	<meta
		name="description"
		content="Personal website and blog written from scratch with SvelteKit and TailwindCSS."
	/>
</svelte:head>

<PgTransPrimary let:isLoaded>
	<HeroProject {isLoaded} src="/FPO-01.jpeg" />
	<IntersectionOberver>
		<main class="bg-gray-200">
			<div class="p-8">
				<div class="my-4">
					<Video
						src="https://player.vimeo.com/external/427897966.hd.mp4?s=ea4a73abbc089ba6f0ad5d4757df2380f8a39675&profile_id=175"
					/>
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
