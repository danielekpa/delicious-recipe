import {GiKnifeFork} from "react-icons/gi";
import {BrowserRouter, Link} from "react-router-dom";
import styled from "styled-components";
import Category from "./components/Category";
import Search from "./components/Search";
import Pages from "./pages/Pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>Favorite Recipe</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2.4rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

const Nav = styled.nav`
  padding: 6.4rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 3.2rem;
  }
`;

export default App;
