import React from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const CocktailList = () => {
  const { drinks, isLoading } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }

  if (drinks.length < 1) {
    return <h2 className="section-title">no match was found</h2>;
  }

  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {drinks.map((drink) => {
          return <Cocktail key={drink.id} {...drink} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
