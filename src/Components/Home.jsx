import IMG from "../mifoteira.jpg.png";
import P1 from "../ClimAppgif.gif";
import P2 from "../video-poke.gif";
import  miCv  from "./Link";



const Nav = () => {
  return (
    <div>
      <div className="contenedor-header">
        <header>
          <div className="logo">
            <a href="#">BRAY</a>
          </div>
          <nav id="nav">
            <ul>
              <li>
                <a href="#sobremi">Sobre Mi</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#portfolio">Proyectos</a>
              </li>
            </ul>
          </nav>
          <div className="nav-responsive">
            <i className="fa-solid fa-bars"></i>
          </div>
        </header>
      </div>
      <section id="inicio" className="inicio">
        <div className="contenido-banner">
          <div className="contenedor-img">
            <img src={IMG} alt="" className="img-mia" />
          </div>
          <h1>BRIAN CORDOBA PEREZ</h1>
          <h2>Programador Front-End</h2>
          <div className="redes">
            <a href="https://www.linkedin.com/in/brian-perez-4805932ba/" target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/BrianCordoba" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </section>

      <section id="sobremi" className="sobre-mi">
        <div className="contenido-seccion">
          <h2>Sobre Mi</h2>
          <p>
            <span>Hola, soy Brian Cordoba Perez,</span> estudiante autodidacta,
            especializado en la rama de programacion Front-End
          </p>

          <div className="fila">
            <div className="col">
              <h3>Datos Personales</h3>
              <ul>
                <li>
                  <strong>Cumpleaños </strong>
                  13/07/1993
                </li>
                <li>
                  <strong>Pais </strong>
                  Argentina
                </li>
                <li>
                  <strong>Telefono </strong>
                  011-32707546
                </li>
                <li>
                  <strong>Email </strong>
                  brianlyo77@hotmail.com
                </li>
              </ul>
            </div>
            <div className="col">
              <h3>Pasatiempos e Intereses</h3>
              <div className="contenedor-intereses">
                <div className="interes">
                  <i className="fa-solid fa-headphones"></i>
                  <span>MUSICA</span>
                </div>
                <div className="interes">
                  <i className="fa-solid fa-gamepad"></i>
                  <span>JUEGOS</span>
                </div>
                <div className="interes">
                  <i className="fa-solid fa-dumbbell"></i>
                  <span>GYM</span>
                </div>
                <div className="interes">
                  <i className="fa-solid fa-book"></i>
                  <span>ESTUDIAR</span>
                </div>
                <div className="interes">
                  <i className="fa-solid fa-guitar"></i>
                  <span>GUITARRA</span>
                </div>
                <div className="interes">
                  <i className="fa-solid fa-mug-saucer"></i>
                  <span>CAFE</span>
                </div>
                <div className="interes">
                  <i className="fa-solid fa-plane"></i>
                  <span>VIAJAR</span>
                </div>
                <div className="interes">
                  <i className="fa-solid fa-bicycle"></i>
                  <span>BICI</span>
                </div>
              </div>
            </div>
          </div>
          <button onClick={() => miCv("https://drive.google.com/file/d/1oOPSu8BWToq8fC_NH_R2nq1xCr-DZ78U/view?usp=sharing")}>
            Descargar CV <i className="fa-solid fa-download"></i>
            <span className="overlay"></span>
          </button>
        </div>
      </section>

      <section className="skills" id="skills">
        <div className="contenedor-seccion">
          <h2>Skills</h2>
          <h3>Lenguajes de Programacion y Librerias</h3>
          <div className="contenedor-leng">
            <i className="fa-solid fa-code mym"></i>
            <div className="lenguaje-html">
              <i className="fa-brands fa-html5 html-icon"></i>
              <span> HTML</span>
            </div>
            <div className="lenguaje-css">
              <i className="fa-brands fa-css3-alt"></i>
              <span> CSS</span>
            </div>
            <div className="lenguaje-java">
              <i className="fa-brands fa-js java-icon"></i>
              <span> JavaScript</span>
            </div>
            <div className="lenguaje-react">
              <i className="fa-brands fa-react"></i>
              <span> React</span>
            </div>
            <div className="lenguaje-boots">
              <i className="fa-brands fa-bootstrap"></i>
              <span> Bootstrap</span>
            </div>
            <i className="fa-solid fa-code mym"></i>
          </div>
          <h3>En Aprendizaje... </h3>
          <div className="contenedor-aprend">
            <h4>
              Curso de <b> TypeScrypt y Node.js</b>{" "}
            </h4>
          </div>
        </div>
      </section>

      <section id="portfolio" className="portfolio">
        <div className="contenedor-seccion">
          <h2>Proyectos</h2>
          <div className="galeria">
            <div className="proyecto">
              <img src={P1} alt="" />
              <div className="overlay">
                <h3>ClimApp</h3>
                <p>Primer proyecto donde use HTML, CSS, JavaScript y React</p>
              </div>
            </div>
            <div className="proyecto">
              <img src={P2} alt="" />
              <div className="overlay">
                <h3>Los Pokes</h3>
                <p>
                  Segundo Proyecto donde use: HTML, CSS, JavaScript, React y
                  NESS{" "}
                </p>
                <a href="https://los-pokes.vercel.app/" target="_blank">
                  Link a la pagina
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <a href="#inicio" className="arriba">
          <i className="fa-solid fa-angles-up"></i>
        </a>
        <div className="redes">
          <a href="https://www.linkedin.com/in/brian-perez-4805932ba/" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/BrianCordoba" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.instagram.com/briannumb/" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Nav;
