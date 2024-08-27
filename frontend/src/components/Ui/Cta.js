import Link from 'next/link';
import { ctaStyles } from '@/styles/ui';

export default function Cta({ to, children, ...props }) {
	return (
		<>
			<Link href={to} className={ctaStyles} {...props}>
				{children}
			</Link>
		</>
	);
}
