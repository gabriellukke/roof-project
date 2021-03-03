import React from 'react';
import personImage from '../../Assets/personImage.png';

import styles from './index.module.css';

const Depositions = () => (
	<section className={styles.container}>
		
		<div className={styles.titleContainer}>
			<h1>
				Experiências de quem
				já aprendeu com a gente.
			</h1>
		</div>
		
		<div className={styles.cardsContainer}>
			
			<div className={styles.card}>
				<div>
					<header>
						<img src={ personImage } alt="Person" />
						<h2>Courtney Henry</h2>
					</header>
					<p>
						Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
						Exercitation veniam consequat sunt nostrud amet.
					</p>
				</div>
			</div>
			<div className={`${styles.card} ${styles.second}`}>
				<div>
					<header>
						<img src={ personImage } alt="Person" />
						<h2>Courtney Henry</h2>
					</header>
					<p>
						Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
						Exercitation veniam consequat sunt nostrud amet.
					</p>
				</div>
			</div>
			<div className={`${styles.card} ${styles.third}`}>
				<div>
					<header>
						<img src={ personImage } alt="Person" />
						<h2>Courtney Henry</h2>
					</header>
					<p>
						Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
						Exercitation veniam consequat sunt nostrud amet.
					</p>
				</div>
			</div>
		
		</div>
	</section>
);

export default Depositions;
