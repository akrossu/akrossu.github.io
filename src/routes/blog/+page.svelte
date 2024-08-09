<script>
    import { onMount } from 'svelte';
    import SvelteMarkdown from 'svelte-markdown';
    import Header from '$components/header.svelte';
    import Sidebar from '$components/sidebar.svelte';

    const title = "blog"

    const blogTitles = [
        'first-post',
        // 'gpt-3-generated-poetry',
    ];

    let blogPosts = [];
    let post = "";

    onMount(async () => {
        for(let i = 0; i < blogTitles.length; i++) {
            fetch(`https://raw.githubusercontent.com/akrossu/akrossu.github.io/projectA/static/blog-posts/${blogTitles[i]}.md`)
            .then(response => response.text())
            .then(data => {
                blogPosts[i] = data.toString();
            })
        }
    })
</script>

<svelte:head>
    <title>[ home@akross:/{title} ]</title>
</svelte:head>

<Sidebar title={title}></Sidebar>
<div>
    <Header title={title}></Header>
    <div class="max-w-[675px]">
        {#each blogPosts as post}
            <SvelteMarkdown source={post}/>
            <div class="mb-24"></div>
        {/each}
    </div>
    <!-- <img src="http://textfiles.com/underconstruction/HeHeartlandValley1469underconstruction2.gif" alt=""> -->
</div>