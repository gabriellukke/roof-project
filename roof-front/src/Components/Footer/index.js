import React from 'react';
import './styles.css';

import Vector from '../../Assets/icons/Vector.png';
import instagram from '../../Assets/icons/instagram.png';
import whatsapp from '../../Assets/icons/whatsapp-1.png';

export const Footer = () => {
	return (

		<footer className='footer-container'>
			<div>
				<div>
					<img src={ Vector } alt="Vector" />

					<div className='contact-container'>
						<p>
							<img src={ instagram } alt="Instagram Logo" />
							Instagram
						</p>
						<p>
							Se você tiver dúvidas, mande uma mensagem para:
						</p>
						<p>
							<img src={ whatsapp } alt="Whatsapp Logo" />
							99 9999- 9999
						</p>
					</div>

					<div className='nav-container'>
						<p><strong>Navegação</strong></p>
						<p>Quero aprender</p>
						<p>Sobre</p>
						<p>Dúvidas</p>
						<p>Login</p>
					</div>

					<div>
						<p>Termos de uso e privacidade</p>
					</div>
				</div>

				<div>
					<p>Av. Belmiro Amorim, 1593 - Santa Lúcia, Maceió - AL, 57082-000</p>
				</div>
			</div>
		</footer>
	);
}
