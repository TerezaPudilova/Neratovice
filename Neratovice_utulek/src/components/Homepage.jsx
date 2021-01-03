import React, { useEffect, useState } from 'react';
import { Menu } from './Menu';
import { Footer } from './Footer';
import { ListofCards } from './ListofCards';
import { FrequentedQuestions } from './FrequentedQuestions';

export const Homepage = (props) => {
  const article = props.article;
  return (
    <>
      <Menu/>
      <div>
        <div>
          <h1>Pomohli jsme najít domov už 50 mazlíkům</h1>
          <div>
            <button>K ADOPCI</button>
            <button>O NÁS</button>
          </div>
        </div>
        <div>
          <img></img>
        </div>
      </div>
      <ListofCards/>
      <div>
        <h2>V poslední době se stalo</h2>
        <div>
          <div>Článek</div>
        </div>
      </div>
      <div>
        <h2>Nejčastější otázky</h2>
        <FrequentedQuestions/>
      </div>
      <Footer/>
    </>
  );
};

