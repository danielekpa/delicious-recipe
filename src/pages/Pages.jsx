import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import {Route, Routes, useLocation} from "react-router-dom";
import Searched from "./Searched";
import RecipeDetails from "./RecipeDetails";
import {AnimatePresence} from "framer-motion";

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes
        Location={location}
        key={location.pathname}
        basename="/delicious-recipe"
      >
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
