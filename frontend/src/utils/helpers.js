export const typeColorClass = (type) => {
	switch (type) {
		case 'bug':
			return 'bg-[#699936]';
		case 'dragon':
			return 'bg-[#5360A9]';
		case 'electric':
			return 'bg-[#bd9600]';
		case 'fighting':
			return 'bg-[#C67164]';
		case 'fire':
			return 'bg-poke-red';
		case 'fairy':
			return 'bg-[#e073e0]';
		case 'flying':
			return 'bg-[#6c7de7]';
		case 'ghost':
			return 'bg-[#6D5CA1]';
		case 'grass':
			return 'bg-poke-green';
		case 'poison':
			return 'bg-poke-purple';
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
