<script>
    import Header from '../../components/header.svelte';
    import Sidebar from '../../components/sidebar.svelte';

    const title = "creative";
</script>

<svelte:head>
    <title>[ home@akross:/{title} ]</title>
    <script src="https://webglfundamentals.org/webgl/resources/webgl-utils.js"></script>
    <script src="../src/lib/index.js" type="module" />
</svelte:head>

<Sidebar title={title}></Sidebar>
<div>
    <Header title={title}></Header>
    <img src="http://textfiles.com/underconstruction/HeHeartlandValley1469underconstruction2.gif" alt="">
</div>