<script>
    import Header from '$components/header.svelte';
    import Sidebar from '$components/sidebar.svelte';
    import Button from '$components/Button.svelte';

    import { onMount } from 'svelte';

    const title = 'photo-wall';
    
	let active = $state(false);
    let modalImage = $state();

    let images = $state([]);
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
    <p class="mb-4">&gt welcome to where I post all of my photos! if you're interested in what kind of camera gear i use you can check it out here <a href="/camera-gear">[ akross:/camera-gear ]</a></p>
    {#each Object.entries(images) as prop, index}
        <details open={index == 0}>
            <summary><h2 class="inline-flex pointer-events ps-2 align-sub pb-1">{prop[1].title}</h2></summary>
            <div class="grid grid-cols-2 gap-2 mb-8">
                <div class="[&>*]:mb-2 last:[&>*]:mb-0 [&>*]:w-full">
                    {#each prop[1].left as src}
                        <Button on:click={() => {active = !active; modalImage = prop[1].title + "/" + src}}>
                            <img src="https://raw.githubusercontent.com/akrossu/akrossu.github.io/projectA/static/assets/imageboard/{prop[1].title}/thumbnails/{src}.webp" alt="">
                        </Button>
                    {/each}
                </div>
                <div class="[&>*]:mb-2 last:[&>*]:mb-0 [&>*]:w-full">
                    {#each prop[1].right as src}
                        <Button on:click={() => {active = !active; modalImage = prop[1].title + "/" + src}}>
                            <img src="https://raw.githubusercontent.com/akrossu/akrossu.github.io/projectA/static/assets/imageboard/{prop[1].title}/thumbnails/{src}.webp" alt="">
                        </Button>
                    {/each}
                </div>
            </div>
        </details>
    {/each}
    <div class:active={active} class="fixed hidden z-10 w-full h-full mica overflow-auto left-0 top-0 overflow-y-hidden">
        {#if modalImage != undefined}
        <button class="absolute top-0 left-0 w-full h-full" aria-label="close image" onclick={() => {active = !active; modalImage = null}}>
            <span class="absolute right-0 top-0 mr-4 p-4">close X</span>
        </button>
        <img class="m-auto relative block max-w-[80%] max-h-screen" src="https://raw.githubusercontent.com/akrossu/akrossu.github.io/projectA/static/assets/imageboard/{modalImage}.JPG" alt="">
        {/if}
    </div>
    <div class="my-32"></div>
</div>

<style>
    .active {
        display: block;
    }
</style>
<!-- https://raw.githubusercontent.com/akrossu/akrossu.github.io/projectA/static/assets/imageboard/2026/DSCF0114.JPG
https://raw.githubusercontent.com/akrossu/akrossu.github.io/projectA/static/assets/imageboard/DSCF0114.JPG -->