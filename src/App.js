import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Projects from './pages/projects';
import Header from './components/header';
import Footer from './components/footer';
function App() {
	return (
		<div className='App static '>
			<div className='container font-serif'>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='projects/' element={<Projects />} />
						</Routes>
					<div className=''>
						<Footer />
					</div>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
