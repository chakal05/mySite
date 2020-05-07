import React from 'react';
import {
	Router,
	Switch,
	Route,
} from 'react-router-dom';
import history from '../history';
import Landing from '../pages/landing';
import Projects from '../pages/projects';
import Contact from '../pages/contact';
import '../assets/styles/container.scss';

export default function Routes() {
	return (
		<div className='main'>
			<Router history={history}>
				<Switch>
					<Route
						path='/'
						exact
						component={Landing}
					/>

					{
						<Route
							exact
							path='/projects'
							component={Projects}
						/>
					}
					{
						<Route
							path='/contact'
							component={Contact}
						/>
					}
				</Switch>
			</Router>
		</div>
	);
}
