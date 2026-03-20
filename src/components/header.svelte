<script context="module">
  // Module-level cache, persists across page reloads within the same session
  export let cachedLanyard = null;
</script>

<script>
    import { onMount } from 'svelte';
    import { lanyardStatus } from '$stores/lanyard.js';

    export let title = "";
    let pageTitle = ""; // why do i need dis i ponder to myself

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
    let color = "";
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

    
    const themes = ["default", "monochromatic", "CUSTOM"];
    let index = 0;
    let newTheme;

    function themeSwitcher() {
        index += 1;
        let themeIndex = index % themes.length;
        newTheme = themes[themeIndex];
        console.warn("This is an experimental feature, I apologize for any bugs you may encounter");

        let htmlElement = document.documentElement;
        htmlElement.setAttribute('data-theme', newTheme);
    }
</script>

<div class="flex relative mb-8">
    <div class="hidden md:block w-[100px] relative">
        <img class="border-border border-solid border-2 absolute w-full h-full" src="/assets/earth.gif" alt="">
    </div>
    <div class="flex-1">
        <div class="ps-4 md:h-[60px]">
            <button on:click={themeSwitcher}>
                <h1 class="text-2xl md:text-3xl" bind:this={pageTitle}>[ Home@akross:/{title} ] <span style="{color}">ᨐ</span></h1>
            </button>
            <div class="md:h-[26px]">
                <a class="inline-block md:hidden" href="/">../home</a>
                <span class="pl-4">current status: </span>
                <img class="inline w-8 h-auto" src="{$lanyardStatus.imageStatus}" alt="">
                <span class="normal-case">{$lanyardStatus.textStatus}</span>
            </div>
        </div>
        <nav class="block">
            <ul class="underline-links flex flex-1 justify-evenly py-2 max-w-nav
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