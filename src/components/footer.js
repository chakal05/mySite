import React from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/styles/footer.scss';
export default function MyFooter() {
	return (
		<div className='footerWrapper'>
			<p>
				<span>
					{' '}
					<FontAwesomeIcon
						icon={faEnvelope}
					/>{' '}
					: chakirkhaire@gmail.com{' '}
				</span>{' '}
				<br />
				<span>
					<a href='#' className='myIcons'>
						{' '}
						<FontAwesomeIcon
							icon={faLinkedin}
						/>
					</a>
					<a href='#' className='myIcons'>
						<FontAwesomeIcon
							icon={faTwitter}
						/>
					</a>
					<a className='myIcons' href='#'>
						<FontAwesomeIcon
							icon={faGithub}
						/>
					</a>
				</span>{' '}
				<br />
				<span>
					{' '}
					{`${new Date().getFullYear()} | Chakir Khaire`}{' '}
				</span>
			</p>
		</div>
	);
}
