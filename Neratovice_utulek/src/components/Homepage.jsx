import React, { useEffect, useState } from 'react';
import { Menu } from './Menu';
import { Footer } from './Footer';
import { ListofCards } from './ListofCards';
import { FrequentedQuestions } from './FrequentedQuestions';
import {Article} from './Article'
import landing from '../assets/landing.jpg'

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
          <img src={landing}></img>
        </div>
      </div>
      <ListofCards/>
      <div>
        <h2>V poslední době se stalo</h2>
        <div>
          <Article/>
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

