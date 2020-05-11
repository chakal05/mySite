import React from 'react';
import ReactDOM from 'react-dom';
import {
	Router,
	Switch,
	Route,
} from 'react-router-dom';
import history from './history';
import Landing from './pages/landing';
import Projects from './pages/projects';
import MyHeader from './components/header';
import MyFooter from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import './assets/styles/main.scss'

ReactDOM.render(
	<React.StrictMode>
		<Router history={history}>
			<MyHeader />
			<hr />
			<div className='main'>
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
				</Switch>
			</div>
			<hr />
			<MyFooter />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
