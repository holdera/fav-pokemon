'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllSinglePokeData } from '@/lib/features/poke-actions';
import Loader from '@/components/Ui/Loader';
import MonsterProfile from '@/components/MonsterProfile';
import Section from '@/components/Layout/Section';

export default function MonsterPage({ params }) {
	const dispatch = useDispatch();
	const isLoading = useSelector((state) => state.monster.isLoading);
	const singlePoke = useSelector((state) => state.monster.singlePoke);
	const favorites = useSelector((state) => state.monster.favorites);
	const id = params.id;

	useEffect(() => {
		if (singlePoke == null || singlePoke?.id !== parseInt(id)) {
			dispatch(fetchAllSinglePokeData(id));
		}
	}, [dispatch, id, singlePoke]);

	const isFavorite = favorites.includes(singlePoke?.id);

	return (
		<>
			{isLoading && <Loader />}
			{!isLoading && singlePoke && (
				<Section
					heading1={
						<span className='capitalize'>{singlePoke.name}</span>
					}
				>
					<MonsterProfile poke={singlePoke} isFavorite={isFavorite} />
				</Section>
			)}
		</>
	);
}
