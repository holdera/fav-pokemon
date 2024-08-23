import localFont from 'next/font/local';
import Nav from './Nav';
import SkipToContent from '../SkipToContent';

const pokemonFont = localFont({
	src: '../../app/fonts/pokemon-solid.ttf',
	display: 'swap',
});

export default function Header() {
	return (
		<>
			<SkipToContent />
			<header className='flex flex-col justify-center pt-9'>
				<span
					className={`${pokemonFont.className} leading-[5rem] mb-7  text-secondary text-[4rem] text-center`}
				>
					Pokemon Favorites!
				</span>
				<Nav />
			</header>
		</>
	);
}
