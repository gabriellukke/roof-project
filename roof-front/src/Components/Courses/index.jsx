/* eslint-disable react/button-has-type */
import React from 'react';

import styles from './index.module.css';

import img from '../../Assets/icons/img.svg';

const Courses = () => (
  <div className={styles.container}>
    <div className={styles.courses}>
      <h1>Cursos</h1>

      <span>
        <img src={img} alt="Imagem do Curso" />
      </span>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum tellus
        tellus nunc amet vestibulum rutrum. Proin et amet varius facilisis enim
        pellentesque consectetur lacinia.
      </p>

      <button type="submit">Saber mais</button>
    </div>

    <div className={styles.courses}>
      <h1>Cursos</h1>

      <span>
        <img src={img} alt="Imagem do Curso" />
      </span>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum tellus
        tellus nunc amet vestibulum rutrum. Proin et amet varius facilisis enim
        pellentesque consectetur lacinia.
      </p>

      <button type="submit">Saber mais</button>
    </div>
  </div>
);

export default Courses;
