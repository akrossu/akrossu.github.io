<script lang="ts">
	export let height:number;
	export let width:number;

	let inHeight:number;
	let inWidth:number;
    // Screen Position
	$: left = 1 / 20;
	$: top = 1 / 20;

	let moving = false;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->

<svelte:window
	bind:innerHeight={inHeight}
	bind:innerWidth={inWidth}
	on:mouseup={() => {
		moving = false;
	}} 
	on:mousemove={(e) => {
		if (moving) {
			// Bounding box
			if (left < 0) left = 0;
			if (top < 0)  top = 0;
			if (left > window.innerWidth - width) left = window.innerWidth - width;
			if (top > window.innerHeight - height) top = window.innerHeight - height;
			// move
			left += e.movementX;
			top += e.movementY;
		}
	}}
/>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<section 
	on:mousedown={() => {
		moving = true;
	}} 
	style="left: {left}px; top: {top}px" class="absolute cursor-move select-none"> <!-- left-[{left}] top-[{top}] -->
	<slot />
</section>