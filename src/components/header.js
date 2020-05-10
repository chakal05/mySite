import React from 'react';
import logo from '../assets/logo.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function MyHeader() {
	return (
		<Container fluid='md'>
			<Navbar expand='lg'>
				<Navbar.Brand href='/'>
					<img
						src={logo}
						alt='chakirsLogo'
                        width='200'
                        style={{marginLeft:'-3rem'}}
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ml-auto'>
						<Nav.Link href='/'>
							Home
						</Nav.Link>
						<Nav.Link href='/projects'>
							Projects
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
}
