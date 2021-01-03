import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import '../styles.scss'

export const Menu = () => {
  return (
    <>
      <div className="menu">
        <div>
          <Link to="/"> <img src={logo} alt="logoNeratovice"></img></Link>
        </div>
        <div>
          <nav >
           <Link className="menu-link" to="/k-adopci">K adopci</Link>
           <Link className="menu-link" to="/nasli-domov">Našli domov</Link>
           <Link className="menu-link" to="/o-nas">O nás</Link>
           <Link className="menu-link" to="/pomohli-nam">Pomohli nám</Link>
          </nav>
        </div>
      </div>
    </>
  );
};


