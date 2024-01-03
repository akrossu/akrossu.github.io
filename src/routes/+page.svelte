<script lang="ts">
    import StaticBars from '../components/staticBars.svelte';
    import Navbar from '../components/navbar.svelte';
    import Typer from '../components/typer.svelte';

    let cpToggle:any;
</script>

<svelte:head>
    <title>[ Home@Akross:/ ]</title>
</svelte:head>

<main class="select-none">
    {#if cpToggle}<StaticBars color1="bg-orange" color2="bg-red" color3="bg-magenta"></StaticBars>{/if}
    <Navbar></Navbar>
    <div class="font-Zpix mt-60">
        <h1 class="text-5xl text-center">I'm a Full-Stack Developer, Artist, and Student.</h1>
        <h2 class="text-xl max-w-4xl text-center ms-auto me-auto h-auto mt-28">
            A Software Engineering student based in Northern Virginia with an interest in building unique and innovative applications.
        </h2>
    </div>
    <Typer></Typer>
    <div class="font-DinkieBitmap text-white text-opacity-40" bind:this={cpToggle}>
        {#if !cpToggle}
        <StaticBars color1="bg-light-cyan" color2="bg-cyan" color3="bg-dark-cyan"></StaticBars>
        <div class="absolute bottom-[2px] right-5">:3</div>
        {/if}
        <button class="absolute bottom-[2px] right-10 " on:click={() => (cpToggle = !cpToggle)}>© 2024 Akross</button>
    </div>
</main>



