<script lang="ts">
    // Screen Position
	export let left = 300;
	export let top = 200;

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
			left += e.movementX;
			top += e.movementY;
		}
	}}
/>