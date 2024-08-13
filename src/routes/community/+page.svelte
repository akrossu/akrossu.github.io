<script>
    import Header from '$components/header.svelte';
    import Sidebar from '$components/sidebar.svelte';

    const title = "community";
</script>

<svelte:head>
    <title>[ home@akross:/{title} ]</title>
</svelte:head>

<Sidebar title={title}></Sidebar>
<div class="w-content">
    <Header title={title}></Header>
    <!-- Content -->
    <img src="/assets/construction.gif" alt="under construction">
</div>