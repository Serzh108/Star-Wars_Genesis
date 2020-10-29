import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Planet from '../PlanetItem/PlanetItem';
import styles from './Planets.module.css';

const initialState = [];
const pathSWAPI = 'https://swapi.dev/api/planets/';

export default function Planets() {
  const [state, setstate] = useState(initialState);
  useEffect(() => {
    planets();
  }, []);

  const planets = async () => {
    try {
      const planetsArray = await axios.get(pathSWAPI);
      console.log('planetsArray = ', planetsArray.data);
      setstate(planetsArray.data.results);
    } catch (err) {
      console.log('error', err);
    }
  };

  return (
    <div>
      <h1>Planets</h1>
      <ul className={styles.card}>
        {state.length > 0 &&
          state.map(
            item => (
              //  {
              <Planet item={item} />
            ),
            // return (
            //   <li key={item.name}>
            //     <p>name: {item.name}</p>
            //     <p>climate: {item.climate}</p>
            //     <p>population: {item.population}</p>
            //   </li>
            // );
            // }
          )}
      </ul>
    </div>
  );
}
