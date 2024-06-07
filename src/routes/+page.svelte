<script>
	import { onMount } from 'svelte';
	let apiResult;
	let index = 0;

	function incrementIndex() {
		index += 1;
	}

	onMount(async () => {
		const dataResponse = await fetch('https://api.artic.edu/api/v1/artworks');
		var apiData = await dataResponse.json();

		apiData = apiData.data[index];
		apiResult = {
			title: apiData.title,
			artist: apiData.artist,
			description: apiData.description,
			jpg: `https://www.artic.edu/iiif/2/${apiData.image_id}/full/843,/0/default.jpg`
		};

		console.log(apiResult.jpg);
	});
</script>

<div>
	{#if apiResult}
		<h1>Daily Art</h1>
		<h2>{apiResult.title}</h2>
		<h2>{apiResult.artist}</h2>
		<p>{apiResult.description}</p>
		<img src={apiResult.jpg} alt="Dog image" />
		<button on:click={incrementIndex}> Next </button>
	{/if}
</div>
