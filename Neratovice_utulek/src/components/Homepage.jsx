import React, { useEffect, useState } from 'react';
import { Menu } from './Menu';
import { Footer } from './Footer';
import { ListofCards } from './ListofCards';
import { FrequentedQuestions } from './FrequentedQuestions';
import landing from '../assets/landing.jpg';
import arrowLeft from '../assets/arrowLeft.svg';
import arrowRight from '../assets/arrowRight.svg';
import { Link } from 'react-router-dom';
import '../styles.scss';
import { ListofArticles } from './ListofArticles';
import { db } from '../db';

export const Homepage = () => {
const [adopted, setAdopted] = useState([]);
const [pets, setPets] = useState([{}]);

useEffect(() => {
  db.collection('ListOfAdoptedPets').onSnapshot((query) => {
    setAdopted(query.docs.map((doc) => doc.data()))
  });
  db.collection('ListOfPets').onSnapshot((query) => {
    setPets(query.docs.map((doc) => doc.data()))
  })
 }, [])

  return (
    <>
      <div className="wrapper">
        <div className="innerwrapper">
          <Menu />
          <div className="landing">
            <div className="landing-text">
              <h1>Pomohli jsme najít domov už {adopted.length} mazlíkům</h1>
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
            <ListofCards 
            pets = {pets}
            />
          </div>
          <div className="middle">
            <h2>V poslední době se stalo</h2>
            <ListofArticles />
            <div>
              <button className="button button-primary">
                <img src={arrowLeft}></img>
              </button>
              <button className="button button-primary">
              <img src={arrowRight}></img>
              </button>
            </div>
          </div>
          <div className="middle">
            <h2>Nejčastější otázky</h2>
            <FrequentedQuestions />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};
