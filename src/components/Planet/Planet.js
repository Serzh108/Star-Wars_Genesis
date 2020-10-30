import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Planet.module.css';

export default function Planet({ match }) {
  const history = useHistory();
  console.log('history: ', history);
  console.log('match: ', match.params.id);
  return (
    <div className={styles.container}>
      <p>Description of planet</p>
    </div>
  );
}
