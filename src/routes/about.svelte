<script>
	import PgTransPrimary from '$lib/pageTransitions/PgTransPrimary.svelte';
	import IntersectionOberver from '$lib/IntersectionOberver.svelte';
	import HeroProject from '$lib/modules/HeroProject.svelte';
	import Image from '$lib/media/Image.svelte';
</script>

<svelte:head>
	<title>About | Andy Stewart</title>
	<meta
		name="description"
		content="I created this website to be visible on the web as a developer and to share the
        knowledge that I gathered over the years."
	/>
</svelte:head>

<PgTransPrimary>
	<HeroProject src="/FPO-05.jpeg" />
	<IntersectionOberver>
		<main>
			<div class="p-8">
				<div class="my-4">
					<Image dataSrc="/FPO-04.jpeg" isLazy={true} />
				</div>

				<div class="my-4">
					<Image dataSrc="/FPO-03.jpeg" isLazy={true} />
				</div>

				<div class="my-4">
					<Image dataSrc="/FPO-02.jpeg" isLazy={true} />
				</div>

				<div class="my-4">
					<Image dataSrc="/FPO-01.jpeg" isLazy={true} />
				</div>
			</div>
		</main>
	</IntersectionOberver>
</PgTransPrimary>
