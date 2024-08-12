<script>
    import { onMount } from "svelte";
    export let title = "";
    let pageTitle = ""; // why do i need dis i ponder to myself

    /* THEME SELECTOR*/
    
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
</script>

<div class="flex relative mb-8">
    <div class="hidden md:block w-[100px] relative">
        <img class="border-border border-solid border-2 absolute w-full h-full" src="/assets/earth.gif" alt="">
    </div>
    <div class="flex-1">
        <div class="ps-4 h-[60px]">
            <h1 class="text-2xl md:text-3xl" bind:this={pageTitle}>[ Home@akross:/{title} ] <span style="{color}">ᨐ</span></h1>
            <div>
                <a class="inline-block md:hidden" href="/">../home</a>
                <span class="pl-4">current status: </span>
                <img class="inline w-8" src="{imageStatus}" alt="">
                <span class="font-sans normal-case">{textStatus}</span>
            </div>
        </div>
        <div class="block">
            <!-- <ul class="flex flex-1 justify-evenly mr-auto underline-links py-2
                        md:border-l-0 w-full md:max-w-fit md:justify-normal md:gap-4 md:px-4 
                        text-lg font-bold border-border border-solid border-2"> -->
            <ul class="underline-links flex flex-1 justify-evenly py-2 [&>li]:px-5 max-w-fit
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
        </div>
    </div>
</div>