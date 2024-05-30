<script lang="ts">
    import StaticBars from '../components/staticBars.svelte';
    import Navbar from '../components/navbar.svelte';
    import Typer from '../components/typer.svelte';

    let cpToggle:any;
</script>

<svelte:head>
    <title>[ Home@Akross:/ ]</title>
</svelte:head>

<!-- must remain in specific element order -->
<main>
    <!-- Static site bars -->
    {#if cpToggle}<StaticBars color1="bg-orange" color2="bg-red" color3="bg-magenta"></StaticBars>{/if}
    <div class="hidden md:block">
        <Typer></Typer>
    </div>
    <!-- mobile vh is within error of screen height for bottom bars -->
    <div id="content" class="min-h-[95vh]">
        <Navbar></Navbar>
        <div class="font-Zpix mx-6 md:mx-24 lg:mx-[15%] h-[50vh] md:h-[90vh] flex flex-col items-center justify-center">
            <h1 class="text-3xl md:text-5xl text-center">I'm a Full-Stack Developer, Artist, and Student.</h1>
            <h2 class="text-md md:text-xl max-w-4xl text-center ms-auto me-auto h-auto mt-12 md:mt-28">
                A Software Engineering student based in Northern Virginia with an interest in building unique and innovative applications.
            </h2>
        </div>
    </div>
    <div class="font-DinkieBitmap text-white text-opacity-40" bind:this={cpToggle}>
        {#if !cpToggle}
        <StaticBars color1="bg-light-cyan" color2="bg-cyan" color3="bg-dark-cyan"></StaticBars>
        <div class="absolute bottom-[2px] right-8">:3</div>
        {/if}
        <button class="w-full md:w-auto md:absolute bottom-12 md:bottom-[2px] md:right-14" on:click={() => (cpToggle = !cpToggle)}>© 2024 Akross</button>
    </div>
</main>