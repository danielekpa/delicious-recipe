import React, {useState} from "react";
import {FaSearch} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const searchSubMitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + searchInput);
  };

  return (
    <FormStyle onSubmit={searchSubMitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          value={searchInput}
        />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 0 20rem;
  div {
    position: relative;
    width: 100%;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 3rem;
    color: #fff;
    padding: 1.6rem 4.8rem;
    border: none;
    outline: none;
    border-radius: 1.6rem;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(100%, -50%);
    color: #fff;
  }
`;

export default Search;
