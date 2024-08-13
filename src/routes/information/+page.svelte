<script>
    import Header from '$components/header.svelte';
    import Sidebar from '$components/sidebar.svelte';

    const title = "information";
</script>

<svelte:head>
    <title>[ home@akross:/{title} ]</title>
</svelte:head>

<Sidebar title={title}></Sidebar>
<div class="max-w-content w-full">
    <Header title={title}></Header>
    <!-- Content -->
    <img class="w-full h-28 mb-4 object-cover" src="/assets/banner1-compressed.gif" alt="banner">
    <p>&gt All of the information pertaining to the collective of akross ദ്ദി(⎚_⎚) </p>

    <h2 class="inline-flex mt-4">external:</h2> <a href="/external">[ akross:/external ]</a>
    <p>&gt where you can find all of my other social profiles and pages!</p>

    <h2 class="inline-flex mt-4">about:</h2> <a href="/about">[ akross:/about ]</a>
    <p>&gt more about me, the webmaster; akross' sudo resume</p>
    
    <h2 class="inline-flex mt-4">lore:</h2> <a href="/lore">[ akross:/lore ]</a>
    <p>&gt perhaps there's a little more to the site than meets the eye... (╭ರ_•́) </p>
</div>