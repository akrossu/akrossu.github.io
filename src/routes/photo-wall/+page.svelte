<script>
    import Header from '$components/header.svelte';
    import Sidebar from '$components/sidebar.svelte';
    import Button from '$components/Button.svelte';

    import { onMount } from 'svelte';

    const title = 'photo-wall';
    
	let active = false;
    let modalImage;

    const images = {
        august_2024: {
            left:[ '20240811_151721.png', '20240811_151845.png', '20240811_151721_01.png' ],
            right:[ '20240815_184718.jpg', '20240811_151621.png', '20240811_224051.png' ],
        }
    }
</script>

<svelte:head>
    <title>[ home@akross:/{title} ]</title>
</svelte:head>

<Sidebar title={title}></Sidebar>
<div class="max-w-content w-full">
    <Header title={title}></Header>
    <p class="mb-4">&gt welcome to where I post all of my photos! this is mostly to motivate myself to take more pictures</p>
    {#each Object.entries(images) as prop, index} <!-- THIS IS SO COOL -->
        <details open={index == 0 }>
            <summary><h2 class="inline-flex pointer-events ps-2 align-sub pb-1">{prop[0]}</h2></summary>
            <div class="grid grid-cols-2 gap-2 mb-8">
                <div class="[&>*]:mb-2 last:[&>*]:mb-0 [&>*]:w-full">
                    {#each prop[1].left as src}
                        <Button on:click={() => {active = !active; modalImage = src}}>
                            <img src="/assets/imageboard/august/{src}" alt="">
                        </Button>
                    {/each}
                </div>
                <div class="[&>*]:mb-2 last:[&>*]:mb-0 [&>*]:w-full">
                    {#each prop[1].right as src}
                        <Button on:click={() => {active = !active; modalImage = src}}>
                            <img src="/assets/imageboard/august/{src}" alt="">
                        </Button>
                    {/each}
                </div>
            </div>
        </details>
    {/each}
    <div class:active={active} class="fixed hidden z-10 w-full h-full overflow-auto bg-black bg-opacity-90 left-0 top-0">
        {#if modalImage != undefined}
            <img class="m-auto block w-[80%] max-w-content mt-8" src="/assets/imageboard/august/{modalImage}" alt="">
            <button class="absolute right-0 top-0 p-4" on:click={() => {active = !active}}>X</button>
        {/if}
    </div>
    <div class="my-32"></div>
</div>

<style>
    .active {
        display: block;
    }
</style>