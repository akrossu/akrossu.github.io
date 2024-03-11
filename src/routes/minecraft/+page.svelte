<script lang="ts">
    import StaticBars from '../../components/staticBars.svelte'

    import img from '$lib/assets/medieval.png';

    function discordLinks() {
        const link1 = 'https://cdn.discordapp.com/attachments/678347708238659624/1216206376934834337/DistantHorizons-fabric-2.0.2-a-dev-1.20.1.jar?ex=65ff8b74&is=65ed1674&hm=c3563b8b6877dd64428279c092b9af88e9b603a18a6879c594d4eedd357efed6&';
        const link2 = 'https://cdn.discordapp.com/attachments/678347708238659624/1216206377257664542/iris-mc1.20.1-1.7-alpha.1-185a9812.jar?ex=65ff8b74&is=65ed1674&hm=18b1130c45d9561864ee2b3bf548ed63f3566567df8d2c1a2430dd7a56ea04f8&';

        window.open(link1, '_blank');
        window.open(link2, '_blank');
    }
</script>

<svelte:head>
    <title>[ Home@Akross:/Minecraft ]</title>
</svelte:head>

<main class="mb-[90px]">
    <div class="hidden md:block">
        <StaticBars color1="bg-orange" color2="bg-red" color3="bg-magenta"></StaticBars>
    </div>
    <div class="mt-6">
        <a href="/" class="relative ml-32 font-DinkieBitmap text-2xl hover:text-yellow">&lt; Return home</a>
        <h1 class="text-5xl text-center pt-6 font-Zpix">Minecraft Modpacks</h1>
    </div>
    <p class="my-16 mx-auto"></p>
    <div class="mx-6 md:mx-24 lg:mx-[15%]">
        <div class="block lg:flex lg:flex-row gap-6">
            <img src={img} alt="" class="w-52 h-52 rounded-xl hidden lg:block">
            <div class="basis-3/4">
                <h3 class="text-2xl font-DinkieBitmap">Medieval Modpack installatoin steps:</h3>
                <ol class="font-Zpix">
                    <li>- Install the <a href="https://download.overwolf.com/install/Download?ExtensionId=cfiahnpaolfnlgaihhmobmnjdafknjnjdpdabpcm" target="_blank" class="text-yellow hover:text-yellow-orange">CurseForge App</a> and the <a href="https://www.curseforge.com/minecraft/modpacks/medieval-mc-fabric-mmc2" target="_blank" class="text-yellow hover:text-yellow-orange">Medieval Modpack</a>.</li>
                    <li>- Make sure to allocate 8 - 10 gigabytes of RAM.</li>
                    <li>- Delete and replace your mods folder with the <a href="https://drive.google.com/drive/folders/13oMCzweGkASWCXZzN_z40Fol3UIWnU0V" target="_blank" class="text-yellow hover:text-yellow-orange">updated mod list</a>.</li>
                </ol>
                <h4 class="text-xl font-DinkieBitmap pt-4">(Optional)</h4>
                <ol class="font-Zpix">
                    <li>- You can <a href="https://cdn.discordapp.com/attachments/324008937705963521/1216605052182069330/config.zip?ex=6600febf&is=65ee89bf&hm=71c671b00d3a8b55dfbdd8b0638625b3129aaec0c1321efd0dffb2f39bbd9c42&" class="text-yellow hover:text-yellow-orange">download</a> my preset binds, shaders, and settings for an even easier experience.</li>
                    <!-- Distant Horizons -->
                    <li class="pt-2">Distant Horizons is a mod that allows you to substantially increase your render distance and is highly recommended to use with shaders.</li>
                    <li>- Download <button on:click={discordLinks} class="text-yellow hover:text-yellow-orange">these two mods</button> and place them within your mods folder.</li>
                    <li>- You will need <a href="https://github.com/X0nk/Bliss-Shader/archive/refs/heads/main.zip" class="text-yellow hover:text-yellow-orange">these specific shaders</a> in order for them to work with Distant Horizons.</li>
                    <li>- Additionally, you can <a href="https://drive.google.com/file/d/1zopsMRsHw3la3BN1zaN4xUBV-9l0sVNV/view?usp=drive_link" class="text-yellow hover:text-yellow-orange">download</a> a large pregenerated area so the experience is seamless.</li>
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



