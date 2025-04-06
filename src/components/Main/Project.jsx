import React from 'react';
import '../../pages/Project/ProjectPage.css'
// import { Link } from 'react-router-dom';
// import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import 'swiper/css/autoplay';
// import { Pagination, Autoplay } from "swiper";
import { Pagination, Autoplay } from 'swiper/modules';

/* Img */
const proyectImg = require.context('../../img', true);

const Project = () => {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                <FormattedMessage
                    id='projects'
                    defaultMessage='Projects'
                />
            </h2>
            <div className="proyect-site" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className='proyectos-slider mySwiper'
                >
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./project1.jpg`)}
                            alt='project'

                        />
                        <div className="content">
                            <h3>EVChargeLocator App</h3>
                            <p>
                                Mobile Application
                            </p>
                            <p className="tecnologias">
                                React Native
                                <span> -</span> Firebase
                                <span> -</span> Expo
                                <span> -</span> Google Maps API
                            </p>
                            <a href="https://ev-charge-locatorr.netlify.app" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Aaryan33/EVCharge-Locator-App" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./project2.jpg`)}
                            alt='project'

                        />
                        <div className="content">
                            <h3>TripVerse</h3>
                            <p>
                                Web Application
                            </p>
                            <p className="tecnologias">
                                React
                                <span> -</span> NodeJs
                                <span> -</span> Express.js
                                <span> -</span> MongoDB
                                <span> -</span> JWT
                            </p>
                            <a href="https://github.com/Aaryan33/TripVerse" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Aaryan33/TripVerse" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./project4.jpg`)}
                            alt='project'

                        />
                        <div className="content">
                            <h3>EV Rent</h3>
                            <p>
                                Web Application
                            </p>
                            <p className="tecnologias">
                                React
                                <span> -</span> NodeJs
                                <span> -</span> ExpressJs
                                <span> -</span> EtherJs
                                <span> -</span> Firebase
                                <span> -</span> MongoDB
                            </p>
                            <a href="https://ev-rent.netlify.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Aaryan33/EvRent" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./project3.jpg`)}
                            alt='project'
                        />
                        <div className="content">
                            <h3>ScholarVerse</h3>
                            <p>
                                Web Application
                            </p>
                            <p className="tecnologias">
                                React
                                <span> -</span> Redux
                                <span> -</span> React Hooks
                                <span> -</span> CSS
                            </p>
                            
                            <a href="https://schollarverse.netlify.app" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Aaryan33/ScholarVerse" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                            
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./project5.jpg`)}
                            alt='project'
                        />
                        <div className="content">
                            <h3>Music Listener App</h3>
                            <p>
                                Mobile Application
                            </p>
                            <p className="tecnologias">
                                Java
                                <span> -</span> XML
                                <span> -</span> Android SDK
                                
                            </p>
                            <a href="https://github.com/Aaryan33/Music-Listener-App" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Aaryan33/Music-Listener-App" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./project6.jpg`)}
                            alt='project'
                        />
                        <div className="content">
                            <h3>Online Voting System</h3>
                            <p>
                                Web Application
                            </p>
                            <p className="tecnologias">
                                Java
                                <span> -</span> JSP
                                <span> -</span> MySQL
                                <span> -</span> HTML
                                <span> -</span> CSS
                            </p>
                            <a href="https://github.com/Aaryan33/Online-Voting-System-JSP-Servlets" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Aaryan33/Online-Voting-System-JSP-Servlets" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./project7.jpg`)}
                            alt='project'
                        />
                        <div className="content">
                            <h3>Login Authentication System</h3>
                            <p>
                                Web Application
                            </p>
                            <p className="tecnologias">
                                NodeJs
                                <span> -</span> ExpressJs
                                <span> -</span> MongoDB
                                <span> -</span> JWT
                                <span> -</span> Bcrypt
                            </p>
                            <a href="https://github.com/Aaryan33/Login-System-Authentication" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Aaryan33/Login-System-Authentication" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./project8.jpg`)}
                            alt='project '
                        />
                        <div className="content">
                            <h3>RecipeBook</h3>
                            <p>
                                Web Application
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScipt
                                <span> -</span> BootStrap
                            </p>
                            <a href="https://github.com/Aaryan33/Food-Recipe" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Aaryan33/Food-Recipe" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./project9.jpg`)}
                            alt='project'
                        />
                        <div className="content">
                            <h3>Accident Detection System</h3>
                            <p>
                                Web Application
                            </p>
                            <p className="tecnologias">
                                Python
                                <span> -</span> Convolutional Neural Networks (CNN)
                                <span> -</span> Matplotlib
                                <span> -</span> Numpy
                            </p>
                            <a href="https://github.com/Aaryan33/Accident-Detection-System" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Aaryan33/Accident-Detection-System" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    {/* <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-9.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Vida en papel</h3>
                            <p>
                                Bookstore
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                            </p>
                            <a href="https://ev-rent.netlify.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Aaryan33/EvRent" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide> */}
                    {/* <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-11.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Plus Anime</h3>
                            <p>
                                Anime website
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                            </p>
                            <a href="https://ev-rent.netlify.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Aaryan33/EvRent" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide> */}
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
            {/* <Link className="custom-btn btn-codigo portafolio-btn" to="/project">
                <FormattedMessage
                    id='btn-more-projects'
                    defaultMessage='More projects'
                />
            </Link> */}
            <div className='portafolio-btn'>
                {/* <Link to="/project">
                    <ButtomGet/>
                </Link> */}
            </div>
        </section>

    )
};
export default React.memo(Project);
