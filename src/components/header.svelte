<script module>
  // Cache: Persists across page reloads within same session
  export let cachedLanyard = null;
</script>

<script>
    import { onMount } from 'svelte';
    import { lanyardStatus } from '$stores/lanyard.js';
    import { theme, availableThemes } from '$stores/themes.js';

    let showThemes = $state(false);

    /** @type {{title?: string}} */
    let { title = "" } = $props();
    let pageTitle = $state(""); // why do i need dis i ponder to myself

    let textStatus = "";
    let imageStatus = "";

    onMount(async () => {
        lanyardStatus.update(status => {
            if (status.textStatus) return status; // already fetched
            fetch("https://api.akross.dev/lanyard")
                .then(res => res.json())
                .then(data => {
                    lanyardStatus.set(data);
                });
            return status;
        });
    });

    /* RANDOM COLOR */
    let color = $state("");
    const sleep = ms => new Promise(res => setTimeout(res, ms));
    const writeLoop = async () => {
        while (true) {
            await sleep(1000);
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);

            color = `color: rgb(${r}, ${g}, ${b});`;
        }
    }
    writeLoop();
</script>

<div class="block relative mb-8 max-w-200">
    <div class="flex">
        <div class="hidden md:block w-30 relative">
            <img class="border-border border-solid border-2 absolute w-full h-full" src="/assets/earth.gif" alt="" draggable="false">
        </div>
        <div class="flex-1">
            <div class="ps-4 md:h-18">
                <h1 class="text-2xl md:text-3xl" bind:this={pageTitle}>
                    [ Home@akross:/{title} ]
                    <button class="inline" onclick={() => showThemes = !showThemes}>
                        <span style="{color}">ᨐ</span>
                    </button>
                </h1>
                <div class="relative">
                    {#if showThemes}
                        <div class="absolute bg-black border mt-2 p-2 flex gap-2 z-10">
                            <p>Select a site theme:</p>
                            {#each availableThemes as t (t)}
                                <button onclick={() => { theme.set(t) }}>
                                    {t}
                                </button>
                            {/each}
                        </div>
                    {/if}
                </div>
                <div class="md:h-6.5">
                    <a class="inline-block md:hidden" href="/">../home</a>
                    <span class="pl-4">current status: </span>
                    <img class="inline w-8 h-auto" src="{$lanyardStatus.imageStatus}" alt="">
                    <span class="normal-case">{$lanyardStatus.textStatus}</span>
                </div>
            </div>
            <nav class="block">
                <ul class="underline-links flex flex-1 justify-evenly py-2 max-w-nav mica
                            text-lg font-bold border-border border-solid border-2 md:border-l-0">
                    <li class="hidden md:inline"><a href="/">home</a></li>
                    <div class="hidden md:inline border-border border-solid border-l-2"></div>
                    <li><a href="/creative">creative</a></li>
                    <div class="border-border border-solid border-l-2"></div>
                    <li><a href="/garden">garden</a></li>
                    <div class="border-border border-solid border-l-2"></div>
                    <li><a href="/information">information</a></li>
                    <div class="border-border border-solid border-l-2"></div>
                    <li><a href="/community">community</a></li>
                </ul>
            </nav>
        </div>
    </div>
</div>