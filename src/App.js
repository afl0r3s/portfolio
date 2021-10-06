import React from 'react';
import './App.css';
import Sidemenu from './componets/sidemenu/Sidemenu';
import Home from './componets/home/Home';
import About from './componets/about/About';
//import style from './componets/Styles.module.css';
//import Navbar from './componets/navbar/Navbar'

export default function App() {
	return (
		<div>
			{/* Pagina inicial, probando este es un texto para ver que se renderiza o se muestra */}
			<Sidemenu />
			<Home />
			<About />


		</div>
	);
}
