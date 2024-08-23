import Container from './Container';

export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className='bg-black border-t-2 border-y-primary py-4 text-center md:py-6'>
			<Container>
				<p>&copy; {year}, Alannah Holder Inc.</p>
				<p>
					Disclaimer: Pokemon does not belong to me. I am not making
					any money off of this. This was made just for fun because I
					love Pokemon.
				</p>
			</Container>
		</footer>
	);
}
