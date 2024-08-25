import Image from 'next/image';

export default function MonsterProfile({ poke }) {
	const h3Styles = 'capitalize font-semibold mb-2 text-xl';
	return (
		<div className='flex flex-col md:flex-row md:justify-between'>
			<div className='w-1/2'>
				<Image
					alt={poke.name}
					src={poke.sprites.front_default}
					width={300}
					height={300}
				/>
			</div>
			<div className='w-1/2 flex flex-col justify-start'>
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
				</ul>

				<h3 className={h3Styles}>Stats</h3>
				<p>Height: {poke.height} m</p>
				<p>Weight: {poke.weight} kg</p>
				<p>Base Experience: {poke.base_experience}</p>

				{}

				<ul>
					<li>Color: </li>
				</ul>
			</div>
		</div>
	);
}
