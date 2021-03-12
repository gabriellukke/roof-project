import React from 'react';
import styles from './index.module.css';

import Logo from '../../Assets/logo.svg';
import Instagram from '../../Assets/icons/instagram.svg';
import Whatsapp from '../../Assets/icons/whatsapp.svg';
import Arrow from '../../Assets/icons/arrow.svg';

const Footer = () => (
	<footer className={styles.container}>
		<div>
			<section className={styles.mainContainer}>
				<div className={styles.logoContainer}>
					<img src={Logo} alt="Logo" />
				</div>

				<div className={styles.contactContainer}>
					<h3>Contato</h3>

					<ul>
						<li>
							<img src={Instagram} alt="Instagram Logo" />
							Instagram
						</li>
						<li>
							<img src={Arrow} alt="Clubinho da Rôof" />
							Clubinho da Rôof
						</li>
						<li>
							<img src={Whatsapp} alt="Whatsapp Logo" />
							99 9999- 9999
						</li>
					</ul>
				</div>

				<div className={styles.navContainer}>
					<h3>Navegação</h3>
					<ul>
						<li>Quero aprender</li>
						<li>Sobre</li>
						<li>Dúvidas</li>
						<li>Login</li>
					</ul>
				</div>
				<div className={styles.deliveryContainer}>
					<h3>Delivery</h3>
					<ul>
						<li>Goomer</li>
						<li>Ifood</li>
					</ul>

					<div className={styles.privacyTermsContainer}>
						<p>Termos de uso e privacidade</p>
					</div>
				</div>
			</section>

			<section className={styles.addressContainer}>
				<p>Av. Belmiro Amorim, 1593 - Santa Lúcia, Maceió - AL, 57082-000</p>
			</section>
		</div>
	</footer>
);

export default Footer;
