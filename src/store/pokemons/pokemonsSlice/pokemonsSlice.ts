import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface pokemonsState {
  selectedPokemons: number[];
  limit: number;
}

const initialState: pokemonsState = {
  selectedPokemons: [],
  limit: 10,
};

export const pokemonsSlice = createSlice({
  name: "pokemonsReducer",
  initialState,
  reducers: {
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
  },
});

export const { setLimit } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
