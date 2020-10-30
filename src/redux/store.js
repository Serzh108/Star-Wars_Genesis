import { configureStore } from '@reduxjs/toolkit';
import { swSlice } from './swReduser';

const rootReducer = {
  [swSlice.name]: swSlice.reducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
