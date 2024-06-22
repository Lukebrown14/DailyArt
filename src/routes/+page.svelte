<script>
	import { artStore, artResult } from './store';

	let index = 2;

	/** @type {import('./$types').PageLoad} */
	export let data;
	artStore.set(data.data[index]);

	const width = data.data[index].dimensions_detail[0].width;
	const height = data.data[index].dimensions_detail[0].height;

	const getArtboardClass = () => {
		if (!height || !width) {
			return 'artboard-horizontal phone-3';
		}

		const widthHeightDifference = width - height;

		if (height < width) {
			return widthHeightDifference <= 5
				? 'artboard-horizontal phone-1'
				: 'artboard-horizontal phone-5';
		}

		if (widthHeightDifference >= 7 && widthHeightDifference <= 14) {
			return 'phone-1';
		}

		return 'phone-2';
	};

	console.log(data.data[index]);
</script>

<div class="h-screen">
	{#if !$artResult}
		<p>ERROR</p>
	{/if}

	<div class="space-y-56">
		<!-- Art Image Rendering -->
		<div
			class={`artboard ${getArtboardClass()} mt-20 mx-auto block hover:scale-110 transition-all duration-700 ease-in-out`}
		>
			<img src={$artResult.jpg} alt={$artResult.title} />
		</div>

		<!-- Title & artist -->
		<div class="text-center text-slate-100 font-sans space-y-5 pt-20">
			<h1 class="text-5xl">{$artResult.title || ''}</h1>
			<h2 class="text-2xl">{$artResult.artist || ''}</h2>
		</div>
	</div>

	<!-- Stats -->
	<!-- <div class="stats shadow text-sm bg-transparent mx-auto">
				<div class="stat">
					<div class="stat-title">Style</div>
					<div class="stat-value">{$artResult.style}</div>
				</div>

				<div class="stat">
					<div class="stat-title">Place of Origin</div>
					<div class="stat-value">{$artResult.place}</div>
				</div>
				<div>
					<div class="stat-title">Finished Date</div>
					<div class="stat-value">{$artResult.dateDisplayed}</div>
				</div>
			</div> -->
	<!--
		{#if $artResult.description}
			<p>{@html $artResult.description}</p>
		{/if} -->
</div>

<!-- <div class="mt-10">
	<img
		class="mx-auto block w-3/4 shadow-md shadow-BlackOlive scal max-w-1/2 max-h-1/2 hover:scale-110 transition-all duration-1000 ease-in-out"
		src={$artResult.jpg}
		alt={$artResult.title}
	/>
</div> -->
