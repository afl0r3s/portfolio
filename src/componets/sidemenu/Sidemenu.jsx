import React from 'react'

export default function Sidemenu() {
    return (
        <div>
                  <header id="header">
        <div class="d-flex flex-column">
          <div class="profile">
            <img src="assets/img/profile-img.png" alt="" class="img-fluid rounded-circle" />
            <h1 class="text-light"><a href="index.html">Alejandro Flores</a></h1>
            <div class="social-links mt-3 text-center">
              <a href="https://www.linkedin.com/in/alejandro-flores-dev/" target="_blank" rel="noreferrer" class="gtihub"><i class="bx bxl-github"></i></a>
              <a href="https://github.com/afl0r3s" target="_blank" rel="noreferrer" class="linkedin"><i class="bx bxl-linkedin"></i></a>
              <a href="mailto:sjafs.83@gmail.com" target="_blank" rel="noreferrer" class="mail"><i class="bx bx-envelope"></i></a>
            </div>
          </div>

          <nav id="navbar" class="nav-menu navbar">
            <ul>
              <li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
              <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
              <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
              <li><a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portfolio</span></a></li>
              <li><a href="#services" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Services</span></a></li>
              <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
            </ul>
          </nav>
        </div>
      </header>
        </div>
    )
}
