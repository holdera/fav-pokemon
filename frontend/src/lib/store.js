import { configureStore } from '@reduxjs/toolkit';
import { pokeReducer } from './features/poke-slice';

export const makeStore = () => {
	return configureStore({
		reducer: { monster: pokeReducer },
	});
};
