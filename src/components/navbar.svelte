<script lang="ts">
    import Contact from "./windows/contact_window.svelte";
    import About from "./windows/about_window.svelte";

    let directories:any;
    let projects:any;

    let showContact:boolean;
    let showAbout:boolean;
    let showMinecraft:boolean;
</script>

<header class="font-DinkieBitmap text-2xl absolute">
    <nav class="ml-32 mt-6">
        <ul class="md:flex col-auto gap-12">
            <li class="md:inline-block" bind:this={directories}>
                <button class="group" type="button" on:click={() => (directories = !directories)} aria-expanded="true" aria-haspopup="true">
                    [ <span class="group-hover:text-yellow {!directories ? "text-orange group-hover:text-yellow-orange": "text-white"}">directories</span> ]
                    <span class="inline-flex {!directories ? "scale-y-[-1] text-orange": "text-white"}">^</span>
                </button>
                {#if !directories}
                <div class="origin-top-right md:absolute [&>*]:block ms-4">
                    <a href="https://kumiko.vercel.app/" class="hover:text-yellow" target="_blank">/ Kumiko.app</a>
                    <a href="https://discord.gg/sczXWkDsZ6" class="hover:text-yellow" target="_blank">/ Discord</a>
                    <a href="/minecraft" class="hover:text-yellow">/ Minecraft</a>
                    <!-- <li><button on:click={() => (showMinecraft = !showMinecraft)}>[ <span class="hover:text-yellow">/ Minecraft</span> ]</button></li> -->
                </div>
                {/if}
            </li>
            <li class="md:inline-block" bind:this={projects}>
                <button class="group" type="button" on:click={() => (projects = !projects)} aria-expanded="true" aria-haspopup="true">
                    [ <span class="group-hover:text-yellow {!projects ? "text-orange group-hover:text-yellow-orange": "text-white"}">projects</span> ]
                    <span class="inline-flex {!projects ? "scale-y-[-1] text-orange": "text-white"}">^</span>
                </button>
                {#if !projects}
                <div class="origin-top-right md:absolute [&>*]:block ms-4">
                    <a href="https://github.com/akr0ss/kumiko-discord-bot" class="hover:text-yellow" target="_blank">/ Kumiko</a>
                    <a href="https://github.com/AKR0SS/Taki-MAL-API-Wrapper" class="hover:text-yellow" target="_blank">/ Taki</a>
                    <a href="https://github.com/AKR0SS/TimelyWatches" class="hover:text-yellow" target="_blank">/ TimelyWatches</a>
                </div>
                {/if}
            </li>
            <li><button on:click={() => (showAbout = !showAbout)}>[ <span class="hover:text-yellow">about</span> ]</button></li>
            <li><button on:click={() => (showContact = !showContact)}>[ <span class="hover:text-yellow">contact</span> ]</button></li>
        </ul>
    </nav>
</header>

<About bind:showAbout></About>
<Contact bind:showContact></Contact>
<!-- <Minecraft bind:showMinecraft></Minecraft> -->