import React from 'react';
import style from '../Styles.module.css';
import Cardproject from './Cardproject';
import 'boxicons';

export default function Project() {
	return (
		<section id="projects" className={style.project}>
			<div className={style.heroContainer} data-aos="fade-in">
				<h1>My Projects...</h1>
				<Cardproject />
			</div>
		</section>
	);
}
