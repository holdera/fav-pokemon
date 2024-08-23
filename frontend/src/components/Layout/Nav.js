import Link from 'next/link';

export default function Nav() {
	return (
		<nav>
			<ul className='flex justify-center gap-6 text-lg tracking-wide md:text-xl'>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/favorites'>Favorites</Link>
				</li>
				<li>
					<Link href='/trade'>Trade</Link>
				</li>
			</ul>
		</nav>
	);
}
