import React from 'react';
import styles from './index.module.css';

import Vector from '../../Assets/icons/Vector.png';
import instagram from '../../Assets/icons/instagram.png';
import whatsapp from '../../Assets/icons/whatsapp-1.png';

const Footer = () => (

	<footer className={styles.container}>
		<div>
			<section className={styles.mainSection}>

				<div className={styles.logoContent}>
					<img src={ Vector } alt="Vector" />
				</div>

				<div className={styles.contactContainer}>

					<p className={styles.instagramContent}>
						<img src={ instagram } alt="Instagram Logo" />
						Instagram
					</p>
					<p>
						Se você tiver dúvidas,
						 mande uma mensagem para:
					</p>
					<p className={styles.whatsappContent}>
						<img src={ whatsapp } alt="Whatsapp Logo" />
						99 9999- 9999
					</p>
				</div>

				<ul className={styles.navContainer}>
					<strong>Navegação</strong>
					<li>Quero aprender</li>
					<li>Sobre</li>
					<li>Dúvidas</li>
					<li>Login</li>
				</ul>

				<div className={styles.privacyTermsContainer}>
					<p>Termos de uso e privacidade</p>
				</div>
			</section>

			<section className={styles.addressSection}>
				<p>Av. Belmiro Amorim, 1593 - Santa Lúcia, Maceió - AL, 57082-000</p>
			</section>
		</div>
	</footer>
);

export default Footer;