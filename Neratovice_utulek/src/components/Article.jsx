import React, { useEffect, useState } from 'react';
import '../styles.scss';

export const Article = (props) => {

const date = props.date
const text = props.text

  return (
    <>
    <div className="article">
      <h5>{date}</h5>
      <div>{text}</div>
    </div>
    </>
  )
}