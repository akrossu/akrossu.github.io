<script lang="ts">
    import StaticBars from '../../components/staticBars.svelte'

    function discordLinks() {
        const link1 = 'https://cdn.discordapp.com/attachments/678347708238659624/1216206376934834337/DistantHorizons-fabric-2.0.2-a-dev-1.20.1.jar?ex=65ff8b74&is=65ed1674&hm=c3563b8b6877dd64428279c092b9af88e9b603a18a6879c594d4eedd357efed6&';
        const link2 = 'https://cdn.discordapp.com/attachments/678347708238659624/1216206377257664542/iris-mc1.20.1-1.7-alpha.1-185a9812.jar?ex=65ff8b74&is=65ed1674&hm=18b1130c45d9561864ee2b3bf548ed63f3566567df8d2c1a2430dd7a56ea04f8&';

        window.open(link1, '_blank');
        window.open(link2, '_blank');
    }
</script>

<svelte:head>
    <title>[ Home@Akross:/ ]</title>
</svelte:head>

<main class="select-none">
    <StaticBars color1="bg-orange" color2="bg-red" color3="bg-magenta"></StaticBars>
    <div class="mt-6">
        <a href="/" class="relative ml-32 font-DinkieBitmap hover:text-yellow">&lt; Return home</a>
        <h1 class="text-5xl text-center pt-6 font-Zpix">Minecraft Modpacks</h1>
    </div>
    <p class="my-16 w-[80%] mx-auto"></p>
    <div class="mx-56">
        <!-- <h2 class="font-DinkieBitmap text-3xl">Dark RPG</h2> -->
        <div class="flex flex-row gap-6">
            <img src="/src/lib/assets/darkrpg.png" alt="" class="w-52 h-52">
            <div class="basis-3/4">
                <h3 class="text-2xl font-DinkieBitmap">Steps</h3>
                <ol class="font-Zpix">
                    <li>- Install the <a href="https://download.overwolf.com/install/Download?ExtensionId=cfiahnpaolfnlgaihhmobmnjdafknjnjdpdabpcm" target="_blank" class="text-yellow hover:text-yellow-orange">CurseForge App</a> and the <a href="https://www.curseforge.com/minecraft/modpacks/darkrpg" target="_blank" class="text-yellow hover:text-yellow-orange">Dark RPG modpack</a>.</li>
                    <li>- Make sure to allocate &gt;8 gigabytes at LEAST.</li>
                </ol>
                <h3 class="text-2xl font-DinkieBitmap pt-4">(Optional)</h3>
                <ol class="font-Zpix">
                    <li>Distant Horizons is a mod that allows you to substantially increase your render distance and is highly recommended to use with shaders.</li>
                    <li>- Download <button on:click={discordLinks} class="text-yellow hover:text-yellow-orange">these two mods</button> and place them within your mods folder.</li>
                    <li>- You will need <a href="https://github.com/X0nk/Bliss-Shader/archive/refs/heads/main.zip" class="text-yellow hover:text-yellow-orange">these specific shaders</a> in order for them to work with Distant Horizons.</li>
                </ol>
            </div>
            <div class="basis-1/4">
                <h3 class="text-2xl font-DinkieBitmap">Server Details</h3>
                <ul class="font-Zpix">
                    <li>IP: <span class="select-text">jsp.cloudnord.net</span></li>
                    <li>Max Players: 10</li>
                </ul>
            </div>
        </div>
    </div>
</main>



