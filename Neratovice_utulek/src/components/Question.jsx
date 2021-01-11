import React, { useEffect, useState } from 'react';
import money from '../assets/money.svg'
import '../styles.scss';

export const Question = (props) => {

  const headline = props.headline
  const content = props.content 

  return (
    <>
    <div>
      <div>
        <img src={money} width="64" height="54"></img>
      </div>
      <div>
        <h3>{headline}</h3>
        <p>{content}</p>
        <button>Číst více</button>
      </div>
    </div>
    </>
  )
}