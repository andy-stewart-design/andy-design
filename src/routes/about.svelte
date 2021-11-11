<script>
	import PgTransPrimary from '$lib/pageTransitions/PgTransPrimary.svelte';
	import IntersectionOberver from '$lib/IntersectionOberver.svelte';
	import HeroProject from '$lib/modules/HeroProject.svelte';
	import Video from '$lib/media/Video.svelte';
	import Image from '$lib/media/Image.svelte';

	let headline = 'Promoting the Future of Seafood';
	let services = [
		'Visual Design',
		'Prototyping',
		'Illustration',
		'Animation',
		'Creative Coding',
		'UX / IA / QA'
	];
	let specs = ['Client: Glaze', 'Industry: Food & Beverage', 'Year: 2021', 'Deliverable: Website'];
	let objective = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
	let approach = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
	let solution = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
</script>

<svelte:head>
	<title>About | Andy Stewart</title>
	<meta
		name="description"
		content="I created this website to be visible on the web as a designer and to share the
        knowledge that I gathered over the years."
	/>
</svelte:head>

<PgTransPrimary let:isLoaded>
	<HeroProject
		{isLoaded}
		{headline}
		{services}
		{specs}
		{objective}
		{approach}
		{solution}
		src="/FPO-05.jpeg"
	/>
	<IntersectionOberver>
		<main class="relative bg-white">
			<div class="p-2 md:p-6">
				<div class="my-4 px-2">
					<Video
						src="https://player.vimeo.com/external/641529594.hd.mp4?s=098261326121d8b78a2e1ed27042eead40934e93&profile_id=175"
					/>
				</div>

				<div class="my-4 px-2">
					<Image dataSrc="/FPO-04.jpeg" isLazy={true} />
				</div>

				<div class="flex flex-wrap my-4">
					<div class="px-2 w-full mb-4 md:w-1/2 md:mb-0">
						<Video
							width="half"
							src="https://player.vimeo.com/external/641907863.hd.mp4?s=6b42df0c1ea9089479c991bb11227f3c4e850abc&profile_id=175"
						/>
					</div>
					<div class="px-2 w-full md:w-1/2">
						<Image dataSrc="/wildtype/wildtype-website-bages.jpeg" isLazy={true} width="half" />
					</div>
				</div>

				<div class="my-4 px-2">
					<Image dataSrc="/FPO-03.jpeg" isLazy={true} />
				</div>

				<div class="my-4 px-2">
					<Video
						src="https://player.vimeo.com/external/641745517.hd.mp4?s=9cd2fd046c91b9f7d5ecbc847eba647d4354d414&profile_id=175"
					/>
				</div>

				<div class="my-4 px-2">
					<Image dataSrc="/FPO-02.jpeg" isLazy={true} />
				</div>

				<div class="my-4 px-2">
					<Video
						src="https://player.vimeo.com/external/641535658.hd.mp4?s=405546a4f2fe0970c4b4c6f421d7282ee9d2a6dd&profile_id=175"
					/>
				</div>

				<div class="my-4 px-2">
					<Image dataSrc="/FPO-01.jpeg" isLazy={true} />
				</div>
			</div>
		</main>
	</IntersectionOberver>
</PgTransPrimary>
