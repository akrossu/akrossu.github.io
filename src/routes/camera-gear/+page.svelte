<script>
    import Header from '$components/header.svelte';
    import Sidebar from '$components/sidebar.svelte';
    import Button from '$components/Button.svelte';

    const title = 'camera-gear';
</script>

<svelte:head>
    <title>[ home@akross:/{title} ]</title>
</svelte:head>
<Sidebar title={title}></Sidebar>

<div class="max-w-content w-full">
    <Header title={title}></Header>
    <span>i haven't added anything here yet :(</span>
</div>