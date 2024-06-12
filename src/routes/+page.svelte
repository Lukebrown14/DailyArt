<script>
	import { onMount } from 'svelte';
	import { artStore, artResult } from './store';

	onMount(async () => {
		const dataResponse = await fetch('https://api.artic.edu/api/v1/artworks');
		var apiData = await dataResponse.json();
		console.log(apiData.data[0]);
		artStore.set(apiData.data[0]);
	});
</script>

<div class="bg-EerieBlack">
	<h1>Daily Art</h1>

	{#if $artResult}
		<div class="mt-5">
			<img
				class="mx-auto block w-3/4 shadow-md shadow-BlackOlive hover:scale-110 transition-all duration-700 ease-in-out"
				src={$artResult.jpg}
				alt={$artResult.title}
			/>

			<div class="mt-4">
				<span class="badge badge-neutral mx-1">{$artResult.style}</span>
				<span class="badge badge-neutral mx-1">{$artResult.place}</span>
			</div>
		</div>

		<!-- {#if apiResult.title}
			<h2>{apiResult.title}</h2>
		{/if}
		{#if apiResult.artist}
			<h2 class="title">{apiResult.artist}</h2>
		{/if}
		{#if apiResult.description}
			<p>{@html apiResult.description}</p>
		{/if} -->
	{/if}
</div>
