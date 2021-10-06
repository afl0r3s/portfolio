import React from 'react';
import style from '../Styles.module.css';
import 'boxicons';

export default function About() {
	return (
		<section id="about" className={style.about}>
			<div className={style.heroContainer} data-aos="fade-in">
				<h1>About Me</h1>
				<div className={style.aboutTexto} >
				👓 I am a Computer Engineer and FullStack Web Programmer, I want to continue growing professionally and I am looking for new challenges in the world of software development, I consider myself an adaptable person, who can work as a team and willing to continue learning. 🚀
				<p></p>
				🚀 I did Henry's bootcamp and finished it to have the "Full Stack Web Developer" certificate during the 2021 management.
				<p></p>
				📚 I have knowledge of Web programming with JavaScript (HTML, CSS, ReactJS, Redux, Sequelize).<br/>
				📚 I have knowledge of relational database administration (IBM Informix, MySQL, PostgreSQL, SqlServer Express and SQLite).<br/>
				📚 I have knowledge of Web programming with PHP 5 and PHP 7).<br/>
				📚 I have knowledge of other languages ​​(IBM 4GL).<br/>
				<p></p>	
				💼 My work experience<br/>
				➤ From April 2010 to March 2021, I worked as an IT Area Administrator in a microfinance company, among my main functions were: Coordinate the technical support that the area personnel gave with the other areas and employes, Administration of the different servers housed in the CPD, administration of the Network equipment, revision and proof of the updates received from the Financial Core before passing them to production, general administration tasks. This job gave me the experience to work with different types of people and companies, I acquired knowledge in handling GNU Linux operating systems, and executing SQL queries.<br/>
				➤ From 2007 to March 2010 I worked as an IT Assistant in a microfinance company, my main function was to provide technical support to employes physically and remotely, this job gave me the experience to be able to work with different types of people and be able to help them<br/>
				</div>
			</div>
		</section>
	);
}
