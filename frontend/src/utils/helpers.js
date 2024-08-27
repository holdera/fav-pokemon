export const typeColorClass = (type) => {
	switch (type) {
		case 'bug':
			return 'bg-[#699936]';
		case 'dragon':
			return 'bg-[#5360A9]';
		case 'electric':
			return 'bg-[#bd9600]';
		case 'fairy':
			return 'bg-[#e073e0]';
		case 'fighting':
			return 'bg-[#8B5E5A]';
		case 'fire':
			return 'bg-poke-red';
		case 'flying':
			return 'bg-[#6c7de7]';
		case 'ghost':
			return 'bg-[#6D5CA1]';
		case 'grass':
			return 'bg-poke-green';
		case 'ground':
			return 'bg-[#A26622]';
		case 'ice':
			return 'bg-[#50B2AB]';
		case 'poison':
			return 'bg-poke-purple';
		case 'psychic':
			return 'bg-[#7D44C7]';
		case 'rock':
			return 'bg-[#5C7A7A]';
		case 'steel':
			return 'bg-[#5A8196]';
		case 'water':
			return 'bg-poke-blue';

		default:
			return 'bg-poke-normal';
	}
};

export function pokeType(pokeT) {
	return pokeT.map((type, i) => (
		<p
			key={type + i}
			className={`capitalize py-1 px-2.5 rounded-lg ${typeColorClass(
				type
			)}`}
		>
			{type}
		</p>
	));
}
