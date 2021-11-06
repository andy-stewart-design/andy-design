<script>
	export let src = '';
	export let alt = "andy's image";
	export let isLoaded = false;
</script>

<div class="relative block bg-black">
	<div>
		<div class="sticky top-0 left-0 w-screen h-screen overflow-hidden">
			<img
				class:isLoaded
				class="w-screen h-full object-cover scale-150 opacity-50 transition-transform duration-1000 delay-1000 ease-out"
				{src}
				{alt}
			/>
		</div>
		<div class="w-full h-40 -mt-40 p-8">
			<h1 class="relative text-3xl text-white">This is a headline</h1>
		</div>
		<div class="w-full h-96 p-8">
			<p class="relative text-white mb-8">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
			<p class="relative text-white">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		</div>
	</div>
</div>

<style>
	.isLoaded {
		@apply scale-100;
	}
</style>
