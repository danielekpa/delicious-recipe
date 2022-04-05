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
        // basename="/delicious-recipe"
      >
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cuisine/:type" element={<Cuisine />} />
        <Route exact path="/searched/:search" element={<Searched />} />
        <Route exact path="/recipe/:id" element={<RecipeDetails />} />
        {/* <Route path="*" element={<Redirect to="/*" replace />} /> */}
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
