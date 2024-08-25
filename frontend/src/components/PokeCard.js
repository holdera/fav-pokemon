'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import FlickButton from './Ui/FlickButton';
import { togglePokeFavorites } from '../lib/features/poke-actions';
import { pokeType } from '../utils/helpers';

export default function PokeCard({ poke, favorite }) {
	const dispatch = useDispatch();

	function handleSwitch(id) {
		dispatch(togglePokeFavorites(id));
	}

	const abilities = poke?.abilities?.map((abilities, i) => (
		<span key={`ability-${i}`} className='capitalize block'>
			{abilities.ability.name}
		</span>
	));

	const types = poke?.types.map((type) => type.type.name);

	return (
		<div className='poke-card-info'>
			<div className='bg-white flex justify-start'>
				<Link href={`/${poke.id}`}>
					<Image
						src={poke.sprites.front_default}
						alt={poke.name}
						width={150}
						height={150}
					/>
				</Link>
			</div>
			<Link
				className='hover:underline hover:text-secondary'
				href={`/${poke.id}`}
			>
				<h3 className='capitalize font-semibold mb-2 text-lg'>
					{poke.name}
				</h3>
			</Link>

			<div className='flex items-start gap-4 mb-2.5'>
				{pokeType(types)}
			</div>
			<p>Abilities: {abilities}</p>
			<FlickButton
				favorite={favorite}
				toggle={() => handleSwitch(poke.id)}
			/>
		</div>
	);
}
