import { Card } from './Card';
import React, { useEffect, useState } from 'react';
import '../styles.scss';
import { db } from '../db';

export const ListofCards = () => {
  const [pets, setPets] = useState([
    {
      name: "piko",
      sex: "pes",
      age: "3 měsíce",
      race: "Kříženec",
      desc: "Fanny je moc hodná a mazlivá fenečka. Má ráda lidskou společnost :) 12.12.2016 Fanny porodila 4 štěňátka, která budou k adopci koncem ledna.... 21.1.2017 FANNY I VŠECHNA JEJÍ ŠTĚŇÁTKA MAJÍ NOVÝ DOMOV :) 22.1.2017 FANNY byla vrácena z adopce jelikož se nesnesla s druhým pejskem...hledáme pro ni nový domov, kde bude jako jediný pejsek.... FANNY UŽ MÁ NOVÝ DOMOV :))))"
    }
]);

  useEffect(() => {
    db.collection('ListOfPets').onSnapshot((query) => {
      setPets(query.docs.map((doc) => doc.data()))
    })
  }, [])
  /* TODO: 
  1. Napsat metodu renderCard tak, aby vracela komponentu <Card/> a prijimala objekt s jednim zviretem.

  2. V divu list-of-cards zavolat .map na pets a v něm zavolat renderCard :-)
   */
  return (
    <>
      <div className="list-of-cards-wrapper">
        <div className="list-of-cards">
          <Card
            name="mmmm"
            sex="pes"
            age="3 měsíce"
            race="Kříženec"
            desc="Fanny je moc hodná a mazlivá fenečka. Má ráda lidskou společnost :) 12.12.2016 Fanny porodila 4 štěňátka, která budou k adopci koncem ledna.... 21.1.2017 FANNY I VŠECHNA JEJÍ ŠTĚŇÁTKA MAJÍ NOVÝ DOMOV :) 22.1.2017 FANNY byla vrácena z adopce jelikož se nesnesla s druhým pejskem...hledáme pro ni nový domov, kde bude jako jediný pejsek.... FANNY UŽ MÁ NOVÝ DOMOV :))))"
          />
        </div>
        <button className="button button-primary">ZOBRAZIT VŠECHNY MAZLÍKY</button>
      </div>
    </>
  );
};
