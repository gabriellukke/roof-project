import React from 'react';

import Image1 from './assets/fernanda-alice.png';
import Image2 from './assets/alisson-de-jesus.png';
import Image3 from './assets/caroline-pantoja.png';

import styles from './index.module.css';

const Depositions = () => (
  <section className={styles.container}>
    <div className={styles.titleContainer}>
      <h1>Experiências de quem já aprendeu com a gente.</h1>
    </div>

    <div className={styles.cardsContainer}>
      <article className={styles.card}>
        <div>
          <header>
            <img src={Image1} alt="Person" />
            <h2>Fernanda Alice</h2>
          </header>
          <p>
            A professora Rô foi objetiva e precisa para solucionar meu problema.
            Eu ficava trocando professores há quase 3 meses até que encontrei
            ela.
          </p>
        </div>
      </article>
      <article className={`${styles.card} ${styles.second}`}>
        <div>
          <header>
            <img src={Image2} alt="Person" />
            <h2>Alisson de Jesus</h2>
          </header>
          <p>
            Quando entrei em contato com ela, não acreditava mais que era
            possível, pois tive muitas decepções com outros professores. Porém,
            com a Rô, eu fui levado a sério. Claro que eu tive que fazer minha
            parte, mas ela soube como me motivar e me ensinar.
          </p>
        </div>
      </article>
      <article className={`${styles.card} ${styles.third}`}>
        <div>
          <header>
            <img src={Image3} alt="Person" />
            <h2>Caroline Pantoja</h2>
          </header>
          <p>
            Só ela sabe como o aluno consegue aprender. A cada aula aprendi
            coisas que na minha vida inteira de estudante eu achava que não era
            capaz de aprender. Maravilhosa ! A profe tem uma didática impar.
          </p>
        </div>
      </article>
    </div>
  </section>
);

export default Depositions;
