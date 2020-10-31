import { swSlice } from './swReduser';
import axios from 'axios';

const pathSWAPI = 'https://swapi.dev/api/planets/?page=';

const getPlanets = () => async (dispatch, getState) => {
  dispatch(swSlice.actions.setIsLoading());
  const { current } = getState().planets;
  const url = pathSWAPI + current;
  try {
    const planetsArray = await axios.get(url);
    const result = { ...planetsArray.data, current: current };
    dispatch(swSlice.actions.getPlanets(result));
  } catch (err) {
    console.log('error', err);
  }
  dispatch(swSlice.actions.resetIsLoading());
};

const previousPage = () => async (dispatch, getState) => {
  dispatch(swSlice.actions.setIsLoading());
  const { previous, current } = getState().planets;
  try {
    const planetsArray = await axios.get(previous);
    const result = { ...planetsArray.data, current: current - 1 };
    dispatch(swSlice.actions.getPlanets(result));
  } catch (err) {
    console.log('error', err);
  }
  dispatch(swSlice.actions.resetIsLoading());
};

const nextPage = () => async (dispatch, getState) => {
  dispatch(swSlice.actions.setIsLoading());
  const { next, current } = getState().planets;
  try {
    const planetsArray = await axios.get(next);
    const result = { ...planetsArray.data, current: current + 1 };
    dispatch(swSlice.actions.getPlanets(result));
  } catch (err) {
    console.log('error', err);
  }
  dispatch(swSlice.actions.resetIsLoading());
};

const getResidents = data => async (dispatch, getState) => {
  dispatch(swSlice.actions.setIsLoading());
  try {
    const result = await data.map(async item => {
      const resident = await axios.get(item);
      return resident.data.name;
    });
    const res = await Promise.all(result);
    dispatch(swSlice.actions.getResidents(res));
  } catch (error) {
    console.log('residents error', error);
  }
  dispatch(swSlice.actions.resetIsLoading());
};

const resetResidents = () => (dispatch, getState) => {
  dispatch(swSlice.actions.resetResidents());
};

export { getPlanets, getResidents, resetResidents, previousPage, nextPage };
