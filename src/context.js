import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
// import { useCallback } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = () => {
    axios
      .get(url)
      .then((resp) => {
        const { drinks } = resp.data;
        setDrinks(drinks);
      })
      .catch((err) => console.log(err))
      .then(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
