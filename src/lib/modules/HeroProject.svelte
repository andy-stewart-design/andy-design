<script>
	export let src = '';
	export let alt = "andy's image";
</script>

<div class="w-screen h-screen overflow-hidden">
	<img class="w-full h-full object-cover" {src} {alt} />
</div>
