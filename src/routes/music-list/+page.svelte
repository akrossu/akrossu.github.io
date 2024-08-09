<script>
    import Header from '$components/header.svelte';
    import Sidebar from '$components/sidebar.svelte';

    const title = 'music-list';
</script>

<svelte:head>
    <title>[ home@akross:/{title} ]</title>
</svelte:head>

<Sidebar title={title}></Sidebar>
<div class="max-w-[675px]">
    <Header title={title}></Header>
    <img src="http://textfiles.com/underconstruction/HeHeartlandValley1469underconstruction2.gif" alt="">
</div>