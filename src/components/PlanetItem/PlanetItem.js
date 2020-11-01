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
    history.push(`/planet/${id}`);
  };

  return (
    <li
      key={item.name}
      id={idx}
      className={styles.item}
      onClick={itemClickHandler}
    >
      <span className={styles.title_name}>
        <span className={styles.title}>название:</span> {item.name}
      </span>
      <span>
        <span className={styles.title}>климат:</span> {item.climate}
      </span>
      <span>
        <span className={styles.title}>население:</span> {item.population}
      </span>
    </li>
  );
}
