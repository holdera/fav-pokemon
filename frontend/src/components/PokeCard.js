'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import FavHeartButton from './FavHeartButton';
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
		<div className='poke-card-info flex flex-col justify-center  smMobile:justify-around smMobile:min-h-[24.063rem]'>
			<div className='bg-white flex justify-center smMobile:justify-start'>
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
				className='hover:underline hover:text-secondary text-center smMobile:text-left'
				href={`/${poke.id}`}
			>
				<h3 className='capitalize font-semibold mb-2 text-lg'>
					{poke.name}
				</h3>
			</Link>

			<div className='flex items-center justify-center gap-2.5 mb-2.5 smMobile:items-start smMobile:justify-start md:gap-4'>
				{pokeType(types)}
			</div>

			<div className='flex flex-col justify-center text-center smMobile:text-left smMobile:justify-start'>
				<p>Abilities: {abilities}</p>
				<FavHeartButton
					favorite={favorite}
					toggle={() => handleSwitch(poke.id)}
				/>
			</div>
		</div>
	);
}
