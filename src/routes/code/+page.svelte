<script>
    import Header from '$components/header.svelte';
    import Sidebar from '$components/sidebar.svelte';
    import Shield from '$components/shield.svelte';

    const title = 'code';
</script>

<svelte:head>
    <title>[ home@akross:/{title} ]</title>
</svelte:head>

<Sidebar title={title}></Sidebar>
<div>
    <Header title={title}></Header>
    <a href="https://github.com/akrossu" target="_blank">[ external:/github.com/akrossu ]</a>
    <p class="mb-4">&gt Where you can find all of my public coding projects</p>
    <!-- Portfolio Website -->
    <div class="inline-flex">
        <img class="mr-8 w-28 h-28 object-cover border-border border-2" src="/personal-website.png" alt="">
        <div>
            <h2>akrossu.github.io</h2>
            <p>&gt personal/portfolio website.</p>
            <a class="block pb-2 ps-4" href="https://github.com/akrossu/akrossu.github.io" target="_blank">[ github:/akrossu.github.io ]</a>
            <div class="inline-flex mb-8 ps-4">
                <Shield title="svelte" logo="svelte"></Shield>
                <div class="mx-4"></div>
                <Shield title="tailwindcss" logo="tailwindcss"></Shield>
                <div class="mx-4"></div>
                <Shield title="javascript" logo="javascript"></Shield>
                <div class="mx-4"></div>
                <Shield title="glsl" logo="opengl"></Shield>
            </div>
        </div>
    </div>
    <div></div>
    <!-- Discord Theme -->
    <div class="inline-flex">
        <img class="mr-8 w-28 h-28 object-cover border-border border-2" src="/discord-theme.png" alt="">
        <div>
            <h2>Simple and Clean</h2>
            <p>&gt A discord theme that takes advantage of the full app area.</p>
            <a class="block pb-2 ps-4" href="https://github.com/akrossu/SimpleAndClean" target="_blank">[ github:/simpleandclean ]</a>
            <div class="inline-flex mb-8 ps-4"><Shield title="css" logo="css3" color="1572B6"></Shield></div>
        </div>
    </div>
    <div></div>
    <!-- Kumiko -->
    <div class="inline-flex">
        <img class="mr-8 w-28 h-28 object-cover border-border border-2" src="/kumiko-discord.png" alt="">
        <div>
            <h2>Kumiko Discord App</h2>
            <p>&gt An anime discord bot; without command bloat!</p>
            <div class="ps-4">
                <p>live website: <a class="ps-4" href="https://kumiko.vercel.app/" target="_blank">[ external:/kumiko.app ]</a></p>
                <p>github repository: <a class="ps-4" href="https://github.com/akrossu/kumiko-discord-bot" target="_blank">[ github:/kumiko-discord-bot ]</a></p>
                <div class="inline-flex mb-8 mt-2">
                    <Shield title="javascript" logo="javascript"></Shield>
                </div>
            </div>
        </div>
    </div>
    <div></div>
    <!-- taki mal api -->
    <div class="inline-flex">
        <img class="mr-8 w-28 h-28 object-cover border-border border-2" src="/taki-api.png" alt="">
        <div>
            <h2>Taki-MAL-API-Wrapper</h2>
            <p>&gt A Client Authorized My Anime List API Wrapper</p>
            <a class="block pb-2 ps-4" href="https:///github.com/akrossu/Taki-MAL-API-Wrapper" target="_blank">[ github:/Taki-MAL-API-Wrapper ]</a>
            <div class="inline-flex mb-8 ps-4">    
                <Shield title="javascript" logo="javascript"></Shield>
            </div>
        </div>
    </div>
</div>