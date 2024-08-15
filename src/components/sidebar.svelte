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
    };
</script>

<div class="text-center w-72 mr-16 hidden md:block min-w-fit" >
    <div class="flex justify-center items-center mb-4">
        <img class="w-24" src="/assets/iconcat.gif" alt="">
    </div>
    <h2 class="mb-8 text-lg font-bold">website directory:</h2>
    <ul class="mb-4 list-none">
        <li><h3>\\\ ᨐ creative corner ///</h3></li>
        <li><a href="/{pages.code}">[ akross:/{pages.code} ]</a>{#if title == `${pages.code}`}<span class='inline-block'>&nbsp&lt---</span>{/if}</li>
        <li>&gt akross' coding projects</li>
    </ul>
    <ul class="mb-4 list-none">
        <li><h3>\\\ ᨐ digital garden ///</h3></li>
        <li><a href="/{pages.blog}">[ akross:/{pages.blog} ]</a>{#if title == `${pages.blog}`}<span class='inline-block'>&nbsp&lt---</span>{/if}</li>
        <li>&gt akross' random blogs</li>
        <li><a href="/{pages.gamelist}">[ akross:/{pages.gamelist} ]</a>{#if title == `${pages.gamelist}`}<span class='inline-block'>&nbsp&lt---</span>{/if}</li>
        <li>&gt games akross' is playing</li>
        <li><a href="/{pages.musiclist}">[ akross:/{pages.musiclist} ]</a>{#if title == `${pages.musiclist}`}<span class='inline-block'>&nbsp&lt---</span>{/if}</li>
        <li>&gt akross' favorite songs</li>
    </ul>
    <ul class="mb-4 list-none">
        <li><h3>\\\ ᨐ information ///</h3></li>
        <li><a href="/{pages.external}">[ akross:/{pages.external} ]</a>{#if title == `${pages.external}`}<span class='inline-block'>&nbsp&lt---</span>{/if}</li>
        <li>&gt akross' favorite websites</li>
        <li><a href="/{pages.about}">[ Akross:/{pages.about} ]</a>{#if title == `${pages.about}`}<span class='inline-block'>&nbsp&lt---</span>{/if}</li>
        <li>&gt about akross' website</li>
        <li><a href="/{pages.lore}">[ Akross:/{pages.lore} ]</a>{#if title == `${pages.lore}`}<span class='inline-block'>&nbsp&lt---</span>{/if}</li>
        <li>&gt about this website</li>
    </ul>
    <ul class="mb-4 list-none">
        <li><h3>\\\ ᨐ community ///</h3></li>
        <li><a href="/{pages.webring}">[ Akross:/{pages.webring} ]</a>{#if title == `${pages.webring}`}<span class='inline-block'>&nbsp&lt---</span>{/if}</li>
        <li>&gt akross' web friends!</li>
        <li><a href="/{pages.guestbook}">[ Akross:/{pages.guestbook} ]</a>{#if title == `${pages.guestbook}`}<span class='inline-block'>&nbsp&lt---</span>{/if}</li>
        <li>&gt record your visit</li>
        <li><a class="normal-case" href="https://www.discord.gg/sczXWkDsZ6" target="_blank">[ discord.gg/sczXWkDsZ6 ]</a></li>
        <li>&gt akross & community discord</li>
    </ul>
</div>