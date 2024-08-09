<script>
    import { onMount } from "svelte";
    export let title = "";
    let pageTitle = "";
    
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
    <div class="w-[112px] relative">
        <img class="border-border border-solid border-2 absolute w-full h-full" src="/earth.gif" alt="">
    </div>
    <div class="flex-1">
        <div class="ps-4 h-[60px] mb-4">
            <h1 class="text-3xl" bind:this={pageTitle}>[ Home@akross:/{title} ] <span style="{color}">ᨐ</span></h1>
            <div class="mb-4">
                <span class="pl-4">current status: </span>
                <img class="inline w-8" src="{imageStatus}" alt="">
                <span class="font-sans">{textStatus}</span>
            </div>
        </div>
        <div class="block">
            <ul class="inline-flex border-border border-solid border-2 border-l-0 gap-4 px-4 py-2 underline text-lg font-bold">
                <a href="/">home</a>
                <a class="border-l-2 border-border pl-4" href="/creative">creative</a>
                <a class="border-l-2 border-border pl-4" href="/information">information</a>
                <a class="border-l-2 border-border pl-4" href="/community">community</a>
            </ul>
        </div>
    </div>
</div>