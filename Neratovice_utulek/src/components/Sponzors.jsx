import React, { useEffect, useState } from 'react';
import { Article } from './Article';
import { Footer } from './Footer';

export const Sponzors = () => {
  return (
  <>
  <div>
    <h2>Děkujeme všem, kteří nám podali pomocnou ruku</h2>
    <Article/>
    <div>Bankovní účet</div>
    <Footer/>
  </div>
  </>
  );
};
