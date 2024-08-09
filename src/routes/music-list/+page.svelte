<script>
    import Header from '../../components/header.svelte';
    import Sidebar from '../../components/sidebar.svelte';

    let color = "";
    const title = 'music-list';
</script>

<svelte:head>
    <title>[ home@akross:/{title} ]</title>
    <script src="https://webglfundamentals.org/webgl/resources/webgl-utils.js"></script>
    <script src="../src/lib/index.js" type="module" />
</svelte:head>

<Sidebar title={title}></Sidebar>
<div class="max-w-[675px]">
    <Header title={title}></Header>
    <img src="http://textfiles.com/underconstruction/HeHeartlandValley1469underconstruction2.gif" alt="">
</div>