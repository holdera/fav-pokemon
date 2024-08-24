export default function Loader() {
	return (
		<div className='bg-[rgba(255,255,255,0.75)] fixed w-full h-screen left-0 top-0 z-10'>
			<div
				id='loader'
				className='absolute top-0 bottom-0 left-0 right-0 m-auto border-solid border-[25px] border-primary rounded-full border-t-[25px] animate-spin border-t-secondary animate-spinner w-28 h-28'
			/>
		</div>
	);
}
