const url = 'https://pokeapi.co/api/v2/pokemon';

export async function fetchAllPoke() {
	try {
		const response = await fetch(`${url}?limit=150`);

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

export async function fetchSinglePoke(id) {
	try {
		const response = await fetch(`${url}/${id}`);
		const data = await response.json();
		const species = await fetch(data.species.url);
		const speciesData = await species.json();
		const evolutionChain = await fetch(speciesData.evolution_chain.url);
		const evolutionData = await evolutionChain.json();
		return {
			...data,
			species: speciesData,
			evolution_chain: evolutionData,
		};
	} catch (error) {
		throw new Error(error.message ?? 'Cannot fetch data at this time');
	}
}
