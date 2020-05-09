import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../assets/styles/contact.scss';
export default function Contact(){
    return (
        <div className='contactWrapper' >
        <Row className='title' > 
        <h1> Get in touch</h1>
        </Row>
        <Row>
        <Col> Email </Col>
        <Col> Social icons </Col>
        </Row>
        </div>
    )
}