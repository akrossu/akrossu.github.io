<script>
    import Header from '$components/header.svelte';
    import Sidebar from '$components/sidebar.svelte';

    let showCopyNotification = true;
    const title = 'webring';
    const buttonElement = '<a href="https://akrossu.github.io"><img src="https://raw.githubusercontent.com/akrossu/akrossu.github.io/projectA/static/assets/webring/akross.gif" alt="akross stamp"></a>'

    function copy() {
        navigator.clipboard.writeText(buttonElement);
        showCopyNotification = false;
    }
</script>

<svelte:head>
    <title>[ home@akross:/{title} ]</title>
</svelte:head>

<Sidebar title={title}></Sidebar>
<div class="max-w-[675px]">
    <Header title={title}></Header>
    
    <p class="flex items-center">
        <button class="inline-flex" on:click={copy}>
            <img src="/assets/webring/akross.gif" alt="akross stamp" loading="lazy">
        </button>&nbsp;&gt This is my stamp!! o(≧∇≦o)
    </p>

    <h2 class:showCopyNotification>ᨐ copied!</h2>

    <h3 class=" mt-4">// psst click the button to copy the html for the stamp!</h3>
</div>

<style>
    /* Specifically has to be a style and not a tailwind style */
    .showCopyNotification {
        display: none;
    }
</style>