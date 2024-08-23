'use client';
import { useEffect, useState, Suspense } from 'react';
import Section from '@/components/Layout/Section';
import PokeGrid from '@/components/PokeGrid';
import { fetchAllPoke } from '../utils/fetch';

export default function Home() {
	const [monsterData, setMonsterData] = useState([]);

	useEffect(() => {
		(async () => {
			const pokeData = await fetchAllPoke();
			setMonsterData(pokeData);
		})();
	}, []);

	console.log(monsterData);
	return (
		<Section heading1='Welcome to PokeFavorites!'>
			<p>
				Browse, add your favorite pokemon to your list and then
				trade&nbsp;them!
			</p>
			<Suspense fallback={<p>Loading data...</p>}>
				<PokeGrid pokeData={monsterData} />
			</Suspense>
		</Section>
	);
}
