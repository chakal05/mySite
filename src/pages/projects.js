import React from 'react';
import '../assets/styles/projects.scss';
import sasmiya from '../assets/sasmiya.png';
import kerja from '../assets/kerja.png';
import currency from '../assets/currency.png';
import {Row, Col} from 'react-bootstrap';
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
						<h1>SasMiya </h1>
						<p>
							On this website, visitors can search worldwide
							news headline
						</p>

						<p>
							<i>
								<u>Tools</u>
							</i>
							: React, Sass, NewsSearchApi
						</p>
					</Col>
					<Col className='pic'>
						<Paper className='picContainer' elevation={7}>
							<img
								src={sasmiya}
								alt='pic'
								width='100%'
								height='100%'
							/>
							<div className='imageText'>
								<a
									className='btn'
									href='https://affectionate-volhard-b9e5b2.netlify.app/'
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
            <Col className='text rightText'>
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

			</div>
		</div>
	);
}
