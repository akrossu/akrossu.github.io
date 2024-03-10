<script lang="ts">
	export let height:number;
	export let width:number;

    // Screen Position
	let left = window.innerWidth / 20;
	let top = window.innerHeight / 20;

	let moving = false;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<section 
	on:mousedown={() => {
		moving = true;
	}} 
	style="left: {left}px; top: {top}px" class="absolute cursor-move select-none"> <!-- left-[{left}] top-[{top}] -->
	<slot />
</section>

<svelte:window 
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