import { useDispatch } from 'react-redux';
import Image from 'next/image';
import { togglePokeFavorites } from '@/lib/features/poke-actions';
import { ctaStyles } from '@/styles/ui';

export default function MonsterProfile({ poke, isFavorite }) {
	const dispatch = useDispatch();

	function favoritesHandler(id) {
		dispatch(togglePokeFavorites(id));
	}
	const h3Styles = 'capitalize font-semibold mb-2 text-xl md:text-2xl';
	return (
		<div className='flex flex-col mb-10 pl-4 md:mb-24 md:flex-row md:justify-between md:pl-8'>
			<div className='w-full mb-8 md:w-1/2'>
				<Image
					alt={poke.name}
					src={poke.sprites.front_default}
					width={300}
					height={300}
				/>
				<h3 className={h3Styles}>Moves</h3>
				<ul className='capitalize grid grid-cols-1 leading-7 md:grid-cols-2'>
					{poke.moves.map((move, i) => {
						if (i < 20) {
							return (
								<li key={move.move.name}>{move.move.name}</li>
							);
						}
					})}
				</ul>
			</div>
			<div className='capitalize flex flex-col justify-start w-full md:w-1/2'>
				<button
					onClick={() => favoritesHandler(poke.id)}
					className={`${
						isFavorite ? 'bg-poke-red' : '!bg-poke-green'
					} ${ctaStyles}`}
				>
					{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
				</button>
				<div className='mt-5 mb-8'>
					<h3 className={h3Styles}>Evolution</h3>
					<p>
						{poke.species.evolves_from_species === '' ||
						poke.species.evolves_from_species === null
							? 'First of its kind'
							: 'Evolved from: ' +
							  poke.species.evolves_from_species.name}
					</p>
				</div>

				<h3 className={h3Styles}>Abilities</h3>
				<ul className='mb-6'>
					{poke?.abilities.map((ability) => (
						<li
							key={`${poke.id}-${ability.ability.name}`}
							className='capitalize text-lg'
						>
							{ability.ability.name}
						</li>
					))}
				</ul>

				<h3 className={h3Styles}>
					{poke?.types.length === 1 ? 'Type' : 'Types'}
				</h3>
				<ul className='mb-6'>
					{poke?.types.map((type) => (
						<li
							key={`${poke.id}-${type.type.name}`}
							className='capitalize text-lg'
						>
							{type.type.name}
						</li>
					))}
					{poke.is_legendary && <li>Legendary</li>}
					{poke.is_mythical && <li>Mythical</li>}
				</ul>

				<div>
					<h3 className={h3Styles}>Stats</h3>
					<p>{poke.species.color.name}</p>
					<p>
						Height:{' '}
						<span className='lowercase'>{poke.height / 10} m</span>{' '}
						| Weight:{' '}
						<span className='lowercase'>{poke.weight / 10} kg</span>
					</p>
					<p></p>
					<p>Base Experience: {poke.base_experience}</p>
					<p>Habitat: {poke.species.habitat.name}</p>
					<p>
						Generation:{' '}
						<span className='uppercase'>
							{poke.species.generation.name}
						</span>
					</p>
					<p>Growth-Rate: {poke.species.growth_rate.name}</p>
				</div>
			</div>
		</div>
	);
}
