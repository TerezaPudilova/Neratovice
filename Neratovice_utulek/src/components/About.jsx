import React, { useEffect, useState } from 'react';
import { Article } from './Article';
import { Footer } from './Footer';
import { Menu } from './Menu';
import '../styles.scss';

export const About = () => {
  return (
    <>
    <div className="wrapper">
      <div className="innerwrapper">
      <Menu />
      <div>
        <h2>Dáváme mazlíkům druhou šanci od roku 1999</h2>
        <p>
          Městský útulek Neratovice byl založen 1. listopadu 1999. Zřizovatelem
          je město Neratovice. Odchyt psů provádí Městská policie Neratovice.
          Náš útulek může přijmout pouze psy nalezené v Neratovicích. Dovolujeme
          si též upozornit, že náš útulek nepořádá pouliční sbírky a žádné osoby
          nejsou oprávněné na ulicích vybírat peníze na náš útulek. Psi jsou
          umístěni v karanténních kotcích, celkem jich máme 16, jeden kotec je
          zateplený. Do něj umisťujeme především štěňata a malé psy. Veterinární
          kontroly provádí MVDr. Jitka Bilíková. Jelikož se útulek nachází
          blízko řeky Labe, zasáhly nás povodně v roce 2002 i v roce 2013. I
          přes to byl útulek veterinární správou při kontrolách oceněn známkou
          „Velmi pěkný“. Útulek spolupracuje se školami, školkami i zájmovými
          kroužky z Neratovic a okolí.
        </p>
        <Article/>
        <div>Bankovní účet</div>
      </div>
      <Footer/>
      </div>
      </div>
    </>
  );
};
