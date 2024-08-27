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
		fetchPokeData(state, action) {
			state.pokeData = action.payload;
		},
		fetchSinglePokeData(state, action) {
			state.singlePoke = action.payload;
		},
		dataIsFetching(state, action) {
			state.isLoading = action.payload;
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
