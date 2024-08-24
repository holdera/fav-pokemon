'use client';
import PokeCard from './PokeCard';

export default function Favorites({ favs, pokedata }) {
	return (
		<div className='gap-8 grid grid-cols-2 justify-center md:grid-cols-4 p-4'>
			{pokedata && pokedata.length > 0 && favs.length > 0 ? (
				favs.map((fav) => {
					const pokeData = pokedata.find((poke) => poke.id === fav);
					return pokeData ? (
						<PokeCard
							key={`poke-${fav}`}
							favorite={favs}
							poke={pokeData}
						/>
					) : (
						<p key={fav} className='app-subtitle'>
							Pokémon not found!
						</p>
					);
				})
			) : (
				<p className='app-subtitle'>No favorites yet!</p>
			)}
		</div>
	);
}
