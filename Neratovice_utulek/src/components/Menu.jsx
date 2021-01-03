import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <>
      <div>
        <div>
          <Link to="/"> <img src={logo} alt="logoNeratovice"></img></Link>
        </div>
        <div>
          <nav>
           <Link to="/k-adopci">K adopci</Link>
           <Link to="/nasli-domov">Našli domov</Link>
           <Link to="/o-nas">O nás</Link>
           <Link to="/pomohli-nam">Pomohli nám</Link>
          </nav>
        </div>
      </div>
    </>
  );
};


