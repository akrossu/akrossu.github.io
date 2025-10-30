<script>
    import Header from '$components/header.svelte';
    import Sidebar from '$components/sidebar.svelte';

    const title = 'game-list';
</script>

<svelte:head>
    <title>[ home@akross:/{title} ]</title>
</svelte:head>

<Sidebar title={title}></Sidebar>
<div class="max-w-content w-full">
    <Header title={title}></Header>
    <!-- Content -->
    <p>&gt Here's a list of all of my currently playing, completed, and plan to plays</p>
    
    <h2 class="mt-4">what i'm playing</h2>
    <div class="ps-4">
        <p>&gt current: ?</p>
        <p>&gt secondary: Minecraft always and forever &gt;:3</p>
    </div>

    <h2 class="mt-4">Plan to play games</h2>
    <h3>// Short and cute games ( &lt 10 hours )</h3>
    <ul class="ps-4">
        <li>&gt firewatch</li>
        <li>&gt road 96</li>
        <li>&gt a short hike</li>
        <li>&gt Before Your Eyes</li>
    </ul>
    <h3>// medium length games ( 10 - 40 hours )</h3>
    <ul class="ps-4">
        <li>&gt half-life alyx</li>
        <li>&gt Silent Hill 2 remake</li>
    </ul>
    <h3>// longggg games ( &gt 40 hours )</h3>
    <ul class="ps-4">
        <li>&gt cyberpunk</li>
        <li>&gt red dead redemption 2</li>
        <li>&gt persona series pfffffft</li>
    </ul>

    <div>
        <h2 class="mt-4 inline-flex">completed games</h2>
        <h3 class="inline-flex">(perchance some reviews)</h3>
    </div>
    <p class="pb-2">I'll probably move this once there's more reviews to the community page</p>
    <h3 class="inline">Hazy Mind </h3><span>( 8/10 ) 05-10-2024</span>
    <p class="ps-4 pb-2">&gt an indie phsycological horror game that was honestly really hard to get through since it is based on the authors struggle with their diagnosis and mental health issues. With the multiple endings and feeling of genuine care and story telling it kept me at the edge of my seat and i loved it.</p>
    <h3 class="inline">Neon White </h3><span>( 9/10 ) 11-09-2024</span>
    <p class="ps-4 pb-2">&gt dude. this game is seriously so good. literally the speedrunner-esc playstyle is addictive and then the <span class="normal-case">STORY</span> oml it's so devistating and so sad but so good and it's easily my favorite game i've played as of recent- end of run on sentence.</p>
    <h3 class="inline">Silent Hill f </h3><span>( 8/10 ) 10-20-2025</span>
    <p class="ps-4 pb-2">&gt besides it being a ue5 game, genuinely one of the most fun horror games i've played in a long time. Some sections were repetative, but the overall story was so good. when i thought i had the symbolisms figured out, it threw something new in every time. And with all the differing endings, just mwah chef's kiss.</p>
    <h3 class="inline">FUNKYHEART </h3><span>( 7/10 ) 10-29-2025</span>
    <p class="ps-4 pb-2">&gt What an absolute trip of a 3d platformer. some parts felt like they went on for too long, but the emotional parts of the story and tense parts of the gameplay made it really enjoyable. plus the dialog was actually so good and the adorable sprites were just so jdskfhgkdhsg</p>
</div>