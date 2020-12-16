import React from 'react';
import '../assets/styles/button.scss';
export default function Button(props) {
	return (
		<div>
			<button className='myBtn' onClick={props.action}>
				{' '}
				{props.text}{' '}
			</button>
		</div>
	);
}
