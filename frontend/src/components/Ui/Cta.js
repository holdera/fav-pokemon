import Link from 'next/link';

export default function Cta({ to, children, ...props }) {
	return (
		<>
			<Link
				href={to}
				className='bg-poke-red py-3.5 px-5 rounded-xl text-xl text-white focus:underline hover:underline'
				{...props}
			>
				{children}
			</Link>
		</>
	);
}
