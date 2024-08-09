<script>
    import Header from '../../components/header.svelte';
    import Sidebar from '../../components/sidebar.svelte';

    let color = "";
    const title = 'webring';
</script>

<svelte:head>
    <title>[ home@akross:/{title} ]</title>
    <script src="https://webglfundamentals.org/webgl/resources/webgl-utils.js"></script>
    <script src="../src/lib/index.js" type="module" />
</svelte:head>

<Sidebar title={title}></Sidebar>
<div class="max-w-[675px]">
    <Header title={title}></Header>
    <img src="/second-stamp.gif" alt="">
</div>