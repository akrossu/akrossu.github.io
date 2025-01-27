<script>
    import Header from '$components/header.svelte';
    import Sidebar from '$components/sidebar.svelte';
    import Shield from '$components/shield.svelte';

    const title = 'about';
</script>

<svelte:head>
    <title>[ home@akross:/{title} ]</title>
</svelte:head>

<Sidebar title={title}></Sidebar>
<div class="max-w-content w-full">
    <Header title={title}></Header>
    <!-- Content -->
    <p class="mt-4 mb-2">&gt About the name.. it's confusing! I webmaster's name is Zach, but i often go by akross online- wait, but this website is also titled project akross. So which is which? It's a culmination of both a first- and third-person collective somehow!</p>
    <span>&gt if you're interested in the reasoning, visit </span><a href="/lore">[ akross:/lore ]</a>!
    <p></p>
    
    <p class="mt-8">&gt since 2015 these are some of the skills I've built up being a solo developer</p>
    <div class="w-3/4 ms-6">
        <h3>// languages:</h3>
        <div class="grid grid-cols-4 mb-8">
            <div><Shield title="java"></Shield></div>
            <div><Shield title="html" logo="html5"></Shield></div>
            <div><Shield title="css" logo="css3" color="1572B6"></Shield></div>
            <div><Shield title="javascript" logo="javascript"></Shield></div>
            <div><Shield title="c++" logo="cplusplus"></Shield></div>
        </div>
        <h3>// frameworks:</h3>
        <div class="grid grid-cols-4 mb-8">
            <div><Shield title="spring" logo="spring"></Shield></div>
            <div><Shield title="node.js" logo="node.js"></Shield></div>
            <div><Shield title="svelte" logo="svelte"></Shield></div>
            <div><Shield title="tailwind css" logo="tailwindcss"></Shield></div>
            <div><Shield title="bootstrap" logo="bootstrap"></Shield></div>
            <div><Shield title="sass" logo="sass"></Shield></div>
            <div><Shield title="electron" logo="electron"></Shield></div>
        </div>
        <h3>// databases:</h3>
        <div class="grid grid-cols-4 mb-8">
            <div><Shield title="postgresql" logo="postgresql"></Shield></div>
            <div><Shield title="mongodb" logo="mongodb"></Shield></div>
        </div>
        <h3>// build tools:</h3>
        <div class="grid grid-cols-4 mb-8">
            <div><Shield title="gradle" logo="gradle" color="02303A"></Shield></div>
            <div><Shield title="maven" logo="apachemaven" color="C71A36"></Shield></div>
            <div><Shield title="jenkins" logo="jenkins"></Shield></div>
        </div>
    </div>

    <p>&gt some of the projects i've used these technologies in can be found in <a href="/code">[ akross@:/code ]</a>.</p>
    
    <h2 class="mt-4">Experience:</h2>
    <h3>// Criterion Systems - summer 2022 back-end developer internship</h3>
    <p>&gt Worked with the USDA Forest Department to provide accurate forecast observations.</p>
    <div class="ps-4">
        <h3>// responsibilities:</h3>
        <p>&gt Processing and programmatic management of data through AWS buckets.</p>
        <p>&gt Refactored SQL queries performed with Hibernate to connect with PostgreSQL.</p>
        <p>&gt Provided extensive Unit Tests along with Mock and end-to-end testing.</p>
        <h3>// Technologies:</h3>
        <div class="inline-flex">
            <Shield title="java"></Shield>
            <div class="mx-4"></div>
            <Shield title="postgresql" logo="postgresql"></Shield>
            <div class="mx-4"></div>
            <Shield title="junit" logo="junit5"></Shield>
            <div class="mx-4"></div>
            <Shield title="hibernate" logo="hibernate" color="59666C"></Shield>
        </div>
    </div>

    <h2 class="mt-6">projects:</h2>
    <h3>// Criterion Systems - Group Collaboration Project</h3>
    <p>&gt Criterion Interns Group Collaboration</p>
    <div class="ps-4">
        <h3>// responsibilities:</h3>
        <p>&gt develop a conceptual, contract data-backup service that would be provided to Government agencies.</p>
        <p>&gt Responsible for presenting to a board of senior representatives with real-world standards and
            expectations.</p>
    </div>

    <h2 class="mt-6">education:</h2>
    <h3 class="mt-4">// Bachelor of Computer Science, George Mason University <i>( 2024 - current )</i></h3>
    <h3 class="mt-4">// Associate of Computer Science, Northern Virginia Community College <i>( 2019 - 2023 )</i></h3>
    <div class="ps-4">
        <h3>// responsibilities:</h3>
        <p>&gt Primary focus on software development and operations in Java.</p>
        <p>&gt Assisted in the analysis of Discrete Structures.</p>
    </div>
    <h3 class="mt-4">// Gar-Field senior high school <i>( Graduated 2019 )</i></h3>
    <div class="ps-4">
        <h3>// responsibilities:</h3>
        <p>&gt Presidential Award for Academic Achievement.</p>
        <p>&gt Gar-Field Outstanding Academic Award.</p>
        <p>&gt Gar-Field Excellency Award in Computer Programming.</p>
    </div>
    <div class="mb-12"></div>
</div>

