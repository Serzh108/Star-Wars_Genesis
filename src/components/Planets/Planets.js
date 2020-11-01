import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPlanets, nextPage, previousPage } from '../../redux/swOperations';
import Planet from '../PlanetItem/PlanetItem';
import CircleLoader from 'react-spinners/CircleLoader';
import { css } from '@emotion/core';
import styles from './Planets.module.css';

const override = css`
  display: block;
  margin: 0 auto;
`;

export default function Planets() {
  const planetsList = useSelector(state => state.planets.items);
  const previousPlanets = useSelector(state => state.planets.previous);
  const nextPlanets = useSelector(state => state.planets.next);
  const currentPlanets = useSelector(state => state.planets.current);
  const isLoading = useSelector(state => state.planets.isLoading);
  // console.log('planetsList = ', planetsList);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlanets());
  }, [dispatch]);

  const btnLeftClickHandler = () => {
    previousPlanets && dispatch(previousPage());
  };

  const btnRightClickHandler = () => {
    nextPlanets && dispatch(nextPage());
  };

  // const currentPage = () => {
  //   const previous = previousPlanets ? previousPlanets.slice(-1) : 0;
  //   return Number(previous) + 1;
  // };

  return (
    <>
      <div className={styles.logo}></div>
      <div>
        <h1 className={styles.title}>Планеты</h1>
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
        <ul className={styles.card}>
          {planetsList.length > 0 ? (
            planetsList.map((item, idx) => (
              <Planet item={item} idx={idx} key={idx} />
            ))
          ) : (
            <li>No infirmation...</li>
          )}
        </ul>
        <button
          type="button"
          className={styles.btn}
          disabled={previousPlanets ? false : true}
          style={{ color: previousPlanets ? '#fce80d' : 'red' }}
          onClick={btnLeftClickHandler}
        >
          {previousPlanets ? '<< Назад' : 'Всё, это начало'}
        </button>
        <span className={styles.btn}>{currentPlanets}</span>
        <button
          type="button"
          className={styles.btn}
          disabled={nextPlanets ? false : true}
          style={{ color: nextPlanets ? '#fce80d' : 'red' }}
          onClick={btnRightClickHandler}
        >
          {nextPlanets ? 'Вперед >>' : 'Всё, больше нет'}
        </button>
      </div>
    </>
  );
}
