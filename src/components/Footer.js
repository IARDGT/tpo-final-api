import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
      <footer>
        <hr className="mt-5 mb-4" />
        <div class="container mx-auto">
          <div class="row">
            <div class="col d-flex justify-content-center">
              <a href="/">
                <img src={ require('../assets/logo.png') } alt="Logo" width="30" height="24"></img>
              </a>
            </div>
            <div class="col-8 d-flex justify-content-center">
              <ul class="nav">
                <li class="nav-item"><a href="#" class="nav-link px-2">Inicio</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2">¿Quienes Somos?</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2">Encontrá tu clase</a></li>
              </ul>
            </div>
            <div class="col d-flex justify-content-center">
              <ul class="nav">
              <li class="nav-item">
                    <a href="#" class="btn btn-outline-dark btn-circle social-fb">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="btn btn-outline-dark btn-circle social-ig">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="btn btn-outline-dark btn-circle social-tw">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
export default Footer;