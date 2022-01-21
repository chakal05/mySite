import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../assets/styles/projects.scss';



export default function Section(props) {


	return (
		<Card className='myCard'>
			<Card.Img variant='top' height='180px' src={props.pic} />
			<Card.Body  >
			<div className='cardBody'>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.text}</Card.Text>
            <Card.Subtitle className="mb-2 text-muted">
            <p>
            <i>
                <u>Tools</u>
            </i>
            : {props.tools}
        </p>
            </Card.Subtitle>
            </div>

			<div style={{textAlign:"center"}}>
            <Button style={{marginRight:'1rem', backgroundColor:'black'}} href={props.gitLink} variant='primary'>
            {' '}
            See on GitHub
        </Button>
        <Button href={props.siteLink} variant='secondary'>
            {' '}
            Visit website
        </Button>
            </div>
			</Card.Body>
		</Card>
	);
}

// <div className='projectsContainer'>
// <Row className='projectItem'>
//     <Col className='text '>
//         <h1>SasMiya </h1>
//         <p>
//             On this website, visitors can search worldwide
//             news headline
//         </p>

//         <p>
//             <i>
//                 <u>Tools</u>
//             </i>
//             : React, Sass, NewsSearchApi
//         </p>
//         <Button
//             text={'See on Github'}
//             action={() => {
//                 window.location.href =
//                     'https://github.com/chakal05/coloc';
//             }}
//         />
//     </Col>
//     <Col className='pic'>
//         <Paper className='picContainer' elevation={7}>
//             <img
//                 src={sasmiya}
//                 alt='pic'
//                 width='100%'
//                 height='100%'
//             />
//             <div className='imageText'>
//                 <a
//                     className='btn'
//                     href='https://affectionate-volhard-b9e5b2.netlify.app/'
//                     target='_blank'
//                     rel='noopener noreferrer'>
//                     {' '}
//                     Visit website
//                 </a>
//             </div>
//         </Paper>
//     </Col>
// </Row>

// <Row className='projectItem'>
// <Col className='pic leftPic '>
// <Paper className='picContainer' elevation={11}>
//     <img
//         src={kerja}
//         alt='pic'
//         width='100%'
//         height='100%'
//     />
//     <div className='imageText'>
//         <a
//             className='btn'
//             href='https://nostalgic-spence-2231c5.netlify.app/'
//             target='_blank'
//             rel='noopener noreferrer'>
//             {' '}
//             Visit website
//         </a>
//     </div>
// </Paper>
// </Col>
// <Col className='text rightText'>
// <h1>KerJa</h1>
// <p>
//     Kerja is a web application that is inspired by
//     the swedish job search application, called
//     "Platsbanken".
// </p>

// <p>
//     <i>
//         <u>Tools</u>
//     </i>
//     : React, Sass, Firebase
// </p>
// <Button
//     text={'See on Github'}
//     action={() => {
//         window.location.href =
//             'https://github.com/chakal05/PolEmploiDjiboutien';
//     }}
// />
// </Col>
// </Row>
// <Row className='projectItem '>
//     <Col className='text currency'>
//         <h1>Currency converter</h1>
//         <p>
//             With the Dollar as base, this website allows
//             users to convert to and from different
//             scandinavian currencies.
//         </p>

//         <p>
//             <i>
//                 <u>Tools</u>
//             </i>
//             : React
//         </p>
//         <Button
//             text={'See on Github'}
//             action={() => {
//                 window.location.href =
//                     'https://github.com/chakal05/scanCurr-Dev';
//             }}
//         />
//     </Col>
//     <Col className='pic'>
//         <Paper className='picContainer' elevation={11}>
//             <img
//                 src={currency}
//                 alt='pic'
//                 width='100%'
//                 height='100%'
//             />
//             <div className='imageText'>
//                 <a
//                     className='btn'
//                     href='https://scancurr.netlify.app'
//                     target='_blank'
//                     rel='noopener noreferrer'>
//                     {' '}
//                     Visit website
//                 </a>
//             </div>
//         </Paper>
//     </Col>
// </Row>

// </div>
