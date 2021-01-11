import React, { useEffect, useState } from 'react';
import { Article } from './Article';
import { Footer } from './Footer';
import { ListofArticles } from './ListofArticles';
import { Menu } from './Menu';

export const Sponzors = () => {
  return (
    <>
      <div className="wrapper">
        <div className="innerwrapper">
          <Menu />
          <h2>Děkujeme všem, kteří nám podali pomocnou ruku</h2>
          <ListofArticles />
          <div>Bankovní účet</div>
          <Footer />
        </div>
      </div>
    </>
  );
};
