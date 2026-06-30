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
    <p>&gt a small list of what i shoot with daily</p>
    <br>
    <h2>camera:</h2>
    <p>&gt Fujifilm xs-20</p>
    <p><a href="https://shopusa.fujifilm-x.com/x-s20-x-s20/">[ external:/fujifilm ]</a></p>
    <br>
    <h2>lenses:</h2>
    <p>&gt Fujifilm xf 16-50mm f2.8-4.8 r lm wr variable zoom lens</p>
    <a href="https://www.fujifilm-x.com/en-us/products/lenses/xf16-50mmf28-48-r-lm-wr/">[ external:/fujifilm ]</a>
    <p>&gt ttartisan 23mm f1.4 prime lens</p>
    <a href="https://ttartisan.com/?aps-c-lenses/76.html">[ external:/ttartisan ]</a>
</div>