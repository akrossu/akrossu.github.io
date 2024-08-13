<script>
    import Header from '$components/header.svelte';
    import Sidebar from '$components/sidebar.svelte';

    const title = 'garden';
</script>

<svelte:head>
    <title>[ home@akross:/{title} ]</title>
</svelte:head>

<Sidebar title={title}></Sidebar>
<div class="max-w-content w-full">
    <Header title={title}></Header>
    <!-- Content -->
    <p>&gt Welcome to my own digital garden! this is a very intimate space, so please be kind ♡(｡- ω -)</p>

    <h2 class="inline-flex mt-4">blog:</h2> <a href="/blog">[ akross:/blog ]</a>
    <!-- <p>&gt I like to write about anything and everything include personal stuffs!</p> -->
    <p>&gt I like to write every now and then and my blogs are where i like to talk about anything and everything!</p>
    
    <h2 class="inline-flex mt-4">game list:</h2> <a href="/game-list">[ akross:/game-list ]</a>
    <p>&gt my pride and joy- I tend to write short reviews for games i've finished</p>

    <h2 class="inline-flex mt-4">music list:</h2> <a href="/music-list">[ akross:/music-list ]</a>
    <p>&gt I haven't planted this yet, but I will!</p>
</div>