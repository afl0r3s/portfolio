import React from 'react';
import style from '../Styles.module.css';
//import {url1} from '../../const.js'
import 'boxicons';

export default function Home() {
	return (
		<section id="hero" className={style.hero}>
			<div className={style.heroContainer} data-aos="fade-in">
				<h1>I'm: Alejandro Flores</h1>
				<div className={style.wrapper}>
					<span className={style.staticTxt}>$&gt;</span>
					<ul className={style.dynamicTxt}>
						<li><span>Full Stack Web Developer</span></li>	
						<li><span>Generate and cosume API</span></li>	
						<li><span>Conection to Data Bases</span></li>
						<li><span>and More...</span></li>
					</ul>
				</div>
			</div>
		</section>
	);
}
