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

	useEffect(() => {
		if (singlePoke.length === 0) {
			dispatch(fetchAllSinglePokeData(params.id));
		}
	}, [singlePoke, dispatch]);

	console.log(singlePoke);

	return (
		<>
			{isLoading && <Loader />}
			<Section
				heading1={<span className='capitalize'>{singlePoke.name}</span>}
			>
				{!isLoading && singlePoke.length !== 0 && (
					<MonsterProfile poke={singlePoke} />
				)}
			</Section>
		</>
	);
}
