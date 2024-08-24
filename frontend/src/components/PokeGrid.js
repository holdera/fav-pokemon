'use client';
import PokeCard from './PokeCard';

export default function PokeGrid({ pokeData = [], favorite }) {
	return (
		<div className='mt-0'>
			<h2 className='capitalize py-4 font-semibold text-xl'>
				Browse pocket monsters
			</h2>

			<div className='gap-8 grid grid-cols-2 justify-center md:grid-cols-4 p-4'>
				{pokeData.length > 0 &&
					pokeData.map((poke) => (
						<PokeCard
							key={`poke-${poke.id}`}
							favorite={favorite.includes(poke.id)}
							poke={poke}
						/>
					))}
			</div>
		</div>
	);
}
