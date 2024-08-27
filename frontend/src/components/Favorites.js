'use client';
import PokeCard from './PokeCard';

export default function Favorites({ favs, pokedata }) {
	return (
		<div className='gap-8 grid grid-cols-1 justify-center smMobile:grid-cols-2 md:p-4 md:grid-cols-4 md:gap-8'>
			{pokedata &&
				pokedata.length > 0 &&
				favs.length > 0 &&
				favs.map((fav) => {
					const pokeData = pokedata.find((poke) => poke.id === fav);
					return (
						<PokeCard
							key={`poke-${fav}`}
							favorite={favs}
							poke={pokeData}
						/>
					);
				})}
		</div>
	);
}
