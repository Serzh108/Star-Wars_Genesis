import React from 'react';
import styles from './Button.module.css';

export default function Button({ direction, clickHandler, text1, text2 }) {
  return (
    <button
      type="button"
      className={styles.btn}
      disabled={direction ? false : true}
      style={{ color: direction ? '#fce80d' : 'red' }}
      onClick={clickHandler}
    >
      {direction ? text1 : text2}
    </button>
  );
}
