import React from 'react';
import './Footer.css';

/* Multi idioma */
import {FormattedMessage} from 'react-intl';


const Footer = () =>{
    // Fecha
    let fecha = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="site-footer">
                <div className="copyright">
                    <p>
                        <FormattedMessage
                            id='footer-info'
                            defaultMessage='Created by Aaryan Patel'
                        />
                    </p>
                    <p>&copy; {fecha}. All Rights Reserved.</p>
                </div>
                <div className="redes-sociales">
                    <a href="https://www.linkedin.com/in/aaryanpatel33" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/Aaryan33" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    {/* <a href="https://www.instagram.com/nahuelcarrizolc/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a> */}
                    <a href="https://api.whatsapp.com/send?phone=6359652582" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
                </div>
            </div>
        </footer>
    )
};

export default React.memo(Footer);