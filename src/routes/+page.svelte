<script>
    import Card from '../components/card.svelte';
    import Links from '../components/links.svelte';
</script>

<main>
    <div class="mx-auto max-w-7xl lg:px-8">
        <div class="relative px-4 sm:px-8 lg:px-12">
            <div class="mx-auto max-w-2xl lg:max-w-5xl">
                <h1 class="font-mono max-w-xl sm:text-5xl text-3xl font-semibold leading-[3.5rem]">
                    I'm a Full-Stack Developer, Artist, and lover of games
                </h1>
                <p class="max-w-2xl pt-6 text-neutral-300 leading-8 tracking-wider">
                    I'm Zach, a software engineer and student based in Northern Virginia. I have an interest
                    in building unique and Innovative web applications.
                </p>
                <!-- Icons -->
                <div class="mt-6 flex gap-2">
                    <Links website="github" style="h-6 w-6" />
                    <Links website="linkedin" style="h-6 w-6" />
                    <Links website="discord" style="h-6 w-6" />
                </div>
            </div>
        </div>
    </div>
    <!-- Cards -->
    <div class="lg:flex lg:justify-between mt-6 p-4 lg:p-0">
        <Card title="Kumiko" url="https://github.com/AKR0SS/kumiko-discord-bot" bg_img="bg-[url('/img/Kumiko.png')]" description="Kumiko is my favorite project of recent. This is where I learned a majority of my JavaScript knowledge as well as working with foreign libraries."/>
        <Card title="Taki API Wrapper" url="https://github.com/AKR0SS/Taki-MAL-API-Wrapper" bg_img="bg-[url('/img/Taki.png')]" description="Taki is an API Wrapper made specifically for Kumiko. This was my first interaction with direct API usage and quering." />
        <Card title="Personal Website" url="https://github.com/AKR0SS/akr0ss.github.io" bg_img="bg-[url('/img/Website.png')]" description="Where you are now! This has been my playground for learning design and finding what libraries / frameworks I like the most." />
    </div>
</main>

<!-- bg-_dark-grey h-screen max-w-5xl mx-auto pt-[8rem] px-14 border-x border-neutral-800 -->
