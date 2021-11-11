<script>
	import PgTransPrimary from '$lib/pageTransitions/PgTransPrimary.svelte';
	import IntersectionOberver from '$lib/IntersectionOberver.svelte';
	import HeroProject from '$lib/modules/HeroProject.svelte';
	import Image from '$lib/media/Image.svelte';

	export let headline = 'This is the Home Headline';
	export let services = ['Service 001', 'Service 002', 'Service 003', 'Service 004'];
	export let specs = [
		'Client: Lorem Ipsum',
		'Industry: Dolor Sit',
		'Year: 2021',
		'Deliverable: Website'
	];
	let objective = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
	let approach = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
	let solution = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
</script>

<svelte:head>
	<title>The Design Portfolio of Andy Stewart</title>
	<meta
		name="description"
		content="Personal website and blog written from scratch with SvelteKit and TailwindCSS."
	/>
</svelte:head>

<PgTransPrimary let:isLoaded>
	<div>
		<HeroProject
			{isLoaded}
			{headline}
			{services}
			{specs}
			{objective}
			{approach}
			{solution}
			src="/FPO-01.jpeg"
		/>
		<IntersectionOberver>
			<main class="bg-white">
				<div class="p-2 md:p-6">
					<div class="my-4 px-2">
						<Image dataSrc="/FPO-02.jpeg" isLazy={true} />
					</div>

					<div class="my-4 px-2">
						<Image dataSrc="/FPO-03.jpeg" isLazy={true} />
					</div>

					<div class="my-4 px-2">
						<Image dataSrc="/FPO-04.jpeg" isLazy={true} />
					</div>

					<div class="my-4 px-2">
						<Image dataSrc="/FPO-05.jpeg" isLazy={true} />
					</div>
				</div>
			</main>
		</IntersectionOberver>
	</div>
</PgTransPrimary>
