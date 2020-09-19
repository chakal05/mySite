import React from 'react';
import '../assets/styles/projects.scss';
import hawa from '../assets/hawa.png';
import kerja from '../assets/kerja.png';
import currency from '../assets/currency.png';
import manedek from '../assets/manedek.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Paper from '@material-ui/core/Paper';
import Button from '../components/button';
export default function Projects(props) {
	return (
		<div className='projectsPage'>
			<div className='pageTitle'>
				<h1> Past projects </h1>
			</div>
			<div className='projectsContainer'>
				<Row className='projectItem'>
					<Col className='text '>
						<h1>KerJa</h1>
						<p>
							Kerja is a web application that is inspired by
							the swedish job search application, called
							"Platsbanken".
						</p>

						<p>
							<i>
								<u>Tools</u>
							</i>
							: React, Sass, Firebase
						</p>
						<Button
							text={'See on Github'}
							action={() => {
								window.location.href =
									'https://github.com/chakal05/PolEmploiDjiboutien';
							}}
						/>
					</Col>
					<Col className='pic'>
						<Paper className='picContainer' elevation={11}>
							<img
								src={kerja}
								alt='pic'
								width='100%'
								height='100%'
							/>
							<div className='imageText'>
								<a
									className='btn'
									href='https://nostalgic-spence-2231c5.netlify.app/'
									target='_blank'
									rel='noopener noreferrer'>
									{' '}
									Visit website
								</a>
							</div>
						</Paper>
					</Col>
				</Row>

				<Row className='projectItem'>
					<Col className='pic leftPic'>
						<Paper className='picContainer' elevation={7}>
							<img
								src={manedek}
								alt='pic'
								width='100%'
								height='100%'
							/>
							<div className='imageText'>
								<a
									className='btn'
									href='http://manedek.com/'
									target='_blank'
									rel='noopener noreferrer'>
									{' '}
									Visit website
								</a>
							</div>
						</Paper>
					</Col>
					<Col className='text rightText'>
						<h1>Manedek </h1>
						<p>
							This is a hospital management system to keep
							track and trace the activities of the hospital.
						</p>

						<p>
							<i>
								<u>Tools</u>
							</i>
							: Vue,Sass, Express, MongoDb
						</p>
						<Button
							text={'See on Github'}
							action={() => {
								window.location.href =
									'https://github.com/chakal05/peltierDev';
							}}
						/>
					</Col>
				</Row>
				<Row className='projectItem '>
					<Col className='text currency'>
						<h1>Currency converter</h1>
						<p>
							With the Dollar as base, this website allows
							users to convert to and from different
							scandinavian currencies.
						</p>

						<p>
							<i>
								<u>Tools</u>
							</i>
							: React
						</p>
						<Button
							text={'See on Github'}
							action={() => {
								window.location.href =
									'https://github.com/chakal05/scanCurr-Dev';
							}}
						/>
					</Col>
					<Col className='pic'>
						<Paper className='picContainer' elevation={11}>
							<img
								src={currency}
								alt='pic'
								width='100%'
								height='100%'
							/>
							<div className='imageText'>
								<a
									className='btn'
									href='https://scancurr.netlify.app'
									target='_blank'
									rel='noopener noreferrer'>
									{' '}
									Visit website
								</a>
							</div>
						</Paper>
					</Col>
				</Row>

				<Row className='projectItem'>
					<Col className='pic leftPic '>
						<Paper className='picContainer' elevation={7}>
							<img
								src={hawa}
								alt='pic'
								width='100%'
								height='100%'
							/>
							<div className='imageText'>
								<a
									className='btn'
									href='https://hawajano.com/'
									target='_blank'
									rel='noopener noreferrer'>
									{' '}
									Visit website
								</a>
							</div>
						</Paper>
					</Col>
					<Col className='text rightText'>
						<h1>Jano online store</h1>
						<p>
							This is an e-commerce website where users can
							browse products and buy them.
						</p>

						<p>
							<i>
								<u>Tools</u>
							</i>
							: WordPress, Woocommerce
						</p>
					</Col>
				</Row>
			</div>
		</div>
	);
}
