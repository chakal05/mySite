import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';

const Header = () => {

	const show = () => {
		const toShow = document.getElementById('mobile-menu');

		if (toShow.classList.contains('hidden')) {
			toShow.classList.remove('hidden');
		} else {
			toShow.classList.add('hidden');
		}
	};

	return (
		<div>
			<nav className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded '>
				<div className=' flex flex-wrap justify-between items-center mx-auto'>
					<Link to={'/'} className='flex items-center'>
						{/* <span className='self-center text-xl font-semibold whitespace-nowrap '>
							ChakirKhaire
						</span> */}
						<img
							src={logo}
							alt='chakirsLogo'
							width='150'
							className='logo'
						/>
					</Link>
					<button
						data-collapse-toggle='mobile-menu'
						onClick={show}
						type='button'
						className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 '
						aria-controls='mobile-menu'
						aria-expanded='false'>
						<FontAwesomeIcon icon={faBars} />
					</button>
					<div className='hidden w-full md:block md:w-auto' id='mobile-menu'>
						<ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
							<li>
								<Link
									to={'/'}
									className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 '
									aria-current='page'>
									Home
								</Link>
							</li>
							<li>
								<Link
									to={'projects/'}
									className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 '>
									Projects
								</Link>
							</li>
						
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;
