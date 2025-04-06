import React from 'react';
import '../../pages/Contact/ContactPage.css'
import TypingEffect from 'react-typing-effect';
/* TypedJs */
// import Typical from 'react-typical';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 

// const Contact = () => (

//     <section className="contactos" id="contactos">

//         <h2 className="heading">
//             <FormattedMessage
//                 id='contact'
//                 defaultMessage='Contact'
//             />
//         </h2>
//         <h3 className="titulo" data-aos="fade-left" data-aos-delay="300">
//             <FormattedMessage
//                 id='contact-info'
//                 defaultMessage='Contact me by: '
//             />
//             <Typical
//                 className="site-contacto"
//                 loop={Infinity}
//                 wrapper="b"
//                 steps={[
//                     'Gmail', 1500,
//                     'WhatsApp', 1500,
//                     'Instragram', 1500,
//                     'Telegram', 1500,
//                     'Linkedin', 1500,
//                     'Github', 1500,
//                 ]}
//             />

//         </h3>

//         <div className="icons">
            // <a href="mailto:estebancarrizo619@gmail.com" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
            //     <div className="layer">
            //         <span></span>
            //         <span></span>
            //         <span></span>
            //         <span></span>
            //         <span className="fab fas fa-envelope"></span>
            //     </div>
            //     <div className="text">
            //         Gmail
            //     </div>
            // </a>
            // <a href="https://api.whatsapp.com/send?phone=5493815360966" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
            //     <div className="layer">
            //         <span></span>
            //         <span></span>
            //         <span></span>
            //         <span></span>
            //         <span className="fab fa-whatsapp"></span>
            //     </div>
            //     <div className="text">
            //         Whatsapp
            //     </div>
            // </a>
            // <a href="https://www.instagram.com/nahuelcarrizolc/" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
            //     <div className="layer">
            //         <span></span>
            //         <span></span>
            //         <span></span>
            //         <span></span>
            //         <span className="fab fa-instagram"></span>
            //     </div>
            //     <div className="text">
            //         Instagram
            //     </div>
            // </a>
            // <a href="https://t.me/estebanU20" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
            //     <div className="layer">
            //         <span></span>
            //         <span></span>
            //         <span></span>
            //         <span></span>
            //         <span className="fab fa-telegram"></span>
            //     </div>
            //     <div className="text">
            //         telegram
            //     </div>
            // </a>
            // <a href="https://www.linkedin.com/in/esteban-nahuel-carrizo-69715422b/" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
            //     <div className="layer">
            //         <span></span>
            //         <span></span>
            //         <span></span>
            //         <span></span>
            //         <span className="fab fa-linkedin-in"></span>
            //     </div>
            //     <div className="text">
            //         Linkedin
            //     </div>
            // </a>
            // <a href="https://github.com/Nahuel61920/" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
            //     <div className="layer">
            //         <span></span>
            //         <span></span>
            //         <span></span>
            //         <span></span>
            //         <span className="fab fa-github-square"></span>
            //     </div>
            //     <div className="text">
            //         GitHub
            //     </div>
            // </a>
//         </div>
//     </section>
// );

const Contact = () => (
    <section className="contactos" id="contactos">
        <h2 className="heading">
            <FormattedMessage
                id='contact'
                defaultMessage='Contact'
            />
        </h2>
        <h3 className="titulo" data-aos="fade-left" data-aos-delay="300">
            <FormattedMessage
                id='contact-info'
                defaultMessage='Contact me : '
            />
            <TypingEffect
                className="site-contacto"
                text={['Gmail', 'WhatsApp', 'LinkedIn', 'GitHub']}
                speed={150}
                eraseDelay={2000}
                typingDelay={500}
            />
        </h3>

        <div className="icons">
        <a href="mailto:aaryanp070@gmail.com" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fas fa-envelope"><FontAwesomeIcon icon={faEnvelope} size="1.7x"/></span>
                </div>
                <div className="text">
                    Gmail
                </div>
            </a>
            <a href="https://api.whatsapp.com/send?phone=6359652582" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-whatsapp"><FontAwesomeIcon icon={faWhatsapp} size="1.7x"/></span>
                </div>
                <div className="text">
                    Whatsapp
                </div>
            </a>
            {/* <a href="https://www.instagram.com/nahuelcarrizolc/" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-instagram"></span>
                </div>
                <div className="text">
                    Instagram
                </div>
            </a> */}
            {/* <a href="https://t.me/estebanU20" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-telegram"></span>
                </div>
                <div className="text">
                    telegram
                </div>
            </a> */}
            <a href="https://www.linkedin.com/in/aaryanpatel33" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-linkedin-in"><FontAwesomeIcon icon={faLinkedin} size="1.7x"/></span>
                </div>
                <div className="text">
                    Linkedin
                </div>
            </a>
            <a href="https://github.com/Aaryan33/" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-github-square"><FontAwesomeIcon icon={faGithub} size="1.7x"/></span>
                </div>
                <div className="text">
                    GitHub
                </div>
            </a>
        </div>
    </section>
);


export default React.memo(Contact);