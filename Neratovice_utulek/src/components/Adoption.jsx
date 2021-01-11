import React, { useEffect, useState } from 'react';
import { Footer } from './Footer';
import { ListofCards } from './ListofCards';
import { Menu } from './Menu';
import '../styles.scss';
import { db } from '../db';

export const Adoption = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    db.collection('ListOfPets').onSnapshot((query) => {
      setPets(query.docs.map((doc) => doc.data()))
    })
   }, [])
  return (
    <>
      <div className="wrapper">
        <div className="innerwrapper">
          <Menu />
          <h2>Aktuálně čeká na adopci {pets.length} mazlíků</h2>
          <ListofCards
          pets = {pets}
          />
          <Footer />
        </div>
      </div>
    </>
  );
};
