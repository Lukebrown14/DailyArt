import { writable, derived } from 'svelte/store';

export const artStore = writable([]);

export const artResult = derived(artStore, ($artStore) => {
	return {
		title: $artStore.title,
		artist: $artStore.artist || $artStore.artist_title,
		description: $artStore.description,
		style: $artStore.department_title || $artStore.classification_title,
		place: $artStore.place_of_origin,
		dateDisplayed: $artStore.date_display,
		jpg: `https://www.artic.edu/iiif/2/${$artStore.image_id}/full/843,/0/default.jpg`
	};
});
