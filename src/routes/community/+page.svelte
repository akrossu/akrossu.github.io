<script>
    import Header from '$components/header.svelte';
    import Sidebar from '$components/sidebar.svelte';

    const title = "community";
</script>

<svelte:head>
    <title>[ home@akross:/{title} ]</title>
</svelte:head>

<Sidebar title={title}></Sidebar>
<div class="max-w-content w-full">
    <Header title={title}></Header>
    <!-- Content -->
    <img class="w-full h-28 mb-4 object-cover" src="/assets/banner-community.gif" alt="banner">
    <h3>// all of the various community pages! who knows what'll end up here~</h3>

    <h2 class="inline-flex mt-4">webring:</h2> <a href="/webring">[ akross:/webring ]</a>
    <p>&gt Not much as of yet, but you can find my stamp here if you'd like to add it to your site :d</p>

    <h2 class="inline-flex mt-4">guestbook:</h2> <a href="/guestbook">[ akross:/guestbook ]</a>
    <p>&gt record your visit! jot down a note and include your website if you have one!</p>

    <h2 class="inline-flex mt-4">discord:</h2> <a class="normal-case" href="https://www.discord.gg/sczXWkDsZ6" target="_blank">[ discord.gg/sczXWkDsZ6 ]</a>
    <p>&gt vidoe gams and general hang outs, everyone welcome (＾▽＾)</p>
</div>