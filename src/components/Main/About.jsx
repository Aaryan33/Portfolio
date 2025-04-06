import React from 'react';
import '../../pages/About/AboutPage.css'
// import { Link } from 'react-router-dom';
import cv from '../../cv/cv.pdf';
// import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const About = () => (
    <section className="sobre-mi" id="sobre-mi">
        <h2 className="heading">
            <FormattedMessage
                id='about'
                defaultMessage='About me'
            />
        </h2>

        <div className="row container">
            <div className="columns" data-aos="fade-right" data-aos-delay="300">
                <h3>
                    <FormattedMessage
                        id='im'
                        defaultMessage='who I am'
                    />
                </h3>
                <h4>
                    <FormattedMessage
                        id='description'
                        defaultMessage="Hi there! I'm Aaryan Patel and I am a Software Developer."
                    />
                </h4>
                <p>
                    <FormattedMessage
                        id='my-description'
                        defaultMessage="I'm a Computer Science and Engineering student at Pandit Deendayal Energy University with a passion for building innovative software solutions. My journey in technology is driven by curiosity and a desire to create impactful applications that solve real-world problems."
                    />
                </p>
                <p>
                    <FormattedMessage
                        id='my-description'
                        defaultMessage="My technical journey spans a diverse set of tools and frameworks, from crafting responsive, high-performance applications with React and Flutter, to building robust and scalable backend systems with Java, Node.js, and Spring Boot. Outside of coding, I am constantly exploring emerging technologies and staying up-to-date with best practices in software development, always striving to stay ahead of the curve in this fast-evolving field."
                    />
                </p>
                <ul>
                    {/* <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='years'
                                    defaultMessage='Age: '
                                />
                            </span>
                            22
                        </p>
                    </li> */}
                    
                    <li>
                        <p><span>Email:</span> aaryanp070@gmail.com</p>
                    </li>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='from'
                                    defaultMessage='From: '
                                />
                            </span>
                            Gujarat, India
                        </p>
                    </li>
                </ul>
                <div className="mas-info">
                    <a href={cv} target="_blank" rel="noopener noreferrer" download="cv.pdf" className="btn-codigo buttonDownload">
                        <FormattedMessage
                            id='btn-cv'
                            defaultMessage='Download CV'
                        />
                    </a>
                    <div className='mas-info-btn'>
                    {/* <Link to="/about">
                        <ButtomGet/>
                    </Link> */}
                    </div>
                </div>
            </div>
            <div className="columns col-skill" data-aos="fade-left" data-aos-delay="650">
                <h3>skills</h3>
                <h4>Front-End</h4>
                <div className="skill">
                    <div>
                        <img alt="HTML" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
                        <h5>HTML</h5>
                    </div>
                    <div>
                        <img alt="CSS" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
                        <h5>CSS</h5>
                    </div>
                    <div>
                        <img alt="Js" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
                        <h5>JavaScript</h5>
                    </div>
                    {/* <div>
                        <img alt="Sass" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
                        <h5>Sass</h5>
                    </div> */}
                    <div>
                        <img alt="Bootstrap" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                        <h5>Bootstrap</h5>
                    </div>
                    {/* <div>
                        <img alt="jQuery" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" />
                        <h5>jQuery</h5>
                    </div> */}
                    <div>
                        <img alt="React" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                        <h5>React</h5>
                    </div>
                    <div>
                        <img alt="React Native" className="icons-skils" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsnP5dYXIN9qnyO9USimi1990GPA-jju3MXA&s" />
                        <h5>React Native</h5>
                    </div>
                </div>
                <h4>Back-End</h4>
                <div className="skill">
                    <div>
                        <img alt="Nodejs" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                        <h5>NodeJs</h5>
                    </div>
                    <div>
                        <img alt="express" className="icons-skils" src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/thumb/expressjslogo.png" />
                        <h5>ExpressJs</h5>
                    </div>
                    {/* <div>
                        <img alt="php" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
                        <h5>PHP</h5>
                    </div> */}
                    {/* <div>
                        <img alt="laravel" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" />
                        <h5>Laravel</h5>
                    </div> */}
                    <div>
                        <img alt="Java" className="icons-skils" src="https://cdn.iconscout.com/icon/free/png-256/free-java-logo-icon-download-in-svg-png-gif-file-formats--programming-language-coding-logos-icons-1720088.png?f=webp"/>
                        <h5>Java</h5>
                    </div>
                    <div>
                        <img alt="Spring Boot" className="icons-skils" src="data:image/png;base64,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" />
                        <h5>Spring Boot</h5>
                    </div>
                    <div>
                        <img alt="mysql" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
                        <h5>MySQL</h5>
                    </div>
                    {/* <div>
                        <img alt="postgresql" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" />
                        <h5>PostgreSQL</h5>
                    </div> */}
                    <div>
                        <img alt="mongodb" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" />
                        <h5>MongodDB</h5>
                    </div>
                </div>
                <h4>
                    <FormattedMessage
                        id='tools'
                        defaultMessage='Tools'
                    />
                </h4>
                <div className="skill">
                    {/* <div>
                        <img alt="figma" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" title="figma" />
                        <h5>Figma</h5>
                    </div> */}
                    {/* <div>
                        <img alt="photoshop" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" title="Photoshop" />
                        <h5>Photoshop</h5>
                    </div> */}
                    <div>
                        <img alt="Visual Studio Code" className="icons-skils" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png" title="Visual Studio Code" />
                        <h5>VS Code</h5>
                    </div>
                    <div>
                        <img alt="Android Studion" className="icons-skils" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Android_Studio_Icon_%282014-2019%29.svg/950px-Android_Studio_Icon_%282014-2019%29.svg.png" title="Android Studio" />
                        <h5>Android Studio</h5>
                    </div>
                    <div>
                        <img alt="Docker" className="icons-skils" src="data:image/png;base64,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" title="Visual Studio Code" />
                        <h5>Docker</h5>
                    </div>
                    <div>
                        <img alt="git" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" title="git" />
                        <h5>Git</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default React.memo(About);
