import React from 'react';
import './style.css';

import facebook from '../../assets/images/facebook-1.png'

function Header() {
  return (
    <>
      <header>
        <div>
          <nav>
            <a href="http://">
              <img src={facebook} alt=""/>
            </a>
            <a href="http://">
              Meu Perfil
            </a>
        </nav>
        </div>
      </header>
    </>
  );
}

export default Header
