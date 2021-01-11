import React, { useEffect, useState } from 'react';
import { Footer } from './Footer';
import { ListofCards } from './ListofCards';
import { Menu } from './Menu';
import '../styles.scss';
import { db } from '../db';

export const Adopted = () => {
  const [adopted, setAdopted] = useState([]);

useEffect(() => {
  db.collection('ListOfAdoptedPets').onSnapshot((query) => {
    setAdopted(query.docs.map((doc) => doc.data()))
  })
 }, [])

  return (
    <>
      <div className="wrapper">
        <div className="innerwrapper">
          <Menu />
          <h2>Pomohli jsme najít domov {adopted.length} mazlíkům</h2>
          <ListofCards 
          pets = {adopted}
          />
          <Footer />
        </div>
      </div>
    </>
  );
};
