import { writable, derived } from 'svelte/store';

export const artStore = writable([]);

export const artResult = derived(artStore, ($artStore) => {
	return {
		title: $artStore.title,
		artist: $artStore.artist || $artStore.artist_title,
		description: $artStore.description,
		style: $artStore.style_title,
		place: $artStore.place_of_origin,
		jpg: `https://www.artic.edu/iiif/2/${$artStore.image_id}/full/843,/0/default.jpg`
	};
});
