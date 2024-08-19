<script>
    import { onMount } from 'svelte';
    import SvelteMarkdown from 'svelte-markdown';
    import Header from '$components/header.svelte';
    import Sidebar from '$components/sidebar.svelte';

    const title = "blog"

    let fileNames = [];

    let blogTitles = [];
    let blogDates = [];
    let blogModifiedDates = [];

    let blogContent = [];

    onMount(async () => {
        // Fetch file names
        await fetch(`https://raw.githubusercontent.com/akrossu/akrossu.github.io/projectA/static/blog.json`)
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                fileNames.push(element.fileName);
                blogTitles.push(element.title);
                blogDates.push(element.date);
                blogModifiedDates.push(element.modifiedDate);
                console.log(element.title + ": " + element.modifiedDate);
            });
        });
        
        // For each file name, 
        for(let i = 0; i < fileNames.length; i++) {
            fetch(`https://raw.githubusercontent.com/akrossu/akrossu.github.io/projectA/static/blog-posts/${fileNames[i]}.md`)
            .then(response => response.text())
            .then(data => {
                blogContent[i] = data.toString();
            });
        }
    });
</script>

<svelte:head>
    <title>[ home@akross:/{title} ]</title>
</svelte:head>

<Sidebar title={title}></Sidebar>
<div class="max-w-content w-full">
    <Header title={title}></Header>
    <!-- Content -->
    {#each blogContent as post, index}
        <details open={index == 0}>
            <summary class="mb-2">
                <h2 class="inline-block ps-2 align-sub">title: "{blogTitles[index]}"</h2>
                <h2 class="ms-6 align-sub">date: "{blogDates[index]}"</h2>
            </summary>
            <SvelteMarkdown source={post}/>
            {#if blogModifiedDates[index] != ""}
                <p class="mt-4">updated: {blogModifiedDates[index]}</p>
            {/if}
            <div class="mb-16"></div>
        </details>
    {/each}
</div>