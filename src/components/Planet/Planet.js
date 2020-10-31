import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getResidents, resetResidents } from '../../redux/swOperations';
import CircleLoader from 'react-spinners/CircleLoader';
import { css } from '@emotion/core';
import styles from './Planet.module.css';

const override = css`
  display: block;
  margin: 0 auto;
`;

export default function Planet({ match }) {
  const dispatch = useDispatch();
  const planetId = match.params.id;
  const planetInfo = useSelector(state => state.planets.items[planetId]);
  const isLoading = useSelector(state => state.planets.isLoading);
  const {
    name,
    rotation_period,
    diameter,
    climate,
    gravity,
    terrain,
    population,
    residents,
  } = planetInfo;

  useEffect(() => {
    residents.length > 0
      ? dispatch(getResidents(residents))
      : console.log(' No residents!!!');
    return () => {
      dispatch(resetResidents());
    };
  }, [dispatch, residents]);

  const residentsNameList = useSelector(state => state.planets.residentsName);

  return (
    <div className={styles.container}>
      <h2>Description of planet</h2>
      <p>Имя: {name}</p>
      <p>Период оборота: {rotation_period}</p>
      <p>Диаметр: {diameter}</p>
      <p>Климат: {climate}</p>
      <p>Гравитация: {gravity}</p>
      <p>Тип местности: {terrain}</p>
      <p>Население: {population}</p>
      <h3>Известные жители:</h3>
      {isLoading && (
        <div
          style={{
            position: 'absolute',
            top: '25%',
            left: '35%',
            zIndex: '990',
          }}
        >
          <CircleLoader
            size={360}
            color={'#006cff'}
            css={override}
            loading={isLoading}
          />
        </div>
      )}
      <ul>
        {residentsNameList.length > 0 ? (
          residentsNameList.map(item => <li key={item}>{item}</li>)
        ) : (
          <li key="Нет данных">Нет данных</li>
        )}
      </ul>
      <NavLink to="/" className={styles.link}>
        К списку планет
      </NavLink>
    </div>
  );
}
