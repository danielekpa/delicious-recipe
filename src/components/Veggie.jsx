import {useEffect, useState} from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import {Link} from "react-router-dom";

function Veggie() {
  const [veggies, setVeggies] = useState([]);
  // Runs this asa popular component gets mounted
  useEffect(() => getVeggies(), []);

  const getVeggies = async () => {
    const checkLocaDB = localStorage.getItem("veggies");

    if (checkLocaDB) setVeggies(JSON.parse(checkLocaDB));
    else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=16&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("veggies", JSON.stringify(data.recipes));
      setVeggies(data.recipes);
      console.log(data.recipes);
    }
  };
  return (
    <div>
      <RecipeWrapper>
        <h3>Our Vegetarian Picks</h3>

        <Splide
          options={{
            // rewind: true,
            // type: "loop",
            perPage: 3,
            perMove: 1,
            gap: "5rem",
            arrows: false,
            pagination: false,
            drag: "free",
            waitForTransition: true,
            wheel: true,
            // releaseWheel: true,
          }}
        >
          {veggies.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </RecipeWrapper>
    </div>
  );
}

const RecipeWrapper = styled.div`
  margin: 4rem 0rem;
`;
const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 1000;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    color: #fff;
    width: 100%;
    text-align: center;
    font-weight: 600;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 99;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Veggie;
