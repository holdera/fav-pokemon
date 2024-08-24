'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '@/components/Ui/Loader';
import Section from '@/components/Layout/Section';
import PokeGrid from '@/components/PokeGrid';
import { fetchAllPokeData } from '../lib/features/poke-actions';

export default function Home() {
	const dispatch = useDispatch();
	const isLoading = useSelector((state) => state.monster.isLoading);
	const monsterData = useSelector((state) => state.monster.pokeData);
	console.log(monsterData);

	useEffect(() => {
		if (!monsterData || monsterData.length === 0) {
			dispatch(fetchAllPokeData(monsterData));
		}
	}, [monsterData, dispatch]);

	return (
		<>
			{isLoading && <Loader />}
			<Section heading1='Welcome to PokeFavorites!'>
				<p>
					Browse, add your favorite pokemon to your list and then
					trade&nbsp;them!
				</p>
				{monsterData.length > 0 && <PokeGrid pokeData={monsterData} />}
			</Section>
		</>
	);
}
