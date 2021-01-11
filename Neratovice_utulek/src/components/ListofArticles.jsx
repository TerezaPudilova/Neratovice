import React, { useEffect, useState } from 'react';
import '../styles.scss';
import { db } from '../db';
import { Article } from './Article';

export const ListofArticles = () => {
  const [articles, setArticles] = useState([{}]);

  useEffect(() => {
    db.collection('ListOfArticles').onSnapshot((query) => {
      setArticles(query.docs.map((doc) => doc.data()));
    });
  }, []);

  const renderArticle = (a) => {
    return <Article date={a.date} text={a.text} />;
  };

  return (
    <>
      <div>{articles.map((article) => renderArticle(article))}</div>
    </>
  );
};
