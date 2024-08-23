import Link from 'next/link';

export default function SkipToContent() {
	return (
		<Link
			href='#content'
			className='absolute text-[0] text-center underline w-0 invisible focus:relative focus:text-lg focus:visible focus:w-full'
		>
			Skip to Content
		</Link>
	);
}
