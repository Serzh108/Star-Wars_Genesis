import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './PlanetItem.module.css';

export default function Planet({ item, idx }) {
  const history = useHistory();
  const itemClickHandler = e => {
    let id = null;
    if (e.target.nodeName !== 'LI') {
      if (e.target.nodeName === 'SPAN') {
        id = e.target.closest('li').id;
      } else return;
    } else {
      if (!e.target.id) return;
      id = e.target.id;
    }
    // const id = Number(e.target.id);
    // console.log('id = ', id);
    history.push(`/planet/${id}`);
  };

  return (
    <li
      key={item.name}
      id={idx}
      className={styles.item}
      onClick={itemClickHandler}
    >
      <span> название: {item.name} </span>
      <span> климат: {item.climate} </span>
      <span> население: {item.population} </span>
    </li>
  );
}
