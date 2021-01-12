import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.scss';

export const Footer = () => {
  return (
    <>
      <div>
        <h2>Přijďte na návštěvu</h2>
        <div className="basic-info">
          <div>
            <p>Jedlová 326, 277 11 Neratovice</p>
            <p>
              <strong>Návštěvní dny </strong><br /> Po - Čt od 15:00 do 17:00 <br />Pá od 13:00 do 15:00 sudá
              So od 9:00 do 11:00
            </p>
            <p>
              <strong>Kontakt</strong> <br />Lucie Červová <br />724 836 514 <br />
              <Link className="mail" href="mailto:luciecervova@seznam.cz">luciecervova@seznam.cz</Link></p>
          </div>
          <div>TODO-Mapa</div>
        </div>
        <div className="credit">2020-Vytvořeno s láskou @TerezaPudilová</div>
      </div>
    </>
  );
};
