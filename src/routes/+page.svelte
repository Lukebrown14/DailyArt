<script>
    import { onMount } from 'svelte';
    let artTile;
    let artist;
    let imgId;
    let description;
    
    onMount(async () => {
      const response = await fetch('https://api.artic.edu/api/v1/artworks')
      const apiData = await response.json();
      artTile = apiData.data[0].title;
      artist = apiData.data[0].artist_title;
      imgId = apiData.data[0].image_id;
      description = apiData.data[0].description;
      console.log(apiData.data[0])
    });
</script>

<div>
    {#if artTile} 
      <p>Title: {artTile}</p>
      <p>Artist: {artist}</p>

      <a data-sveltekit-preload-data="tap" href="https://www.artic.edu/iiif/2/{imgId}/full/843,/0/default.jpg">
        See Art Work
      </a>

    <p>{description} </p>

    {:else}
        <p>loading.....</p>
    {/if}
</div>

