const url = 'https://pokeapi.co/api/v2/pokemon?limit=50';

export async function fetchAllPoke() {
	try {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error('failed to fetch data/');
		}

		const fetchedData = await response.json();
		const results = fetchedData.results;
		const details = await Promise.all(
			results.map(async (res) => {
				try {
					const pokeResponse = await fetch(res.url);
					if (!pokeResponse.ok) {
						throw new Error(
							`Cannot fetch detail data for ${res.name}`
						);
					}
					return await pokeResponse.json();
				} catch (error) {
					console.log(error.message);
					return null;
				}
			})
		);

		const validatedDetails = details.filter((detail) => detail !== null);

		return validatedDetails;
	} catch (error) {
		console.log('Error fetching Data', error);
	}
}
