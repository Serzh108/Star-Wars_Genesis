import { createSlice } from '@reduxjs/toolkit';

const state = {
  current: 1,
  previous: '',
  next: '',
  items: [],
  residentsName: [],
  isLoading: false,
};

export const swSlice = createSlice({
  name: 'planets',
  initialState: state,
  reducers: {
    getPlanets: (state, { payload }) => ({
      ...state,
      items: [...payload.results],
      current: payload.current,
      previous: payload.previous,
      next: payload.next,
    }),
    getResidents: (state, { payload }) => ({
      ...state,
      residentsName: [...state.residentsName, ...payload],
    }),
    resetResidents: (state, { payload }) => ({
      ...state,
      residentsName: [],
    }),
    setIsLoading: (state, { payload }) => ({
      ...state,
      isLoading: true,
    }),
    resetIsLoading: (state, { payload }) => ({
      ...state,
      isLoading: false,
    }),
  },
});
