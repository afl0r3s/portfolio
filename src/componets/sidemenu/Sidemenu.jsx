import React, { useState } from 'react';
import style from '../Styles.module.css';
import 'boxicons';

export default function Sidemenu() {
  const [menuState, setMenuState] = useState(false)
  console.log(menuState)
  return (
    <>
      <span className={style.menu} onClick={()=> setMenuState(!menuState)}>
        {menuState? (<box-icon name='x' color='white' />) : (<box-icon name='menu' color='white' />)}
      </span>

			<header className={menuState ? `${style.header}` : `${style.header2}` } >
        <div className={style.profile}>
          <img src='https://res.cloudinary.com/afl0r3s/image/upload/v1633487385/test/profile-img_jewkey.png' alt="mi_foto" />
          <h1>Alejandro Flores</h1>
          <div className={style.socialLinks}>
            <a href="https://www.linkedin.com/in/alejandro-flores-dev/" target="_blank" rel="noreferrer"> <box-icon type='logo' name='linkedin' color='white' /> </a>
            <a href="https://github.com/afl0r3s" target="_blank" rel="noreferrer"><box-icon type='logo' name='github' color='white' /></a>
          </div>
          <nav className={style.navMenu}>
            <ul>
              <li><a href="#hero" className={style.navLink}><box-icon name='home' type='solid' color='white'/><span>Home</span></a></li>
              <li><a href="#about" className={style.navLink}><box-icon name='user' type='solid' color='white'/><span>About</span></a></li>
              <li><a href="#projects" className={style.navLink}><box-icon name='book-content' type='solid' color='white' /><span>Projects</span></a></li>
              <li><a href to="#contact" className={style.navLink}><box-icon name='envelope' type='solid' color='white' /><span>Contact Me</span></a></li>
            </ul>
          </nav>
        </div>
			</header>
		</>
	);
}
