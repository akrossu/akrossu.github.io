<script>
    import Header from '$components/header.svelte';
    import Sidebar from '$components/sidebar.svelte';

    const title = 'external';
</script>

<svelte:head>
    <title>[ home@akross:/{title} ]</title>
</svelte:head>

<Sidebar title={title}></Sidebar>

<div class="max-w-[675px]">
    <Header title={title}></Header>
    <p class="pb-2">&gt here you'll find all of my external profiles and existances!</p>
    <a href="https://github.com/akrossu" target="_blank">[ external:/github.com/akrossu ]</a>
    <p class="mb-2">&gt Where you can find all of my public coding projects</p>
    <h2>businessy:</h2>
    <div class="ps-4 mb-4">
        <ul>
            <li><a href="https://www.linkedin.com/in/zachme/" target="_blank">[ external:/linkedin.com/zachme ]</a></li>
            <li class="mb-2">&gt akross' professional network </li>
            <li><a href="mailto:zacharyt.merritt@gmail.com">[ email:/webmaster ]</a></li>
            <li class="mb-2">&gt akross' business email</li>
        </ul>
    </div>
    <h2>social media:</h2>
    <div class="ps-4">
        <ul>
            <li><a href="https://www.discord.gg/sczXWkDsZ6" target="_blank">[ external:/discord.gg/sczXWkDsZ6 ]</a></li>
            <li class="mb-2">&gt community discord server</li>
            <li><a href="https://www.twitch.tv/akrossu" target="_blank">[ external:/twitch.tv/akrossu ]</a></li>
            <li class="mb-2">&gt akross' live streaming</li>
            <li><a href="https://www.instagram.com/akrossu/" target="_blank">[ external:/instagram.com/akrossu ]</a></li>
            <li>&gt akross' personal social media</li>
        </ul>
    </div>
</div>