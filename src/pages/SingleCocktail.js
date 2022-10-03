import React from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = React.useState(true);
  const [drink, setDrink] = React.useState([]);

  const fetchData = () => {
    axios
      .get(`${url}${id}`)
      .then((resp) => {
        const data = resp.data.drinks[0];
        if (resp.data.drinks) {
          const {
            strDrink: name,
            strCategory: category,
            strGlass: glass,
            strAlcoholic: info,
            strInstructions: instructions,
            strDrinkThumb: drinkImg,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5
          } = data;
          const ingridients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5
          ];
          const newDrink = {
            name,
            category,
            glass,
            info,
            instructions,
            drinkImg,
            ingridients
          };
          setDrink(newDrink);
        } else {
          setDrink({});
        }
      })
      .catch((err) => console.log(err))
      .then(() => setIsLoading(false));
  };

  React.useEffect(() => {
    fetchData();
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  if (!drink) {
    return <h2 className="section-title">no cocktail to display</h2>;
  }

  const { name, drinkImg, category, glass, instructions, ingridients } = drink;
  return (
    <section>
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={drinkImg} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category:</span>
            {category}
          </p>
          <p>
            <span className="drink-data">glass:</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instructions:</span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">ingridients:</span>
            {ingridients.map((item, idx) => {
              return item ? <span key={idx}>{item}</span> : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
