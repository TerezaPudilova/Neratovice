import React, { useEffect, useState } from 'react';
import { Menu } from 'Menu.jsx';
import { Footer } from 'Footer.jsx';
import { ListofCards } from 'ListofCards.jsx';
import { FrequentedQuestions } from 'FrequentedQuestion.jsx';

const Homepage = (props) => {
  const article = props.article;
  return (
    <>
      <div>{Menu}</div>
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
      <div>{ListofCards}</div>
      <div>
        <h2>V poslední době se stalo</h2>
        <div>
          <div>{article}</div>
        </div>
      </div>
      <div>
        <h2>Nejčastější otázky</h2>
        <div>{FrequentedQuestions}</div>
      </div>
      <div>{Footer}</div>
    </>
  );
};

export default Homepage;
