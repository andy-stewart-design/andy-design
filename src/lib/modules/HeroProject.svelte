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
		<div class="flex items-end w-full h-screen -mt-screen p-6">
			<div class="flex w-full">
				<div class="pl-2 pr-8 w-1/3">
					<h1 class="relative text-3xl text-white">Promoting the Future of Seafood</h1>
				</div>
				<div class="pl-2 pr-8 w-1/3">
					<h3 class="relative text-base text-white border-b-1 pb-1 mb-2">Services</h3>
					<ul class="relative text-base text-white">
						<li class="mb-1">Visual Design</li>
						<li class="mb-1">Prototyping</li>
						<li class="mb-1">Illustration</li>
						<li class="mb-1">Animation</li>
						<li class="mb-1">Creative Coding</li>
						<li class="mb-1">UX / IA / QA</li>
					</ul>
				</div>
				<div class="pl-2 pr-8 w-1/3">
					<h3 class="relative text-base text-white border-b-1 pb-1 mb-2">Project Specs</h3>
					<ul class="relative text-base text-white">
						<li class="mb-1">Client: Glaze</li>
						<li class="mb-1">Industry: Food & Beverage</li>
						<li class="mb-1">Year: 2021</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="flex w-full px-6 py-24">
			<div class="pl-2 pr-8 w-1/3">
				<h3 class="relative text-base text-white mb-2">Objective</h3>
				<p class="relative text-white">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
					sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum.
				</p>
			</div>
			<div class="pl-2 pr-8 w-1/3">
				<h3 class="relative text-base text-white mb-2">Approach</h3>
				<p class="relative text-white">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
					sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum.
				</p>
			</div>
			<div class="pl-2 pr-8 w-1/3">
				<h3 class="relative text-base text-white mb-2">Solution</h3>
				<p class="relative text-white">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
					sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum.
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	.isLoaded {
		@apply scale-100;
	}
</style>
