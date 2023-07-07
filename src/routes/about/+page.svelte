<script>
    import Links from "../../components/links.svelte";

    const imageStyle = ''
</script>

<svelte:head>
    <title>About - Zach Merritt</title>    
</svelte:head>
<main class="about">
    <div class="about mx-auto max-w-7xl lg:px-8">
        <div class="relative px-4 sm:px-8 lg:px-12">
            <div class="mx-auto max-w-2xl lg:max-w-5xl">
                <div class="pt-6 text-neutral-300 leading-8 tracking-wider">
                    <h1 class="font-mono max-w-xl text-5xl font-semibold leading-[3.5rem]">
                        I'm Zach Merritt.
                    </h1>
                    <div class="lg:grid lg:grid-cols-2">
                        <div>
                            <br />
                            <p>
                                My programming journey started in 2016 while I was still in high school. I'd taken
                                a class teaching Visual Basic, and while it was a pain, I excelled at the topics and
                                found myself often helping my programming teachers in providing help to other students.
                            </p><br />
                            <p>
                                Soon I found myself creating Minecraft mods from my experience with Java in my Senior year of
                                classes. That's when I knew what I wanted to strive for when looking at higher-level education.
                                I am currently a Computer Science student and look for every opportunity while still in school
                                to develop my professional experience and collaborate with others.
                            </p><br />
                        </div>
                        <div class="place-self-center justify-self-center">
                            <img class="hidden lg:inline-block w-64 object-none object-center border border-zinc-700 rounded-lg" src="/img/pfp.jpg" alt="Code">
                            <div class="mt-8">
                                <ul role="list">
                                    <hr class="block lg:hidden mt-4 mb-8 bg-neutral-700 border-0 h-px">
                                    <li class="">
                                        <Links website="github" text="Follow on GitHub" style="h-8 w-8" />
                                    </li>
                                    <li class="mt-4 flex">
                                        <Links website="linkedin" text="Follow on LinkedIn" style="h-8 w-8" />
                                    </li>
                                    <li class="mt-4 flex">
                                        <Links website="discord" text="Add on Discord" style="h-8 w-8" />
                                    </li>
                                    <hr class="hidden lg:block my-4 bg-neutral-700 border-0 h-px">
                                    <li class="flex">
                                        <a class="group flex mt-4 lg:mt-0" href="mailto:ZacharyT.Merritt@gmail.com">
                                            <svg viewBox="0 0 24 24" aria-hidden="true" class="h-8 w-8 dark:fill-zinc-400 group-hover:fill-[#2d9248]">
                                                <path fill-rule="evenodd" d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"></path></svg>
                                            <span class="ml-4">ZacharyT.Merritt@gmail.com</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>