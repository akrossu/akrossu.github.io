<script>
    import Header from '$components/header.svelte';
    import Sidebar from '$components/sidebar.svelte';

    const title = "information";
</script>

<svelte:head>
    <title>[ home@akross:/{title} ]</title>
</svelte:head>

<Sidebar title={title}></Sidebar>
<div class="max-w-content">
    <Header title={title}></Header>
    <!-- Content -->
    <p>&gt All of the information pertaining to the collective of akross ദ്ദി(⎚_⎚) </p>

    <h2 class="inline-flex mt-4">external:</h2> <a href="/external">[ akross:/external ]</a>
    <p>&gt I like to write every now and then and my blogs are a great way to get to know me!</p>

    <h2 class="inline-flex mt-4">about:</h2> <a href="/about">[ akross:/about ]</a>
    <p>&gt more about me, the webmaster; akross' sudo resume</p>
    <!-- <p>&gt my pride and joy- what i spend most of my freetime doing if i'm not working or going to school</p> -->
    
    <h2 class="inline-flex mt-4">lore:</h2> <a href="/lore">[ akross:/lore ]</a>
    <p>&gt perhaps there's a little more to the site than meets the eye... (╭ರ_•́) </p>
</div>