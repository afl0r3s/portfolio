import React from 'react'
//import Navbar from './componets/navbar/Navbar'

export default function App() {
  return (
    <div>
      {/* Pagina inicial, probando este es un texto para ver que se renderiza o se muestra */}
      <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
      
      {/* Este seria el componente del menu Side */}
      <header id="header">
        <div class="d-flex flex-column">
          <div class="profile">
            <img src="assets/img/profile-img.png" alt="" class="img-fluid rounded-circle" />
            <h1 class="text-light"><a href="index.html">Alejandro Flores</a></h1>
            <div class="social-links mt-3 text-center">
              <a href="https://www.linkedin.com/in/alejandro-flores-dev/" target="_blank" rel="noreferrer" class="gtihub"><i class="bx bxl-linkedin"></i></a>
              <a href="https://github.com/afl0r3s" target="_blank" rel="noreferrer" class="linkedin"><i class="bx bxl-github"></i></a>
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
      {/*FIN componente del menu Side */}

   <section id="hero" className="heroContent">
    <h1>I am: Alejandro Flores</h1>
    <p>This is my Portfolio..</p>
   </section> 

      <main id="main">

      <section id="about" class="about">
      <div class="container">
        <div class="section-title">
          <h2>About</h2>
          <p>
          <b>👓 I am a FullStack Web Programmer graduate from Henry Bootcamp</b><br/>
          👓 I am a Computer Engineer, I want to continue growing professionally and I am looking for new challenges in the world of software development, I consider myself an adaptable person, who can work as a team and willing to continue learning. 🚀
          </p>
          <p>
          📚 I have knowledge of Web programming with JavaScript (HTML, CSS, ReactJS, Redux, Sequelize).<br/>
          📚 I have knowledge of relational database administration (IBM Informix, MySQL, PostgreSQL, SqlServer Express and SQLite).<br/>
          📚 I have knowledge of Web programming with PHP 5 and PHP 7).<br/>
          📚 I have knowledge of other languages ​​(IBM 4GL).<br/>
          </p>
          <p><br/>
          💼 My work experience<br/>
          ➤ From 2007 to March 2010 I worked as an IT Assistant in a microfinance company, my main function was to provide technical support to employes physically and remotely, this job gave me the experience to be able to work with different types of people and be able to help them<br/>
          ➤ From April 2010 to March 2021, I worked as an IT Area Administrator in a microfinance company, among my main functions were: Coordinate the technical support that the area personnel gave with the other areas and employes, Administration of the different servers housed in the CPD, administration of the Network equipment, revision and proof of the updates received from the Financial Core before passing them to production, general administration tasks. This job gave me the experience to work with different types of people and companies, I acquired knowledge in handling GNU Linux operating systems, and executing SQL queries.<br/>
          </p>
          <p><br/>
          ✉ Contact me<br/>
          E-mail: sjafs.83@gmail.com
          </p>
          <p><br/>
          💻 You can see some of my projects<br/>
          GitHub: https://github.com/afl0r3s
          </p>
        </div>



      </div>
    </section>

        
      </main>
    </div>
  )
}
