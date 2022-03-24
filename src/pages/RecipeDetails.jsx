import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import styled from "styled-components";

function RecipeDetails() {
  let params = useParams();
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [activeTab, setActiveTab] = useState("instructions");

  useEffect(() => {
    fetchRecipeDetails(params.id);
    console.log(params.id);
  }, [params.id]);

  useEffect(() => {
    setActiveTab("instructions");
  }, []);

  const fetchRecipeDetails = async (id) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailedData = await data.json();
    setRecipeDetails(detailedData);
    console.log(detailedData);
  };

  return (
    <DetailWrapper>
      <div>
        <h2>{recipeDetails.title}</h2>
        <img src={recipeDetails.image} alt={recipeDetails.title} />
      </div>

      <Info>
        <ButtonDiv>
          <Button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </Button>
          <Button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </Button>
        </ButtonDiv>
        {activeTab === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{__html: recipeDetails.summary}}></h3>
            <h3
              dangerouslySetInnerHTML={{__html: recipeDetails.instructions}}
            ></h3>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {recipeDetails.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin: 16rem 0 8rem;
  display: flex;
  gap: 16rem;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
    border: none;
  }
  h2 {
    margin-bottom: 3.6rem;
  }
  ul {
    margin-top: 2rem;
  }
  li {
    font-size: 1.92rem;
    line-height: 4rem;
  }
`;

const Button = styled.button`
  padding: 1.6rem 3.2rem;
  color: #313131;
  background: #fff;
  border: 0.2rem solid #000;
  font-weight: 600;
`;

const Info = styled.div``;

const ButtonDiv = styled.div`
  display: flex;
  gap: 3.2rem;
`;
export default RecipeDetails;
