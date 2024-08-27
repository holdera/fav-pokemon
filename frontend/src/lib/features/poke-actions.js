import { pokeActions } from './poke-slice';
import { fetchAllPoke, fetchSinglePoke } from '@/utils/fetch';

export const fetchAllPokeData = () => {
	return async (dispatch) => {
		dispatch(pokeActions.dataIsFetching(true));
		try {
			const pokeData = await fetchAllPoke();
			dispatch(pokeActions.fetchPokeData(pokeData));
		} catch (error) {
			console.log(error);
		} finally {
			dispatch(pokeActions.dataIsFetching(false));
		}
	};
};

export const fetchAllSinglePokeData = (id) => {
	return async (dispatch) => {
		dispatch(pokeActions.dataIsFetching(true));
		try {
			const pokeData = await fetchSinglePoke(id);
			dispatch(pokeActions.fetchSinglePokeData(pokeData));
		} catch (error) {
			console.log(error);
		} finally {
			dispatch(pokeActions.dataIsFetching(false));
		}
	};
};

export const togglePokeFavorites = (id) => {
	return (dispatch) => {
		dispatch(pokeActions.toggleFavorites(id));
	};
};
