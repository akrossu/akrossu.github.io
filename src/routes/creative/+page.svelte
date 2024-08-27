<script>
    import Header from '$components/header.svelte';
    import Sidebar from '$components/sidebar.svelte';

    const title = "creative";
</script>

<svelte:head>
    <title>[ home@akross:/{title} ]</title>
</svelte:head>

<Sidebar title={title}></Sidebar>
<div class="max-w-content w-full">
    <Header title={title}></Header>
    <!-- Content -->
    <img class="w-full h-28 mb-4 object-cover" src="/assets/banner2-compressed.gif" alt="banner">
    <h3>// this is where i host all of my creative projects! currently i've only posted my code stuff and photography/editing, but i want to show off my room decor, shader art, and whatever else I end up hyperfixating on :3 </h3>

    <h2 class="mt-4 inline-flex">Code:</h2>
    <a href="/code">[ akross:/code ]</a>
    <p>&gt This is a list of all the projects i'm most proud of and have used for an extended period of time.</p>

    <h2 class="mt-4 inline-flex">photo-wall:</h2>
    <a href="/photo-wall">[ akross:/photo-wall ]</a>
    <p>&gt all the small moments I try to keep as a reminder to be appreciative of our time here.</p>
</div>