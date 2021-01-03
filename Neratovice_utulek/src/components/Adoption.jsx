import React, { useEffect, useState } from 'react';
import { Footer } from './Footer';
import { ListofCards } from './ListofCards';
import { Menu } from './Menu';


export const Adoption = () => {
  return(
    <>
    <div>
      <Menu/>
      <h2>Aktuálně čeká na adopci 12 mazlíků</h2>
      <ListofCards/>
      <Footer/>
    </div>
    </>
  )
}