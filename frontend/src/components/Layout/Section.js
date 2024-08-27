import Container from './Container';

export default function Section({ children, heading1 }) {
	return (
		<section className='mb-5'>
			<Container>
				<h1 className='pl-2 py-5 text-2xl text-center md:text-left md:text-3xl md:pl-0 md:py-7'>
					{heading1}
				</h1>
				{children}
			</Container>
		</section>
	);
}
