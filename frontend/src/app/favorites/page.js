'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Favorites from '@/components/Favorites';
import Loader from '@/components/Ui/Loader';
import Section from '@/components/Layout/Section';
import { fetchAllPokeData } from '@/lib/features/poke-actions';

export default function FavoritesPage() {
	const dispatch = useDispatch();
	const monsterData = useSelector((state) => state.monster.pokeData);
	const isLoading = useSelector((state) => state.monster.isLoading);
	const favorites = useSelector((state) => state.monster.favorites);
	useEffect(() => {
		if (!monsterData || monsterData.length === 0) {
			dispatch(fetchAllPokeData(monsterData));
		}
	}, [monsterData, dispatch]);

	console.log(monsterData);
	console.log(favorites);

	return (
		<>
			{isLoading && <Loader />}

			<Section heading1='Favorite Pokemon'>
				<p>Your favorite pokemon</p>
				{!isLoading && monsterData.length > 0 && (
					<Favorites favs={favorites} pokedata={monsterData} />
				)}
			</Section>
		</>
	);
}
