import React, { useEffect, useState } from 'react';
import { Menu } from './Menu';
import { Footer } from './Footer';
import { ListofCards } from './ListofCards';
import { FrequentedQuestions } from './FrequentedQuestions';
import landing from '../assets/landing.jpg';
import { Link } from 'react-router-dom';
import '../styles.scss';
import { ListofArticles } from './ListofArticles';

export const Homepage = () => {
  return (
    <>
      <div className="wrapper">
        <div className="innerwrapper">
          <Menu />
          <div className="landing">
            <div className="landing-text">
              <h1>Pomohli jsme najít domov už 50 mazlíkům</h1>
              <div>
                <Link to="/k-adopci">
                  <button className="button button-primary">K ADOPCI</button>
                </Link>

                <Link to="/o-nas">
                  <button className="button button-secondary">O NÁS</button>
                </Link>
              </div>
            </div>
            <div>
              <img src={landing} width="500" height="500"></img>
            </div>
          </div>
          <div>
            <h2>Aktuálně čeká na adopci 12 mazlíků</h2>
            <ListofCards />
          </div>
          <div>
            <h2>V poslední době se stalo</h2>
            <ListofArticles />
          </div>
          <div>
            <h2>Nejčastější otázky</h2>
            <FrequentedQuestions />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};
