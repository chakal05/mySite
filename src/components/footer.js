import React from 'react';
import logo from '../assets/logo.png';
const footer = () => {
	return (
		<footer class='p-4 bg-white  md:px-6 md:py-8'>
			<div class='sm:flex sm:items-center sm:justify-between'>
				<a href='https://flowbite.com/' class='flex items-center mb-4 sm:mb-0'>
					<img src={logo} class='h-10' alt='Chakirs Logo' />
				</a>
				<ul class='flex flex-wrap items-center mb-6 text-sm sm:mb-0 '>
					<li className='group '>
						<p className='mr-4 md:mr-6'>Email</p>
						<p className='invisible group-hover:visible absolute p-2 bg-slate-900 text-white rounded'>
							chakirkhaire@gmail.com
						</p>
					</li>

					<li>
						<a
							href='https://linkedin.com/in/chakir-khaire-b32b32100'
							target='_blank'
							rel='noreferrer'
							className='mr-4 hover:underline md:mr-6'>
							Linkedin
						</a>
					</li>
					<li>
						<a
							href='https://github.com/chakal05'
							target='_blank'
							rel='noreferrer'
							className='mr-4 hover:underline md:mr-6 '>
							Github
						</a>
					</li>
				</ul>
			</div>
			<hr class='my-6 border-gray-200 sm:mx-auto lg:my-8' />
			<span class='block text-sm  sm:text-center'>© 2022 Chakir khaire</span>
		</footer>
	);
};

export default footer;
