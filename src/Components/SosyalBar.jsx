import React from 'react';
import "../sass/SosyalBar.css";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function SosyalBar(){
    return(
        <div className="wrapper">
            <div className="icon facebook">
                <div className="tooltip">Facebook</div>
                <span><FontAwesomeIcon icon={['fab', 'fa-facebook-f']} /></span>
            </div>
            <div className="icon twitter">
                <div className="tooltip">Twitter</div>
                <span><i className="fab fa-twitter"></i></span>
            </div>
            <div className="icon instagram">
                <div className="tooltip">Instagram</div>
                <span><i className="fab fa-instagram"></i></span>
            </div>
            <div className="icon github">
                <div className="tooltip">Github</div>
                <span><i className="fab fa-github"></i></span>
            </div>
            <div className="icon youtube">
                <div className="tooltip">Youtube</div>
                <span><i className="fab fa-youtube"></i></span>
            </div>
            <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
        </div>
    )
}

export default SosyalBar ;