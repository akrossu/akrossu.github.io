<script>
  import ContactCard from "../../components/contactCard.svelte";
  import ProjectCard from "../../components/projectCard.svelte";

</script>
<svelte:head>
    <title>Projects - Zach Merritt</title>    
</svelte:head>
<main>
    <div class="mx-auto max-w-7xl lg:px-8">
        <div class="relative px-4 sm:px-8 lg:px-12">
            <div class="mx-auto max-w-2xl lg:max-w-5xl">
                <h1 class="font-mono max-w-xl sm:text-5xl text-3xl font-semibold leading-[3.5rem]">
                    Projects
                </h1>
                <p class="max-w-2xl pt-6 leading-8 tracking-wider">
                    Over the years, I've tinkered with tons of little projects, but these are the ones I take the most pride in.
                    If any of them pique your interest, they're all open source, so don't be afraid to teach me something new!
                </p>
                <!-- Project Cards -->
                <div class="lg:grid lg:grid-cols-2 mt-6 lg:p-4">
                    <ProjectCard
                        picture="/img/Kumiko.png"
                        title="Kumiko"
                        description="An anime discord bot built for practical learning of Javascript."
                        repolink="https://kumiko.vercel.app/"
                        website="kumiko.app"
                        technologies="javascript node.js"
                    />
                    <ProjectCard
                        picture ="/img/Taki.png"
                        title="Taki"
                        description="Taki is a simple MAL API wrapper made for Kumiko."
                        repolink="https://github.com/AKR0SS/Taki-MAL-API-Wrapper"
                        website="github.com"
                        technologies="javascript node.js"
                    />
                    <ProjectCard
                        picture="/img/Website.png"
                        title="Personal Website"
                        description="Where you are now! I've spend many hours aslave to learning front-end just for this."
                        repolink="https://github.com/AKR0SS/akr0ss.github.io"
                        website="github.com"
                        technologies="svelte tailwind"
                    />
                    <ProjectCard
                        picture="/img/minecraft.png"
                        title="Fabric HUD Mod"
                        description="Allows for advanced displaying of various counters and statistics."
                        repolink="https://github.com/AKR0SS/fabric_dawn-hud"
                        website="github.com"
                        technologies="java gradle"
                    />
                </div>
            </div>
        </div>
    </div>
</main>