<script>
    import Header from '$components/header.svelte';
    import Sidebar from '$components/sidebar.svelte';

    const title = "creative";
</script>

<svelte:head>
    <title>[ home@akross:/{title} ]</title>
</svelte:head>

<Sidebar title={title}></Sidebar>
<div>
    <Header title={title}></Header>
    <div class="max-w-[675px]">
        <p>&gt this is where i host all of my creative projects! currently i've only posted my code stuff, but I'd like to have a page for photography/editing, room decor, and shader art- etc.</p>

        <h2 class="mt-4 inline-flex">Code:</h2>
        <a href="/code">[ akross:/code ]</a>
        <p>&gt This is a list of all the projects i'm most proud of and used for an extended period of time.</p>
    </div>
</div>