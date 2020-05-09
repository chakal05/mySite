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
export default function Projects() {
	return (
		<div className='projectsWrapper'>
			<div className='title'>
				<h1> Past projects </h1>
			</div>
			<div className='projectsContainer'>
				<Row className='leftText'>
					<Col className='text '>
						<h1>KerJa</h1>
						<p>
							Kerja is a web application
							that is inspired by the
							swedish job search
							application, called
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
						/>
					</Col>
					<Col className='pic'>
						<Paper
							className='picContainer'
							elevation={11}>
							<img
								src={kerja}
								alt='pic'
								width='100%'
								height='100%'
							/>
							<div className='imageText'>
								<Button
									className='btn'
									text={'Visit me'}
								/>
							</div>
						</Paper>
					</Col>
				</Row>

				<Row className='leftText'>
					<Col className='pic left'>
						<Paper
							className='picContainer'
							elevation={7}>
							<img
								src={manedek}
								alt='pic'
								width='100%'
								height='100%'
							/>
							<div className='imageText'>
								<Button
									className='btn'
									text={'Visit me'}
								/>
							</div>
						</Paper>
					</Col>
					<Col className='text right'>
						<h1>Manedek medical center</h1>
						<p>
							This is a hospital management
							system to keep track and
							trace the activities of the
							hospital.
						</p>

						<p>
							<i>
								<u>Tools</u>
							</i>
							: Vue,Sass, Express, MongoDb
						</p>
						<Button
							text={'See on Github'}
						/>
					</Col>
				</Row>
				<Row className='leftText'>
					<Col className='text '>
						<h1>Menfop</h1>
						<p>
							Menfop allows students to get
							the results of the national
							exam online.
						</p>

						<p>
							<i>
								<u>Tools</u>
							</i>
							: HTML, Sass, Javascript,
							Php, MySQL
						</p>
						<Button
							text={'See on Github'}
						/>
					</Col>
					<Col className='pic'>
						<Paper
							className='picContainer'
							elevation={11}>
							<img
								src={currency}
								alt='pic'
								width='100%'
								height='100%'
							/>
							<div className='imageText'>
								<Button
									className='btn'
									text={'Visit me'}
								/>
							</div>
						</Paper>
					</Col>
				</Row>

				<Row className='leftText'>
					<Col className='pic left '>
						<Paper
							className='picContainer'
							elevation={7}>
							<img
								src={hawa}
								alt='pic'
								width='100%'
								height='100%'
							/>
							<div className='imageText'>
								<Button
									className='btn'
									text={'Visit me'}
								/>
							</div>
						</Paper>
					</Col>
					<Col className='text right'>
						<h1>Jano online store</h1>
						<p>
							This is an e-commerce website
							where users can browse
							products and buy them.
						</p>

						<p>
							<i>
								<u>Tools</u>
							</i>
							: WordPress, Woocommerce
						</p>
						<Button
							text={'See on Github'}
						/>
					</Col>
				</Row>
			</div>
		</div>
	);
}
