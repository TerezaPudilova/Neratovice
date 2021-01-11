import React, { useEffect, useState } from 'react';
import { Question } from './Question';
import '../styles.scss';
import { db } from '../db';

export const FrequentedQuestions = () => {
 const [questions, setQuestions] = useState([{}]);

 useEffect(() => {
  db.collection('ListOfQuestiones').onSnapshot((query) => {
    setQuestions(query.docs.map((doc) => doc.data()))
  })
 }, [])

const renderQuestion = (a) => {
  return(
    <Question
    headline = {a.headline}
    content = {a.content}
    />
  )
}

  return (
    <>
      <div>
         {questions.map((question) => (renderQuestion(question)))}
      </div>
    </>
  )
}
