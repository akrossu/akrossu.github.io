<script>
    export let title = "";

    // move this so header can use it too
    const pages = {
        home:'home',
        creative:'creative',
        information:'information',
        community:'community',
        code:'code',
        blog:'blog',
        gamelist:'game-list',
        musiclist:'music-list',
        external:'external',
        about:'about',
        lore:'lore',
        webring:'webring',
        guestbook: 'guestbook',
        imageboard: 'photo-wall'
    };
</script>

<div class="text-center w-72 mr-16 hidden md:block min-w-fit" >
    <div class="flex justify-center items-center mb-4">
        <img class="w-24" src="/assets/iconcat.gif" alt="">
    </div>
    <h2 class="mb-8 text-lg font-bold">website directory:</h2>
    <ul class="mb-4 list-none">
        <li><h3>\\\ ᨐ creative corner ///</h3></li>
        <li><a href="/{pages.code}">[ /{pages.code} ]</a>{#if title == `${pages.code}`}<span class='inline-block'>&nbsp&lt---</span>{/if}</li>
        <li>&gt coding projects</li>
        <li><a href="/{pages.imageboard}">[ /{pages.imageboard} ]</a>{#if title == `${pages.imageboard}`}<span class='inline-block'>&nbsp&lt---</span>{/if}</li>
        <li>&gt monthly photography</li>
    </ul>
    <ul class="mb-4 list-none">
        <li><h3>\\\ ᨐ digital garden ///</h3></li>
        <li><a href="/{pages.blog}">[ /{pages.blog} ]</a>{#if title == `${pages.blog}`}<span class='inline-block'>&nbsp&lt---</span>{/if}</li>
        <li>&gt random writings</li>
        <li><a href="/{pages.gamelist}">[ /{pages.gamelist} ]</a>{#if title == `${pages.gamelist}`}<span class='inline-block'>&nbsp&lt---</span>{/if}</li>
        <li>&gt playing/completed games</li>
        <li><a href="/{pages.musiclist}">[ /{pages.musiclist} ]</a>{#if title == `${pages.musiclist}`}<span class='inline-block'>&nbsp&lt---</span>{/if}</li>
        <li>&gt favorite songs</li>
    </ul>
    <ul class="mb-4 list-none">
        <li><h3>\\\ ᨐ information ///</h3></li>
        <li><a href="/{pages.external}">[ /{pages.external} ]</a>{#if title == `${pages.external}`}<span class='inline-block'>&nbsp&lt---</span>{/if}</li>
        <li>&gt cool websites</li>
        <li><a href="/{pages.about}">[ /{pages.about} ]</a>{#if title == `${pages.about}`}<span class='inline-block'>&nbsp&lt---</span>{/if}</li>
        <li>&gt about the webmaster</li>
        <li><a href="/{pages.lore}">[ /{pages.lore} ]</a>{#if title == `${pages.lore}`}<span class='inline-block'>&nbsp&lt---</span>{/if}</li>
        <li>&gt about this website</li>
    </ul>
    <ul class="mb-4 list-none">
        <li><h3>\\\ ᨐ community ///</h3></li>
        <li><a href="/{pages.webring}">[ /{pages.webring} ]</a>{#if title == `${pages.webring}`}<span class='inline-block'>&nbsp&lt---</span>{/if}</li>
        <li>&gt web friends!</li>
        <li><a href="/{pages.guestbook}">[ /{pages.guestbook} ]</a>{#if title == `${pages.guestbook}`}<span class='inline-block'>&nbsp&lt---</span>{/if}</li>
        <li>&gt record your visit</li>
        <li><a class="normal-case" href="https://www.discord.gg/sczXWkDsZ6" target="_blank">[ discord.gg/sczXWkDsZ6 ]</a></li>
        <li>&gt community discord</li>
    </ul>
</div>