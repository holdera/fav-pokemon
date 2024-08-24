import { pokeActions } from './poke-slice';
import { fetchAllPoke } from '@/utils/fetch';

export const fetchAllPokeData = () => {
	return async (dispatch) => {
		dispatch(pokeActions.dataIsFetching(true));
		try {
			const pokeData = await fetchAllPoke();
			dispatch(pokeActions.fetchPokeData(pokeData));
		} catch (error) {
			console.log(error);
			dispatch(pokeActions.dataIsFetching(false));
		} finally {
			dispatch(pokeActions.dataIsFetching(false));
		}
	};
};
