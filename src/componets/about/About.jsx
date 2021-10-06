import React from 'react';
import style from '../Styles.module.css';
//import {url1} from '../../const.js'
import 'boxicons';

export default function About() {
	return (
		<section id="about" className={style.about}>
			<div className={style.heroContainer} data-aos="fade-in">
				<h1>About Me</h1>
				<p>I'm Full Stack Web Developed...</p>
			</div>
		</section>
	);
}
