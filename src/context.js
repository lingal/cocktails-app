import React, { useState, useContext, useEffect, useCallback } from 'react';
import axios from 'axios';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchCocktail, setSearchCocktail] = useState('a');

  const fetchData = useCallback(() => {
    axios
      .get(`${url}${searchCocktail}`)
      .then((resp) => {
        const { drinks } = resp.data;

        if (drinks) {
          const newDrinks = drinks.map((drink) => {
            const {
              idDrink: id,
              strDrink: name,
              strGlass: glass,
              strAlcoholic: info,
              strDrinkThumb: drinkImg
            } = drink;
            return { id, drinkImg, name, info, glass };
          });

          setDrinks(newDrinks);
        } else {
          setDrinks([]);
        }
      })
      .catch((err) => console.log(err))
      .then(() => setIsLoading(false));
  }, [searchCocktail]);

  useEffect(() => {
    fetchData();
  }, [searchCocktail, fetchData]);

  return (
    <AppContext.Provider value={{ drinks, isLoading, setSearchCocktail }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
