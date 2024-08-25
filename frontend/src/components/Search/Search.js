export default function Search({ searchHandler }) {
	return (
		<form onSubmit={searchHandler}>
			<div>
				<label htmlFor=''>Search</label>
				<input type='text' placeholder='Search, ex: Charmander' />
			</div>
		</form>
	);
}
