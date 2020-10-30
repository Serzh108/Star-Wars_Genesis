import { swSlice } from './swReduser';

const getPlanets = data => (dispatch, getState) => {
  dispatch(swSlice.actions.getPlanets(data));
};

const getResidents = data => (dispatch, getState) => {
  dispatch(swSlice.actions.getResidents(data));
};

export { getPlanets, getResidents };
// export default { getPlanets, getResidents };
