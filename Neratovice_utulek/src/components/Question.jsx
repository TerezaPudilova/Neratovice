import React, { useEffect, useState } from 'react';
import money from '../assets/money.svg'
import '../styles.scss';

export const Question = () => {
  return (
    <>
    <div>
      <div>
        <img src={money} width="64" height="54"></img>
      </div>
      <div>
        <h3>Otázka</h3>
        <p>Text otázky</p>
        <button>Číst více</button>
      </div>
    </div>
    </>
  )
}