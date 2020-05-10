import React from 'react';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../assets/styles/footer.scss';
export default function MyFooter() {
	return (
		<div className='footerWrapper'>
			<p>
				{' '}
				{`${new Date().getFullYear()} | Chakir Khaire`}{' '}
				<br />
				<span>
					{' '}
					<FontAwesomeIcon icon={faEnvelope}/> :
					chakirkhaire@gmail.com{' '}
				</span>{' '}
                <br />
                <span>
                <FontAwesomeIcon className='myIcons' icon={faLinkedin}/>
                <FontAwesomeIcon className='myIcons' icon={faGithub}/>
                <FontAwesomeIcon className='myIcons' icon={faTwitter}/>
                </span>
                
			</p>
		</div>
	);
}
