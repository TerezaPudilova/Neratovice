import React, { useEffect, useState } from 'react';
import { Footer } from './Footer';
import { ListofCards } from './ListofCards';
import { Menu } from './Menu';

export const Adopted = () => {
  return (
    <>
      <Menu />
      <h2>Pomohli jsme najít domov 93 mazlíkům</h2>
      <ListofCards />
      <Footer />
    </>
  );
};
