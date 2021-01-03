import { Card } from './Card';
import React, { useEffect, useState } from 'react';
import '../styles.scss';

export const ListofCards = () => {
  return (
    <>
      <div >
        <div className="list-of-cards">
          <Card
            name="Frederico"
            sex="pes"
            age="3 měsíce"
            race="Kříženec"
            desc="Fanny je moc hodná a mazlivá fenečka. Má ráda lidskou společnost :) 12.12.2016 Fanny porodila 4 štěňátka, která budou k adopci koncem ledna.... 21.1.2017 FANNY I VŠECHNA JEJÍ ŠTĚŇÁTKA MAJÍ NOVÝ DOMOV :) 22.1.2017 FANNY byla vrácena z adopce jelikož se nesnesla s druhým pejskem...hledáme pro ni nový domov, kde bude jako jediný pejsek.... FANNY UŽ MÁ NOVÝ DOMOV :))))"
          />
        </div>
        <button >ZOBRAZIT VŠECHNY MAZLÍKY</button>
      </div>
    </>
  );
};
