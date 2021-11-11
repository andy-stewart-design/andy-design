<script>
	let viewbox = '0 0 48 48';
	// export let size = '2.75rem';
	// let svg = `<path class="fill-current" d=“M28,1h-8L0.6,47h6.5c1.4-2.4,4-4,6.9-4s5.5,1.6,6.9,4h6.2c1.4-2.4,4-4,6.9-4s5.5,1.6,6.9,4h6.5L28,1z M23.8,10h0.4l4.9,12.6
	// C27.5,22.2,25.8,22,24,22s-3.5,0.2-5.1,0.6L23.8,10z M24,39.8c-2.7-2.4-6-3.8-10.4-3.8l2-5.3c2.5-1.4,5.3-2.2,8.3-2.2
	// s5.9,0.8,8.3,2.2l2,5.3C30,36,26.7,37.4,24,39.8z”/>`;
	let svg = `<path class="fill-current" d="M28,1h-8L0.6,47h6.5c1.4-2.4,4-4,6.9-4s5.5,1.6,6.9,4H24l3.1,0c1.4-2.4,4-4,6.9-4s5.5,1.6,6.9,4h6.5L28,1z M23.8,10h0.4
	l5.3,12.7C27.8,22.2,25.9,22,24,22s-3.8,0.2-5.5,0.7L23.8,10z M24,39.8c-2.7-2.4-6.6-4.1-11.2-3.8l2.3-5.6c2.6-1.6,5.6-2.5,8.8-2.5
	s6.3,0.9,8.8,2.5l2.3,5.6C30.6,35.7,26.7,37.4,24,39.8z" />`;
	export let dark = true;
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	x="0px"
	y="0px"
	width="100%"
	height="100%"
	{viewbox}
	class:text-white={dark}
	class:text-black={!dark}
>
	{@html svg}
</svg>
