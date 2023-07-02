import React from 'react';
import '../Styles/Home.css'

export const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container-footer">
                    <p>
                        Contacto:+569 999 999
                    </p>
                    <p>
                        Hecho por Valentina Madrid
                    </p>
                    <a>
                        <i className="bi bi-house-door"></i>
                    </a>
                    <i className="bi bi-instagram"></i>
                </div>
                <div className='container-icons'>
                </div>
            </footer>
        </div>
    )
}
