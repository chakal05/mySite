import React from 'react';
import { Link } from 'react-router-dom';
import bild from '../assets/undraw_programming_re_kg9v.svg';
const Home = () => {
	return (
		<div className='mb-[7rem]'>
			<div className='mb-[5rem] md:mb-[6rem] lg:flex lg:mt-[10%]  '>
				<div className='p-5  lg:basis-2/4 '>
					<p className='text-5xl lg:text-6xl text-slate-700 '>Hi! I Am </p>
					<p className='text-blue-900 text-6xl lg:text-7xl my-3 '>
						{' '}
						Chakir Khaire{' '}
					</p>
					<p className='px-1 leading-relaxed text-gray-600 my-[3rem]'>
						Since the beginning of my journey as a self-taught web developer ,
						building state-of-the-art, easy to use, user friendly websites and
						web applications has truly become a passion of mine. In addition to
						my knowledge base, i actively seek out new technologies and stay
						up-to-date on new industry trends and advancements. I’m quietly
						confident, naturally curious, and perpetually working on improving
						my skills one project at a time.
					</p>
					<Link
						to={'projects/'}
						className=' p-3  bg-blue-900 rounded text-white '>
						{' '}
						See projects{' '}
					</Link>
				</div>

				<div className='my-[3rem] lg:basis-2/4  lg:flex justify-center '>
					<img src={bild} alt='' className='w-10/12 mx-auto sm:w-7/12  ' />
				</div>
			</div>

		</div>
	);
};

export default Home;
