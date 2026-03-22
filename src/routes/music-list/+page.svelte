<!-- @migration-task Error while migrating Svelte code: Cannot assign to constant -->
<script>
  import { onMount } from 'svelte';
  import Header from '$components/header.svelte';
  import Sidebar from '$components/sidebar.svelte';

  const title = "music-list";

  const API_BASE = "https://api.akross.dev/lastfm";

  let loadingEl;
  let curListening;
  let nowPlayingEl;

  let songSelected = 'all-time';
  let artistSelected = 'all-time';

  let songTitle = '';
  let songArtist = '';
  let songUrl = '';

  let songsArr = [];
  let artistsArr = [];

  let topTracksCache = {};
  let topArtistsCache = {};

  onMount(() => {
    loadingEl = document.getElementById("loadingMessage");
    curListening = document.getElementById("listening");
    nowPlayingEl = document.getElementById('nowPlayingNone');

    fetchNowPlaying();
    getTopTracks('7day');
    getTopArtists('7day');

    startPolling(120000); // update every 2 minutes
  });

  async function fetchFromWorker(params) {
    const url = new URL(API_BASE);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    const res = await fetch(url.toString());
    return await res.json();
  }

    async function fetchNowPlaying() {
        try {
            const data = await fetchFromWorker({ method: 'user.getRecentTracks', limit: 1 });
            
            // check data exists
            if (!data?.recenttracks?.track?.length) {
                console.warn("No recent tracks returned", data);
                songTitle = songArtist = songUrl = "";
                if (loadingEl) loadingEl.textContent = "No recent tracks found";
                return;
            }

            const track = data.recenttracks.track[0];

            songTitle = track.name || "";
            songArtist = track.artist?.["#text"] || "";
            songUrl = track.url || "";

            if (loadingEl) loadingEl.style.display = 'none';
            if (track['@attr']?.nowplaying) {
                nowPlayingEl.style.display = 'none';
                curListening.style.display = 'block';
            }
            else {
                nowPlayingEl.style.display = 'block';
            }

        } catch (err) {
            console.error(err);
            if (loadingEl) loadingEl.textContent = "Error fetching data";
        }
    }

    async function getTopTracks(period) {
        if (topTracksCache[period]) {
            songsArr = topTracksCache[period];
            return;
        }

        try {
            const data = await fetchFromWorker({ method: 'user.getTopTracks', limit: 10, period });

            if (!data?.toptracks?.track) {
                console.warn("No top tracks returned", data);
                songsArr = [];
                return;
            }

            songsArr = data.toptracks.track.map(t => ({
                name: t.name,
                artist: t.artist?.name || "",
                url: t.url,
                playcount: t.playcount
            }));
            topTracksCache[period] = songsArr;

        } catch (err) {
            console.error(err);
            songsArr = [];
        }
    }

    async function getTopArtists(period) {
        if (topArtistsCache[period]) {
            artistsArr = topArtistsCache[period];
            return;
        }

        try {
            const data = await fetchFromWorker({ method: 'user.getTopArtists', limit: 8, period });

            if (!data?.topartists?.artist) {
                console.warn("No top artists returned", data);
                artistsArr = [];
                return;
            }

            artistsArr = data.topartists.artist.map(a => ({
                name: a.name,
                url: a.url,
                playcount: a.playcount
            }));
            topArtistsCache[period] = artistsArr;

        } catch (err) {
            console.error(err);
            artistsArr = [];
        }
    }

    function startPolling(interval) {
        async function poll() {
            await fetchNowPlaying();
            setTimeout(poll, interval);
        }
        poll();
    }
</script>

<svelte:head>
  <title>[ home@akross:/{title} ]</title>
</svelte:head>

<Sidebar title="music-list" />
<div class="max-w-content w-full">
  <Header title="music-list" />

  <div>
    <span id='loadingMessage'>Currently loading...</span>
    <span id='nowPlayingNone' class="hidden">
      &gt; last played song was <a href={songUrl} target="_blank">{songTitle}</a> by {songArtist}
    </span>
    <div id='listening' class="hidden">
      <span>&gt; currently listening to </span>
      <span class="normal-case">
        <a href={songUrl} target="_blank">{songTitle}</a> by {songArtist}
      </span>
    </div>
  </div>

  <!-- Top tracks -->
  <div class="mt-4">
    <div class="inline-flex w-full pr-2 md:pr-4">
      <h2 class="mr-auto">top tracks</h2>
      <span class="space-x-4">
        <button class:active={songSelected==='week'} on:click={() => { getTopTracks('7day'); songSelected='week'; }}>week</button>
        <button class:active={songSelected==='month'} on:click={() => { getTopTracks('1month'); songSelected='month'; }}>month</button>
        <button class:active={songSelected==='year'} on:click={() => { getTopTracks('12month'); songSelected='year'; }}>year</button>
        <button class:active={songSelected==='all-time'} on:click={() => { getTopTracks('overall'); songSelected='all-time'; }}>all-time</button>
      </span>
    </div>

    {#each songsArr as song, i}
      <div class="px-4 my-3 w-full inline-flex">
        <div class="mr-auto">
          <span class="inline-block w-9">{i+1}</span>
          <span class="inline-block align-middle">
            <a href={song.url} target="_blank">{song.name}</a>
            <p>{song.artist}</p>
          </span>
        </div>
        <span class="pr-2 md:pr-4 align-middle my-auto">{song.playcount} plays</span>
      </div>
    {/each}
  </div>

  <!-- Top artists -->
  <div class="mt-4">
    <div class="inline-flex w-full pr-2 md:pr-4">
      <h2 class="mr-auto">top artists</h2>
      <span class="space-x-4">
        <button class:active={artistSelected==='week'} on:click={() => { getTopArtists('7day'); artistSelected='week'; }}>week</button>
        <button class:active={artistSelected==='month'} on:click={() => { getTopArtists('1month'); artistSelected='month'; }}>month</button>
        <button class:active={artistSelected==='year'} on:click={() => { getTopArtists('12month'); artistSelected='year'; }}>year</button>
        <button class:active={artistSelected==='all-time'} on:click={() => { getTopArtists('overall'); artistSelected='all-time'; }}>all-time</button>
      </span>
    </div>

    {#each artistsArr as artist, i}
      <div class="px-4 my-4 w-full inline-flex">
        <div class="mr-auto">
          <span class="inline-block w-9">{i+1}</span>
          <span class="inline-block align-middle">
            <a href={artist.url} target="_blank">{artist.name}</a>
          </span>
        </div>
        <span class="pr-2 md:pr-4 align-middle my-auto">{artist.playcount} plays</span>
      </div>
    {/each}
  </div>
</div>

<style>
  .active { text-decoration: underline; }
</style>
