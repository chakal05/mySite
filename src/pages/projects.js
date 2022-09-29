import React from 'react';
import currencyConverter from '../assets/Currency Converter.png';
import searchNews from '../assets/searchNews.png';
import sams from '../assets/Sams.png';
import platsBanken from '../assets/platsbankenClone.png';

let projectsData = [
	{
		bild: currencyConverter,
		title: 'Exchange',
		description:
			'With the Dollar as base, this website allows users to convert to and from different scandinavian currencies.',
		tools: ' React, Sass, Exchange rate Api',
		githubLink: 'https://github.com/chakal05/currency_converter',
		websiteLink: 'https://scancurr.netlify.app/'
	},
	{
		bild: searchNews,
		title: 'News ',
		description:
			'On this website, visitors can search worldwide news headline. For example, a user can type in "Bitcoin" and get related articles news.',
		tools: 'React, Sass, NewsSearchApi',
		githubLink: 'https://github.com/chakal05/newsSearch',
		websiteLink: 'https://affectionate-volhard-b9e5b2.netlify.app/'
	},
	{
		bild: sams,
		title: 'Blocket minimal clone ',
		description: 'This is a minimal clone of Blocket with NextAuth login. ',
		tools: 'Nextjs, Tailwindcss, Typescript, NextAuth, MongoDb',
		githubLink: 'https://github.com/chakal05/asas',
		websiteLink: 'https://asas-vqai.vercel.app/'
	},
	{
		bild: platsBanken,
		title: 'Kerja',
		description:
			'Kerja is a web application that is inspired by the swedish job search application, called "Platsbanken.',
		tools: 'React, Redux, Sass, Firebase',
		githubLink: 'https://github.com/chakal05/platsbanken_clone',
		websiteLink: 'https://nostalgic-spence-2231c5.netlify.app/'
	}
];

const projects = () => {
	return (
		<div className='mb-12'>
			<div className='my-[1rem] p-2'>
				<p className='text-4xl lg:text-5xl text-gray-700 '> Projects </p>
			</div>

			<div className=''>
				<ul className='p-3'>
					{projectsData.map((item, index) => {
						return (
							<li key={index} className='md:w-4/5 mx-auto my-12 md:p-3'>
								<div className='md:flex '>
									<div className='md:basis-2/5'>
										<img
											src={item.bild}
											alt=''
											className='w-9/12 mx-auto rounded md:h-full md:w-full '
										/>
									</div>
									<div className='w-11/12 mx-auto p-2 md:ml-3  md:pt-0  '>
										<p className='text-xl text-blue-900 font-bold '>
											{' '}
											{item.title}{' '}
										</p>
										<p className='mt-3 '> {item.description} </p>
										<p className='mt-1  '>
											{' '}
											Tools: <span className='font-semibold'>
												{item.tools}
											</span>{' '}
										</p>
										<div className='mt-3'>
											<a
												href={item.githubLink}
												target='_blank'
												rel='noreferrer'
												className='bg-blue-900 text-white mr-1 p-2 rounded  '>
												{' '}
												See on Github{' '}
											</a>
											<a
												href={item.websiteLink}
												target='_blank'
												rel='noreferrer'
												className='bg-blue-900 text-white  p-2 rounded  '>
												{' '}
												Visit website{' '}
											</a>
										</div>
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			</div>

		</div>
	);
};

export default projects;
