<script>
	export let src = '';
	export let alt = "andy's image";
	export let isLoaded = false;
</script>

<div class="relative w-screen h-screen overflow-hidden bg-black">
	<img
		class:isLoaded
		class="relative w-full h-full object-cover scale-150 opacity-50 transition-transform duration-1000 delay-1000 ease-out"
		{src}
		{alt}
	/>
	<!-- <div
		class:opacity-75={isLoaded}
		class="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-1000 delay-1000 ease-out"
	/> -->
</div>

<style>
	.isLoaded {
		@apply scale-100;
	}
</style>
