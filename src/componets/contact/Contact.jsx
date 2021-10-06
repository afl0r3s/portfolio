import React from 'react';
import style from '../Styles.module.css';
import 'boxicons';

export default function Contact() {
	return (
		<section id="contact" className={style.contact}>
			<div className={style.heroContainer} data-aos="fade-in">
				<h1>Contact Me</h1>
				<div className={style.aboutTexto} >
				<a href="mailto:sjafs.83@gmail.com" target="_blank" rel="noreferrer"><box-icon type='logo' name='github' color='black' /> &nbsp;sjafs.83@gmail.com</a>
				<p></p>
				<a href="https://github.com/afl0r3s" target="_blank" rel="noreferrer"><box-icon type='logo' name='github' color='black' /> &nbsp;GitHub: https://github.com/afl0r3s</a>
				</div>
			</div>
		</section>
	);
}
