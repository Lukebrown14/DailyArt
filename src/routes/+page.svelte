<script>
	import { artStore, artResult } from './store';

	let ranInt = Math.floor(Math.random() * 10);
	let index = ranInt;

	/** @type {import('./$types').PageLoad} */
	export let data;
	artStore.set(data.data[index]);

	console.log(data.data[index]);
</script>

<!--!Needs doing! -->
{#if !$artResult}
	<p>ERROR</p>
{/if}

<!-- Stats -->
<div class="pt-8 pl-8">
	<div class="tooltip tooltip-bottom" data-tip="Style">
		<div class="badge badge-lg">{$artResult.style}</div>
	</div>

	<div class="tooltip tooltip-bottom" data-tip="Place of Origin">
		<div class="badge badge-lg">{$artResult.place}</div>
	</div>

	<div class="tooltip tooltip-bottom" data-tip="Finished Date">
		<div class="badge badge-lg">{$artResult.dateEnd}</div>
	</div>

	<div class="tooltip tooltip-bottom" data-tip="Srtwork Type">
		<div class="badge badge-lg">{$artResult.artworkType}</div>
	</div>
</div>

<!-- Title & artist -->
<div class="text-left pl-8 text-slate-100 font-sans space-y-5 pt-6">
	<h1 class="text-5xl">{$artResult.title || ''}</h1>
	<h2 class="text-2xl">{$artResult.artist || ''}</h2>
</div>

<!-- Art Image Rendering -->
<div
	class="mx-auto block w-5/12 h-4/12 -m-1 hover:scale-110 transition-all duration-700 ease-in-out"
>
	<img src={$artResult.jpg} alt={$artResult.title} class="object-cover max-w-full max-h-full" />
</div>

<!-- Description -->
{#if $artResult.description}
	<div class="pl-8 pt-6">
		<p>{@html $artResult.description}</p>
	</div>
{/if}
