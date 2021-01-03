import React, { useEffect, useState } from 'react';

export const Card = (props) => {
  const name = props.name
  const sex = props.sex
  const age = props.age
  const race = props.race
  const desc = props.desc
  const photo = props.photo

  return (
    <>
      <div>
          <img src={photo}></img>
          <h3>{name}</h3>
          <div>
            <div>{sex}</div>
            <div>{age}</div>
            <div>{race}</div>
          </div>
          <div>
            {desc}
          </div>
      </div>
    </>
  )
}

