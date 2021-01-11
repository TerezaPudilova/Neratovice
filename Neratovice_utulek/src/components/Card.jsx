import React, { useEffect, useState } from 'react';
import pes from '../assets/pes.jpg';
import sex1 from '../assets/sex1.svg';
import race1 from '../assets/race1.svg';
import age1 from '../assets/age1.svg';
import '../styles.scss';


export const Card = (props) => {

  const name = props.name
  const sex = props.sex;
  const age = props.age;
  const race = props.race;
  const desc = props.desc;
  const photo = props.photo;

  return (
    <>
      <div className="card">
        <img src={pes} width="400" height="400"></img>
        <h2>{name}</h2>
        <div>
          <div>
            <img src={sex1}></img>
            {sex}
          </div>
          <div>
            <img src={age1}></img>
            {age}
          </div>
          <div>
            <img src={race1}></img>
            {race}
          </div>
        </div>
        <p>{desc}</p>
      </div>
    </>
  );
};
