<script>
	import '../app.css';
	import { page } from '$app/stores';
	// import PgTransPrimary from '$lib/pageTransitions/PgTransPrimary.svelte';
	import Nav from '$lib/Nav.svelte';
</script>

<Nav activeLink={$page.path} />

<!-- <PgTransPrimary refresh={$page.path}> -->
<slot />
<!-- </PgTransPrimary> -->
