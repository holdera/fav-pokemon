import Container from './Container';

export default function Section({ children, heading1 }) {
	return (
		<section className='mb-5'>
			<Container>
				<h1 className='py-5 text-xl md:text-3xl md:py-7'>{heading1}</h1>
				{children}
			</Container>
		</section>
	);
}
