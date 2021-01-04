import React, { useEffect, useState } from 'react';
import { Footer } from './Footer';
import { ListofCards } from './ListofCards';
import { Menu } from './Menu';
import '../styles.scss';

export const Adoption = () => {
  return (
    <>
      <div className="wrapper">
        <div className="innerwrapper">
          <Menu />
          <h2>Aktuálně čeká na adopci 12 mazlíků</h2>
          <ListofCards />
          <Footer />
        </div>
      </div>
    </>
  );
};
