<script>
    import { onMount } from "svelte";

    export let title = "";
    let pageTitle = ""; // why do i need dis i ponder to myself
    
    /* DISCORD STATUS */
    let textStatus = "";
    let imageStatus = "";
    let songStatus = "";
    onMount(async () => {
        fetch("https://api.lanyard.rest/v1/users/282593436803268618")
        .then(response => response.json())
        .then(data => {
            const activities = data.data.activities;
            for(let i = 0; i < activities.length; i++) {
                if (activities[i].name == "Custom Status") {
                    if (activities[i].emoji.animated) {
                        imageStatus = `https://cdn.discordapp.com/emojis/${data.data.activities[i].emoji.id}.gif`;
                    }
                    else {
                        imageStatus = `https://cdn.discordapp.com/emojis/${data.data.activities[i].emoji.id}.png`;
                    }
                    textStatus = data.data.activities[0].state;
                    if (textStatus == undefined) textStatus = "";
                }
                // Spotify listening to
                if (activities[i].name == "Spotify") {
                    try { songStatus = `${activities[i].state} - ${activities[i].details}`} catch(e) {}
                }
            }
        }).catch(error => {
            console.log(error);
            return [];
        });
    });

    /* RANDOM COLOR */
    let color = "";
    const sleep = ms => new Promise(res => setTimeout(res, ms));
    const writeLoop = async () => {
        while (true) {
            await sleep(1000);
            color = `color: #${Math.floor(Math.random()*16777215).toString(16)}`;
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
        <div class="ps-4 h-[60px]">
            <button on:click={themeSwitcher}>
                <h1 class="text-2xl md:text-3xl" bind:this={pageTitle}>[ Home@akross:/{title} ] <span style="{color}">ᨐ</span></h1>
            </button>
            <div class="h-[26px]">
                <a class="inline-block md:hidden" href="/">../home</a>
                <span class="pl-4">current status: </span>
                <img class="inline w-8 h-auto" src="{imageStatus}" alt="">
                <span class="font-sans normal-case">{textStatus}</span>
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