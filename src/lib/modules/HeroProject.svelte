<script>
	export let src = '';
	export let alt = "andy's image";
	export let isLoaded = false;
</script>

<div class="relative w-screen h-screen overflow-hidden">
	<img
		class:scale-125={isLoaded}
		class="relative w-full h-full object-cover transition-transform duration-1000 delay-1000"
		{src}
		{alt}
	/>
	<div
		class:opacity-75={isLoaded}
		class="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-1000 delay-1000"
	/>
</div>
