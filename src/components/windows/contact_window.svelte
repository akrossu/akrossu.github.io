<script lang="ts">
    import Draggable from "./__draggable.svelte";

    export let showContact:boolean;
    
    let dialog:any;
    let height:number;
    let width:number;

    $: if (dialog && showContact) dialog.setAttribute("open", "true");
</script>

<style>
    a {
        font-family: 'DinkieBitmap';
        font-size: 32px;
        pointer-events: all;
    }
    span {
        padding-inline-start: 1rem;
        opacity: 80%;
    }
</style>

<Draggable height={height} width={width}>
<dialog class="bg-purple text-white pointer-events-none" bind:this={dialog} bind:clientHeight={height} bind:clientWidth={width} on:close={() => (showContact = !showContact)}>
	<div class="w-[700px] pb-6 border-cyan border-[5px]">
        <!-- Window Header -->
        <div class="h-10 ps-5 grid grid-cols-2 font-DinkieBitmap pointer-events-auto">
            <h1 class="pt-1 flex items-center text-2xl">contact</h1>
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
        <div class="mx-6 mt-4 font-Zpix flex-row space-y-4">
            <div class="group inline-flex items-center">
                <span class="group-hover:text-light-cyan text-dark-blue font-DinkieBitmap">>&nbsp&nbsp</span>
                <a href="mailto:ZacharyT.Merritt@gmail.com" aria-label="Email">Email</a>
                <span>Have official business to discuss? My Email is always open.</span>
            </div>
            <div class="group inline-flex items-center">
                <span class="group-hover:text-light-cyan text-dark-blue font-DinkieBitmap">>&nbsp&nbsp</span>
                <a href="https://github.com/akr0ss" aria-label="GitHub" target="_blank">Github</a>
                <span>Check out some of my other projects not listed on here!</span>
            </div>
            <div class="group inline-flex items-center">
                <span class="group-hover:text-light-cyan text-dark-blue font-DinkieBitmap">>&nbsp&nbsp</span>
                <a href="https://discordapp.com/users/282593436803268618" aria-label="Discord" target="_blank">Discord</a>
                <span>If you need to reach me quickly, this is where I'm most active.</span>
            </div>
            <div class="group inline-flex items-center">
                <span class="group-hover:text-light-cyan text-dark-blue font-DinkieBitmap">>&nbsp&nbsp</span>
                <a href="https://www.linkedin.com/in/zacharytmerritt/" aria-label="LinkedIn" target="_blank">LinkedIn</a>
                <span>Want to connect and network further?</span>
            </div>
        </div>
	</div>
</dialog>
</Draggable>