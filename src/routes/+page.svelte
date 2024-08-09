<script>
    import Header from '$components/header.svelte';
    import Sidebar from '$components/sidebar.svelte';
    import Shield from '$components/shield.svelte';

    let color = "";
</script>

<svelte:head>
    <title>[ home@akross:/ ]</title>
</svelte:head>

<Sidebar></Sidebar>
<div class="max-w-[675px]">
    <Header></Header>
    <!-- body -->
    <p>&gt welcome to project akross</p>
    
    <h2 class="mt-4">about:</h2>
    <p>&gt akross is a software engineering student based in northern virginia.</p>
    <p>&gt Mostly full-stack web development but he enjoy graphics programming too!</p>

    <h3 class="inline-flex pt-4">// some of the technologies akross uses; the rest can be found in&nbsp</h3><a href="/about">[ akross:/about ]</a>
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

    <h2 class="mt-4">contact:</h2>
    <span>&gt for a full list of links, explore all of the external links here </span><a href="/external">[ akross:/external ]</a>
    <div></div>
    <span>&gt if you official business to dicuss, akross' email is always open </span><a href="mailto:zacharyt.merritt@gmail.com">[ email:/webmaster ]</a>

    <!-- <p>&gt This project is what happens when portoflio and personal websites from the early netscape collide.</p> -->
    <!-- <a class="" href="https://discord.com/users/282593436803268618"><img class="border-2 border-[#8cff1a] border-solid" src="https://lanyard.cnrad.dev/api/282593436803268618?bg=:00000000" alt=""></a> -->
    <p class="pt-12">&gt This wonderful web design was made by <a href="https://insect.christmas" target="_blank">Aztrosist <img class="inline-block" src="/insect.gif" alt="insect.christmas" draggable="false"></a></p>
</div>