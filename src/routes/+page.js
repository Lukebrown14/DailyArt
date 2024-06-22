/** @type {import('./$types').PageLoad} */
export async function load() {
	const res = await fetch('https://api.artic.edu/api/v1/artworks');
	const apiData = res.json();

	return apiData;
}
