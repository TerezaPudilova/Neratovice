import React, { useEffect, useState } from 'react';
import { Footer } from './Footer';
import { ListofCards } from './ListofCards';
import { Menu } from './Menu';
import '../styles.scss';

export const Adopted = () => {
  return (
    <>
      <div className="wrapper">
        <Menu />
        <h2>Pomohli jsme najít domov 93 mazlíkům</h2>
        <ListofCards />
        <Footer />
      </div>
    </>
  );
};
