import { createSlice } from '@reduxjs/toolkit';

const state = {
  items: [],
};

export const swSlice = createSlice({
  name: 'planets',
  initialState: state,
  reducers: {
    getPlanets: (state, { payload }) => ({
      items: [...state.items, payload],
    }),
    getResidents: (state, { payload }) => ({
      items: [...state.items, payload],
    }),
  },
});
