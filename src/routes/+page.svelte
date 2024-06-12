<script>
	import { onMount } from 'svelte';
	import { artStore, artResult } from './store';

	onMount(async () => {
		const dataResponse = await fetch('https://api.artic.edu/api/v1/artworks');
		var apiData = await dataResponse.json();
		console.log(apiData.data[1]);
		artStore.set(apiData.data[1]);
	});
</script>

<div>
	{#if $artResult}
		<div class=" mb-5 text-center text-slate-100 font-sans">
			<h1 class=" text-xl">{$artResult.title || ''}</h1>
			<h2 class="text-lg">{$artResult.artist || ''}</h2>
		</div>
		<div class="mt-5">
			<img
				class="mx-auto block w-3/4 shadow-md shadow-BlackOlive hover:scale-110 transition-all duration-700 ease-in-out"
				src={$artResult.jpg}
				alt={$artResult.title}
			/>

			<div class="mt-4">
				<span class="badge badge-neutral mx-1">{$artResult.style}</span>
				<span class="badge badge-neutral mx-1">{$artResult.place}</span>
				<span class="badge badge-neutral mx-1">{$artResult.dateDisplayed}</span>
			</div>
		</div>

		{#if $artResult.description}
			<p>{@html $artResult.description}</p>
		{/if}
	{/if}
</div>
