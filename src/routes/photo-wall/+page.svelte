<script>
    import Header from '$components/header.svelte';
    import Sidebar from '$components/sidebar.svelte';
    import Button from '$components/Button.svelte';

    import { onMount } from 'svelte';

    const title = 'photo-wall';
    
	let active = false;
    let modalImage;

    let images = [];
    let dir;
    let src;

    onMount(async () => {
        await fetch("https://raw.githubusercontent.com/akrossu/akrossu.github.io/projectA/static/photo-wall.json")
        .then(response => response.json())
        .then(data => images = data);
    });
</script>

<svelte:head>
    <title>[ home@akross:/{title} ]</title>
</svelte:head>

<Sidebar title={title}></Sidebar>
<div class="max-w-content w-full">
    <Header title={title}></Header>
    <p class="mb-4">&gt welcome to where I post all of my photos! this is mostly to motivate myself to take more pictures</p>
    {#each Object.entries(images) as prop, index}
        <details open={index == 0}>
            <summary><h2 class="inline-flex pointer-events ps-2 align-sub pb-1">{prop[1].title}</h2></summary>
            <div class="grid grid-cols-2 gap-2 mb-8">
                <div class="[&>*]:mb-2 last:[&>*]:mb-0 [&>*]:w-full">
                    {#each prop[1].left as src}
                        <Button on:click={() => {active = !active; modalImage = src}}>
                            <img src="https://raw.githubusercontent.com/akrossu/akrossu.github.io/projectA/static/assets/imageboard/august/{src}" alt="">
                        </Button>
                    {/each}
                </div>
                <div class="[&>*]:mb-2 last:[&>*]:mb-0 [&>*]:w-full">
                    {#each prop[1].right as src}
                        <Button on:click={() => {active = !active; modalImage = src}}>
                            <img src="https://raw.githubusercontent.com/akrossu/akrossu.github.io/projectA/static/assets/imageboard/august/{src}" alt="">
                        </Button>
                    {/each}
                </div>
            </div>
        </details>
    {/each}
    <div class:active={active} class="fixed hidden z-10 w-full h-full overflow-auto bg-black bg-opacity-60 left-0 top-0">
        {#if modalImage != undefined}
        <button class="absolute top-0 left-0 w-full h-full" aria-label="close" on:click={() => {active = !active}}>
            <span class="absolute md:hidden right-0 top-0 mr-4 p-4">X</span>
        </button>
        <img class="m-auto relative block w-[80%] max-w-content mt-8" src="/assets/imageboard/august/{modalImage}" alt="">
        {/if}
    </div>
    <div class="my-32"></div>
</div>

<style>
    .active {
        display: block;
    }
</style>