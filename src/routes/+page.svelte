<script>
	import { onMount } from 'svelte';
	let apiResult;
	let index = 0;

	onMount(async () => {
		const dataResponse = await fetch('https://api.artic.edu/api/v1/artworks');
		var apiData = await dataResponse.json();

		apiData = apiData.data[index];
		apiResult = {
			title: apiData.title,
			artist: apiData.artist || apiData.artist_title,
			description: apiData.description,
			jpg: `https://www.artic.edu/iiif/2/${apiData.image_id}/full/843,/0/default.jpg`
		};

		console.log(apiData);
	});
</script>

<div class="app">
	{#if apiResult}
		<h1>Daily Art</h1>
		<img class="art" src={apiResult.jpg} alt="Dog image" />
		{#if apiResult.title}
			<h2 class="font-bold bg-red-600">{apiResult.title}</h2>
		{/if}
		{#if apiResult.artist}
			<h2 class="title">{apiResult.artist}</h2>
		{/if}
		{#if apiResult.description}
			<p>{@html apiResult.description}</p>
		{/if}
	{/if}
</div>

<style>
	.title {
		text-align: center;
	}
	.art {
		display: block;
		margin-left: auto;
		margin-right: auto;
		width: 50%;
	}
</style>
