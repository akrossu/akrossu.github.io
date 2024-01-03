<script lang="ts">
    const phrases:string[] = [
        "This website was made in a total of 3 days in it's entirety",
        "Add me on discord to play games!",
        "I'm secretly working on graphics programming shh :3",
        "Click on the copyright symbol in the bottom right for a surprise~"
    ]

    let typer:any;
    
    const sleepTime:number = 50;
    let index:number = 0;
    let word:string = "";

    const writeLoop = async () => {
        await sleep(sleepTime * 20);

        while (true) {
            word = phrases[index];

            // Types Characters
            for (let i:number = 0; i < word.length; i++) {
                typer = word.substring(0, i + 1);
                await sleep(sleepTime);
            }

            await sleep(sleepTime * 80);

            // Deletes Characters
            for (let i:number = word.length; i > 0; i--) {
                typer = word.substring(0, i - 1);
                await sleep(sleepTime  / 1.5);
            }

            await sleep(sleepTime * 25);

            if (index === phrases.length - 1) index = 0;
            else index++;
        }
    }

    function sleep(ms:number) { return new Promise((resolve) => setTimeout(resolve, ms)); }

    writeLoop();
</script>

<div class="absolute bottom-24 left-2 font-DinkieBitmap select-none">
    <span class="text-cyan select-none" contenteditable="true" bind:innerText={typer}></span><span>_</span>
</div>