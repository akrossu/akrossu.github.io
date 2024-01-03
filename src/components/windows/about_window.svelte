<script lang="ts">
    import Draggable from "./__draggable.svelte";

    export let showAbout:boolean;
    
    let dialog:any;

    $: if (dialog && showAbout) dialog.setAttribute("open", "true");
</script>

<style>
    h2 {
        font-family: 'DinkieBitmap';
        font-size: 32px;
    }
    span {
        padding-inline-start: 1rem;
        opacity: 80%;
    }
</style>

<Draggable>
<dialog class="bg-purple text-white pointer-events-none" bind:this={dialog} on:close={() => (showAbout = !showAbout)}>
	<div class="w-[700px] pb-6 border-cyan border-[5px]">
        <!-- Window Header -->
        <div class="h-10 ps-5 grid grid-cols-2 font-DinkieBitmap pointer-events-auto">
            <h1 class="pt-1 flex items-center text-2xl">about</h1>
            <div class="flex justify-end [&>*]:px-4">
                <button class="hover:bg-dark-cyan" on:click={() => dialog.close()}>
                    <svg width="14" height="3"><rect width="14" height="3" style="stroke-width:5;stroke:#ffffff" /></svg>
                </button>
                <button class="hover:bg-dark-cyan"> <!-- Will Maximize to open a Page /KumikoApp -->
                    <svg width="14" height="14"><rect width="14" height="14" style="stroke-width:5;stroke:#ffffff;fill:#00000000" /></svg>
                </button>
                <button class="hover:bg-red transition-all duration-75" on:click={() => dialog.close()}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="14" height="14" viewBox="0 0 512 512"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none"><path d="M368 4938 l-3 -183 -182 -3 -183 -2 0 -240 0 -240 183 -2 182 -3 3 -182 2 -183 180 0 180 0 0 -180 0 -180 183 -2 182 -3 3 -182 2 -183 180 0 180 0 2 -182 3 -183 183 -3 182 -2 0 -240 0 -240 -182 -2 -183 -3 -3 -182 -2 -183 -180 0 -180 0 -2 -182 -3 -183 -182 -3 -183 -2 0 -180 0 -180 -180 0 -180 0 -2 -183 -3 -182 -183 -3 -182 -2 0 -240 0 -240 183 -2 182 -3 3 -183 2 -182 240 0 240 0 2 183 3 182 183 3 182 2 0 180 0 180 180 0 180 0 2 183 3 182 183 3 182 2 0 180 0 180 183 2 182 3 3 183 2 182 240 0 240 0 2 -182 3 -183 183 -3 182 -2 0 -180 0 -180 183 -2 182 -3 3 -182 2 -183 180 0 180 0 0 -180 0 -180 183 -2 182 -3 3 -182 2 -183 240 0 240 0 2 183 3 182 183 3 182 2 0 240 0 240 -182 2 -183 3 -3 183 -2 182 -180 0 -180 0 0 180 0 180 -182 2 -183 3 -3 183 -2 182 -180 0 -180 0 -2 183 -3 182 -182 3 -183 2 0 240 0 240 183 2 182 3 3 183 2 182 180 0 180 0 2 183 3 182 183 3 182 2 0 180 0 180 180 0 180 0 2 183 3 182 183 3 182 2 0 240 0 240 -182 2 -183 3 -3 183 -2 182 -240 0 -240 0 -2 -182 -3 -183 -182 -3 -183 -2 0 -180 0 -180 -180 0 -180 0 -2 -182 -3 -183 -182 -3 -183 -2 0 -180 0 -180 -182 -2 -183 -3 -3 -182 -2 -183 -240 0 -240 0 -2 183 -3 182 -182 3 -183 2 0 180 0 180 -182 2 -183 3 -3 183 -2 182 -180 0 -180 0 0 180 0 180 -182 2 -183 3 -3 183 -2 182 -240 0 -240 0 -2 -182z"/></g></svg>
                </button>
            </div>
        </div>
        <hr class="w-full block border-[3px] border-cyan" />
        <div class="mx-6 mt-4 font-Zpix ">
            <p>
                My programming journey started in 2016 while I was still in high school. I'd taken a class teaching Visual Basic, and while it was a pain, I excelled at the topics and found myself often helping my programming teachers in providing help to other students.
            </p>
            <p class="pt-4">
                Soon I found myself creating Minecraft mods from my experience with Java in my Senior year of classes. That's when I knew what I wanted to strive for when looking at higher-level education. I am currently a Computer Science student and look for every opportunity while still in school to develop my professional experience and collaborate with others. 
            </p>
        </div>
	</div>
</dialog>
</Draggable>