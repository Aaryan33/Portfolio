import React from 'react';
import './Content.css';
import ParticleHeaderBg from '../ParticlesBg/ParticlesHeader/ParticleHeaderBg';

/* ReactScroll */
import { Link } from 'react-scroll';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Font Awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 

const Content = () => (
    <div className="contenido">
        <ParticleHeaderBg/>
        <section className="inicio" id="inicio">
        
            <div className="titulo">
            
                <p data-aos="fade-up" data-aos-delay="600">
                    <FormattedMessage
                        id='greeting'
                        defaultMessage='Hello'
                    />
                </p>
                <h1 data-aos="fade-up" data-aos-delay="800">
                    <FormattedMessage
                        id='name'
                        defaultMessage='I am Aaryan Patel'
                    />
                </h1>
                <p data-aos="fade-up" data-aos-delay="1000">
                    <FormattedMessage
                        id='rol'
                        defaultMessage='Software Developer'
                    />
                </p>

                <div className="quote-section">
                    <blockquote data-aos="fade-up" data-aos-delay="1000">
                        <FormattedMessage
                            id="quote"
                            defaultMessage="In the world of code, every problem is just an opportunity for an elegant solution. The bugs of today are the features of tomorrow."
                        />
                    </blockquote>
                </div>

                <div className="redes-sociales">
                    <a href="https://www.linkedin.com/in/aaryanpatel33" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1200"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/Aaryan33" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1400"><i className="fab fa-github"></i></a>
                    {/* <a href="https://www.instagram.com/nahuelcarrizolc/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1600"><i className="fab fa-instagram"></i></a> */}
                    <a href="https://api.whatsapp.com/send?phone=6359652582" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1800"><i className="fab fa-whatsapp"></i></a>
                </div>
                <div className="wrapper">
                    <a className="button" href="https://www.linkedin.com/in/aaryanpatel33" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1200">
                        <div className="icon">
                            <FontAwesomeIcon icon={faLinkedin} size="4x"/>
                        </div>
                        <span>Linkedin</span>
                    </a>
                    <a className="button" href="https://github.com/Aaryan33" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1400">
                        <div className="icon">
                            <FontAwesomeIcon icon={faGithub} size="4x"/>
                        </div>
                        <span>Github</span>
                    </a>
                    {/* <a className="button" href="https://www.instagram.com/nahuelcarrizolc/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1600">
                        <div className="icon">
                            <FontAwesomeIcon icon={faInstagram} size="4x"/>
                        </div>
                        <span>Instagram</span>
                    </a> */}
                    <a className="button" href="mailto:aaryanp070@gmail.com" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1800">
                        <div className="icon">
                            <FontAwesomeIcon icon={faEnvelope} size="4x"/>
                        </div>
                        <span>Email</span>
                    </a>
                </div>


                <Link to="sobre-mi" href="#sobre-mi">
                    <div className="scroll-down"></div>
                </Link>
            </div>
        </section>
    </div>
);

export default Content;
