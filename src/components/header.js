import React from 'react';
import {NavLink} from 'react-router-dom'
import logo from '../assets/logo.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../assets/styles/header.scss'
export default function MyHeader() {
	return (
		<Container fluid='md'>
			<Navbar expand='lg'>
                <Navbar.Brand >
                <NavLink to='/'>
                <img
                src={logo}
                alt='chakirsLogo'
                width='200'
                className='logo'
            />
                </NavLink>
				
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ml-auto'>
                        <NavLink className='link'  exact to='/' > Home </NavLink>
                        <NavLink className='link' exact  to='/projects' > Projects </NavLink>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
}
