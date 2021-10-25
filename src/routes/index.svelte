<script>
	import PgTransPrimary from '$lib/pageTransitions/PgTransPrimary.svelte';
	import IntersectionOberver from '$lib/IntersectionOberver.svelte';
	import Image from '$lib/media/Image.svelte';
</script>

<PgTransPrimary>
	<IntersectionOberver>
		<main>
			<div class="w-screen h-screen overflow-hidden">
				<Image src="/FPO-01.jpeg" alt="ksjndcj" />
			</div>

			<div class="p-8">
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
