import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        const drink = data.drinks[0];
        const ingredients = [];

        for (const [key, value] of Object.entries(drink))
          if (key.slice(0, -1) === "strIngredient")
            ingredients.push(value);

        drink
          ? setCocktail({
              name: drink.strDrink,
              image: drink.strDrinkThumb,
              info: drink.strAlcoholic,
              category: drink.strCategory,
              glass: drink.strGlass,
              instructions: drink.strInstructions,
              ingredient: ingredients,
            })
          : setCocktail(null);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getCocktail();
  }, [id]);

  return loading ? (
    <Loading />
  ) : !cocktail ? (
    <h2 className="section-title">no cocktail to display</h2>
  ) : (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <h2 className="section-title">{cocktail.name}</h2>
      <div className="drink">
        <img src={cocktail.image} alt={cocktail.name} />
        <div className="drink-info">
          {Object.entries(cocktail).map(([key, value]) => {
            if (key === "image") return null;
            return (
              <p>
                <span className="drink-data">{key} :</span>
                {key !== "ingredient"
                  ? value
                  : value.map((item, index) => {
                      return item ? (
                        <span key={index}>{item}</span>
                      ) : null;
                    })}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
