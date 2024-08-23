import Cta from '@/components/Ui/Cta';

export default function ErrorPage() {
	return (
		<section className='mt-16'>
			<div className='max-w-5xl mx-auto px-6 w-full xl:px-0'>
				<h1 className='font-bold text-2xl py-5'>Not Found</h1>
				<p className='mb-8 md:mb-16'>
					Could not find the page that you have requested.
				</p>

				<Cta to='/'>Go Home</Cta>
			</div>
		</section>
	);
}
