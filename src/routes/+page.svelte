<script>
    import Header from '$components/header.svelte';
    import Sidebar from '$components/sidebar.svelte';
    import Shield from '$components/shield.svelte';

    let color = "";
    const title = 'home';
</script>

<svelte:head>
    <title>[ home@akross:/ ]</title>
</svelte:head>

<Sidebar title={title}></Sidebar>
<div class="max-w-content w-full">
    <Header></Header>
    <!-- body -->
    <p>&gt welcome to project akross</p>
    
    <!-- TODO: ADD UPDATE SECTION -->

    <h2 class="mt-4">about:</h2>
    <p>&gt hii! i'm a software engineering student based in northern virginia.</p>
    <p>&gt Mostly full-stack web development but graphics programming is pretty cool too :3</p>

    <div class="mt-4"></div>
    <h3 class="inline">// some of the technologies I use; the rest can be found in&nbsp</h3><a href="/about">[ akross:/about ]</a>
    <div></div>
    <div class="inline-flex">
        <Shield title="java"></Shield>
        <div class="mx-4"></div>
        <Shield title="html" logo="html5"></Shield>
        <div class="mx-4"></div>
        <Shield title="css" logo="css3" color="1572B6"></Shield>
        <div class="mx-4"></div>
        <Shield title="javascript" logo="javascript"></Shield>
    </div>

    <h2 class="mt-8">contact:</h2>
    <span>&gt for a full list of links, explore all of the external links here </span><a href="/external">[ akross:/external ]</a>
    <div></div>
    <span>&gt if you have official business to dicuss, my email is always open </span><a href="mailto:webmaster@akross.dev">[ email:/webmaster ]</a>

    <div class="my-8"></div>

    <!-- <h2 class="mt-8 pb-2">live feed of me coding:</h2>
    <img class="ms-2" src="/assets/funny-cat.gif" alt="cat typing"> -->

    <!-- <p>&gt This project is what happens when portoflio and personal websites from the early netscape collide.</p> -->
    <!-- <a class="" href="https://discord.com/users/282593436803268618"><img class="border-2 border-[#8cff1a] border-solid" src="https://lanyard.cnrad.dev/api/282593436803268618?bg=:00000000" alt="discord activity"></a> -->
    <p class="my-8 pb-16">&gt This wonderful web design was made by <a href="https://insect.christmas" target="_blank">Aztrosist <img class="inline-block" src="/assets/webring/insect.gif" alt="insect.christmas" draggable="false"></a></p>
</div>