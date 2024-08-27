import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	pokeData: [],
	singlePoke: null,
	favorites: [],
	isLoading: false,
	tradeCards: [],
	tradedCards: [],
};

const pokeSlice = createSlice({
	name: 'monster',
	initialState,
	reducers: {
		addFavoritesListToLS(state) {
			const favorites = state.favorites;
			localStorage.setItem('favorites', JSON.stringify(favorites));
		},
		dataIsFetching(state, action) {
			state.isLoading = action.payload;
		},
		fetchPokeData(state, action) {
			state.pokeData = action.payload;
		},
		fetchSinglePokeData(state, action) {
			state.singlePoke = action.payload;
		},
		getFavoritesFromLS(state) {
			const existingLs = localStorage.getItem('favorites');
			if (existingLs) {
				state.favorites = JSON.parse(existingLs);
			}
		},
		toggleFavorites(state, action) {
			const pokeId = action.payload;
			const isExisting = state.favorites.includes(pokeId);

			if (isExisting) {
				state.favorites = state.favorites.filter((id) => id !== pokeId);
			} else {
				state.favorites.push(pokeId);
			}
		},
		resetFavorites(state) {
			state.favorites = [];
		},
	},
});

export const pokeActions = pokeSlice.actions;
export const pokeReducer = pokeSlice.reducer;

export default pokeSlice;
