<script>
	import PgTransPrimary from '$lib/pageTransitions/PgTransPrimary.svelte';
	import IntersectionOberver from '$lib/IntersectionOberver.svelte';
	import HeroProject from '$lib/modules/HeroProject.svelte';
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
	<div>
		<HeroProject {isLoaded} src="/FPO-01.jpeg" />
		<IntersectionOberver>
			<main class="bg-white">
				<div class="p-6">
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
