import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './PlanetItem.module.css';

export default function Planet({ item }) {
  const history = useHistory();
  const itemClickHandler = e => {
    // if (e.target.nodeName !== 'LI') return;
    let id = null;
    if (e.target.nodeName !== 'LI') {
      if (e.target.nodeName === 'SPAN') {
        // const innerSpan = e.target;
        // console.log('SPAN was clicked!!!', innerSpan);
        // const spanParent = innerSpan.closest('li');
        id = e.target.closest('li').id;
        // console.log('closest li.id: ', id);
      } else return;
    } else {
      if (!e.target.id) return;
      id = e.target.id;
    }

    // const id = Number(e.target.id);
    console.log('id = ', id);
    // -=-=-=-=-= TEMP! =-=-=-=-=-
    // history.replace('/planet');
    history.push('/planet');
  };

  return (
    <li
      key={item.name}
      id={item.name}
      className={styles.item}
      onClick={itemClickHandler}
    >
      <span> name: {item.name} </span>
      <span> climate: {item.climate} </span>
      <span> population: {item.population} </span>
    </li>
  );
}
