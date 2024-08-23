import Link from 'next/link';
import Image from 'next/image';
import { pokeType } from '../utils/helpers';

export default function PokeCard({ poke }) {
	const abilities = poke?.abilities?.map((abilities, i) => (
		<span key={`ability-${i}`} className='capitalize block'>
			{abilities.ability.name}
		</span>
	));

	const types = poke?.types.map((type) => type.type.name);
	return (
		<div>
			<Image
				src={poke.sprites.front_default}
				alt={poke.name}
				width={100}
				height={100}
			/>
			<h3 className='capitalize font-semibold mb-2 text-lg'>
				{poke.name}
			</h3>
			<div className='flex items-start gap-4 mb-2.5'>
				{pokeType(types)}
			</div>
			<p>Abilities: {abilities}</p>
		</div>
	);
}
