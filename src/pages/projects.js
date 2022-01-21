import React from 'react';
import '../assets/styles/projects.scss';
import sasmiya from '../assets/sasmiya.png';
import kerja from '../assets/kerja.png';
import currency from '../assets/currency.png';
import Paper from '@material-ui/core/Paper';
import Card from '../components/card';

const items = [
	{
		id: 1,
		pic: sasmiya,
		title: 'Sasmiya',
		text: `On this website, visitors can search worldwide
        news headline. For example, a user can type in "Bitcoin" 
        and get related articles news. `,
		gitLink: 'https://github.com/chakal05/coloc',
		siteLink: 'https://affectionate-volhard-b9e5b2.netlify.app/',
		tools: 'React, Sass, NewsSearchApi',
	},
	{
		id: 2,
		pic: kerja,
		title: 'Kerja',
		text: `Kerja is a web application that is inspired by
             the swedish job search application, called
             "Platsbanken".`,
		gitLink: 'https://github.com/chakal05/PolEmploiDjiboutien',
		siteLink: 'https://nostalgic-spence-2231c5.netlify.app/',
		tools: 'React, Redux, Sass, Firebase',
	},
	{
		id: 3,
		pic: currency,
		title: 'Currency converter',
		text: `  With the Dollar as base, this website allows
                     users to convert to and from different
                     scandinavian currencies.`,
		gitLink: 'https://github.com/chakal05/scanCurr-Dev',
		siteLink: 'https://scancurr.netlify.app',
		tools: 'React, Sass, Exchange rate Api',
	},
];

export default function Projects(props) {
	return (
		<div className='projectsPage'>
			<div className='pageTitle'>
				<h1> Past projects </h1>
			</div> 

			<Paper elevation={5} className='projectsContainer'>
				
					{items.map((item) => (
						<li key={item.id} style={{ margin: '1rem' }}>
							<Card
								pic={item.pic}
								title={item.title}
								text={item.text}
								gitLink={item.btnLink}
								siteLink={item.siteLink}
								tools={item.tools}
							/>
						</li>
					))}
				
			</Paper>
		</div>
	);
}
