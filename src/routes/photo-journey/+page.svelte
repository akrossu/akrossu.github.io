<script>
    import Button from '$components/Button.svelte';
    import Header from '$components/header.svelte';
    import Sidebar from '$components/sidebar.svelte';

    const title = 'photo-journey';

	let active = $state(false);
    let modalImage = $state();
</script>

<svelte:head>
    <title>[ home@akross:/{title} ]</title>
</svelte:head>

<Sidebar title={title}></Sidebar>
<div class="max-w-content w-full">
    <Header title={title}></Header>
    
    <!-- content -->
    <p>&gt a history of a photo conversation i keep with one of my friends. he lives in europe so they often contrast with my photos here in the us. the goal is to keep an element, composition, or color relational in each image to give the next person something to work off of. we also note some of our thoughts and justifications</p>
    <div class="grid grid-cols-2 w-full *:p-2 mt-4">
        <!-- image 1 -->
        <button onclick={() => {active = !active; modalImage = 1}}>
            <img src="https://raw.githubusercontent.com/akrossu/akrossu.github.io/projectA/static/assets/photojourney/thumbnails/1.webp">
        </button>
        <div class="m-auto p-8">
            <p>6.13.26</p>
            <p>Super awesome sauce image to start us off</p>
        </div>

        <!-- image 2 -->
        <div class="m-auto p-8">
            <p>6.14.26</p>
            <p>Got the Murican stripes right next to the blessed Porta Potty (Toi Toi), instantly thought of home</p>
        </div>
        <Button on:click={() => {active = !active; modalImage = 2}}>
            <img src="https://raw.githubusercontent.com/akrossu/akrossu.github.io/projectA/static/assets/photojourney/thumbnails/2.webp">
        </Button>

        <!-- image 3 -->
        <Button on:click={() => {active = !active; modalImage = 3}}>
            <img src="https://raw.githubusercontent.com/akrossu/akrossu.github.io/projectA/static/assets/photojourney/thumbnails/3.webp">
        </Button>
        <div class="m-auto p-8">
            <p>6.16.26</p>
            <p>Tried to also have a phone number in the photo, but the stickers are cool, especially the floss pick</p>
        </div>
    </div>

    <!-- Image modal -->
    <div class:active={active} class="fixed hidden z-10 w-full h-full mica overflow-auto left-0 top-0 overflow-y-hidden">
        {#if modalImage != undefined}
        <button class="absolute top-0 left-0 w-full h-full" aria-label="close image" onclick={() => {active = !active; modalImage = null}}>
            <span class="absolute right-0 top-0 mr-4 p-4">X</span>
        </button>
        <img class="m-auto relative block max-w-[80%] max-h-screen photo-full"
            src="https://raw.githubusercontent.com/akrossu/akrossu.github.io/projectA/static/assets/photojourney/{modalImage}.JPG"
            alt=""
            loading="lazy">
        {/if}
    </div>
    <div class="my-32"></div>
</div>

<style>
    .active {
        display: block;
    }
</style>