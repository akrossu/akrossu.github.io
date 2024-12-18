<script>
    import { onMount } from 'svelte';
    import { json } from '@sveltejs/kit';

    import Header from '$components/header.svelte';
    import Sidebar from '$components/sidebar.svelte';

    // yes, i know my api keys are public 0_0
    const LASTFM_APIKEY = 'b5d288ff2d78a6c4e32cfd6d97d2a67e';
    const baseUrl = 'http://ws.audioscrobbler.com/2.0/';

    let loadingEl;
    let curListening;
    let nowPlayingEl;

    let selected = 'all-time';

    const title = 'music-list';
    let songTitle = '';
    let songArtist = '';
    let songUrl = '';
    let songsArr = [];
    let artistsArr = [];
    let artistsImg = [];

    onMount(() => {
        loadingEl = document.getElementById("loadingMessage");
        curListening = document.getElementById("listening");
        nowPlayingEl = document.getElementById('nowPlayingNone');

        getTopTracks('overall');
        getTopArtists();
        // getSongImages();
        startPolling(120000); // updates every minute 1440 requests; every three minutes is 480 requests
    });
    
    async function fetchAndUpdate() {
        const jsonResp = await fetchLastFmData('user.getRecentTracks', 1);
        const track = jsonResp.recenttracks.track[0];
        songTitle = track.name;
        songArtist = track.artist["#text"];
        songUrl = track.url;

        // Set visible elements
        if (loadingEl) loadingEl.style.display = 'none';
        if (track['@attr'] && track['@attr']['nowplaying']) {
            nowPlayingEl.style.display = 'none';
            curListening.style.display = 'block';
        }
        else nowPlayingEl.style.display = 'block';
    }

    async function getTopTracks(period) {
        let jsonResp = await fetchLastFmData('user.getTopTracks', 10, period);
        songsArr = jsonResp.toptracks.track;
    }

    async function getTopArtists() {
        let jsonResp = await fetchLastFmData('user.getTopArtists', 8);
        artistsArr = jsonResp.topartists.artist;
    }
    
    // hacky song updating
    async function startPolling(interval) {
        async function poll() {
            try {
                await fetchAndUpdate();
            } catch (error) {
                console.error(error);
            } finally {
                setTimeout(poll, interval);
            }
        }
        poll();
    }

    async function fetchLastFmData(methodSignature, limit, period) {
        const url = new URL(baseUrl);
        const params = {
            method: methodSignature,
            user: 'akrossu',
            limit: limit,
            period: period,
            api_key: LASTFM_APIKEY,
            format: 'json'
        }

        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

        try {
            let data;
            await fetch(url)
                .then(response => response.json())
                .then(nData => {
                    data = nData;
                });
            return data;
        } catch (e) {
            console.error("Error fetching data: ", e);
            if (loadingEl) loadingEl.textContent = "Error fetching data from LastFM";
            throw e;
        }
    }

    function setSelected(item) {
        selected = item;
    }
</script>

<svelte:head>
    <title>[ home@akross:/{title} ]</title>
</svelte:head>

<Sidebar title={title}></Sidebar>
<div class="max-w-content w-full">
    <Header title={title}></Header>
    <div>
        <span id='loadingMessage'>Currently loading...</span>
        <span id='nowPlayingNone' class="hidden">&gt; last played song was <a href={songUrl} target="_blank">{songTitle}</a> by {songArtist}</span>
        <div id='listening' class="hidden">
            <span>&gt; currently listening to </span>
            <span class="normal-case"><a href={songUrl} target="_blank">{songTitle}</a> by {songArtist}</span>
        </div>
    </div>
    <div class="mt-4">
        <div class="inline-flex w-full pr-2 md:pr-4">
            <h2 class="mr-auto">top tracks</h2>
            <span class="space-x-4">
                <button class:active={selected === 'week'}
                    on:click={() => {getTopTracks('7day')}}
                    on:click={() => (selected = 'week')}>
                        week
                </button>
                <button class:active={selected === 'month'}
                    on:click={() => getTopTracks('1month')}
                    on:click={() => (selected = 'month')}>
                        month
                </button>
                <button class:active={selected === 'year'}
                    on:click={() => getTopTracks('12month')}
                    on:click={() => (selected = 'year')}>
                        year
                </button>
                <button class:active={selected === 'all-time'}
                    on:click={() => getTopTracks('overall')}
                    on:click={() => (selected = 'all-time')}>
                        all-time
                </button>
            </span>
        </div>
        {#each songsArr as song, i}
            <div class="my-4">
                <p>
                    <span class="inline-block  w-9">{++i}</span>
                    <!-- api images don't work :/ <img class="inline-flex" src={song.image[0]["#text"]} alt=""> -->
                    <span class="inline-block align-middle">
                        <a href={song.url} target="_blank">{song.name}</a>
                        <p>{song.artist.name}</p>
                    </span>
                </p>
            </div>
        {/each}
    </div>
</div>

<style>
    .active {
        text-decoration: underline;
    }
</style>