import { Card } from './Card';
import React from 'react';
import '../styles.scss';


export const ListofCards = (props) => {

const pets = props.pets
  
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
      </div>
    </>
  );
};
