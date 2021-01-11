import { Card } from './Card';
import React, { useEffect, useState } from 'react';
import '../styles.scss';
import { db } from '../db';

export const ListofCards = () => {
  const [pets, setPets] = useState([{}]);


  useEffect(() => {
    db.collection('ListOfPets').onSnapshot((query) => {
      setPets(query.docs.map((doc) => doc.data()))
    })
  }, [])

const renderCard = (a) => {
  return (<Card
    name={a.name}
    sex={a.sex}
    age={a.age}
    race={a.race}
    desc={a.desc}
  />)
}

  return (
    <>
      <div className="list-of-cards-wrapper">
        <div className="list-of-cards">
          {pets.map((pet) => (renderCard(pet)))}
        </div>
        <button className="button button-primary">ZOBRAZIT VŠECHNY MAZLÍKY</button>
      </div>
    </>
  );
};
