<script>
    import Header from '$components/header.svelte';
    import Sidebar from '$components/sidebar.svelte';

    const title = 'lore';
</script>

<svelte:head>
    <title>[ home@akross:/{title} ]</title>
</svelte:head>

<Sidebar title={title}></Sidebar>
<div class="max-w-content w-full">
    <Header title={title}></Header>
    <!-- Content -->
    <h2 class="mt-4">how the story goes:</h2>
    <p class="mt-2">&gt Prior to the publicization of radio frequencies in 1972 for extraterrestrial communication, a radio frequency was broadcast from a location unreachable by mankind. First read by a highly secret American association in 1960 under the title Project Akross, meant to communicate with the extraterrestrial.</p>
    <p class="mt-2">&gt This webpage you see before you was that first message, decoded after 64 years from its original broadcast and reading.</p>

    <h3 class="mt-4">// here is some of that original message:</h3>
    <img src="/assets/lore/transCode.png" alt="encrypted text">
    
    <p class="mt-8">&gt Just over 14 years ago now, it took 50 years to make sense of this jumble of letters and symbols. Today however, through the efforts of mr ██████ ██ ██████ and senior ██████ ███ we have what is before our eyes.</p>
    <p class="mt-2">&gt their work however would be leaked by another group in an attempt to descructure their organization, fualting their research. This fracturing lead to multiple independent researchers to complete what the leader of the ████ ██████ started.</p>

    <h3 class="mt-4">// this was the message they put together:</h3>
    <img class="border-border border-2 border-solid" src="/assets/lore/encoded.png" alt="encoded webpage">

    <p class="mt-8">&gt This is where Project Akross and the webmaster clashed. As an independent researcher, they completed and uploaded the final decoding of what had been leaked all those years ago.</p>
    <p class="mt-2">&gt the ' ᨐ ' figure you find at the top of each page is a remnant of the sites' origins. He likes to go by the name "Yep" in human. He's also kind of like a cat.</p>
</div>