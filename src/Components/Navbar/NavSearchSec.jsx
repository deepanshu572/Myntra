import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const NavSearchSec = () => {
  // const [query, setQuery] = useState();

  const navigate = useNavigate();

  // const handleKeyDown = (e) => {
  //   if (e.key === "Enter") {
  //     handleSearch();
  //   }
  // };

  const handleSearch = (query) => {
    console.log("Searching for:", query);
    if (query === "") {
      console.log("blank ha bhai");
      query = "AllData";
    }

    navigate(`/Search/${query}`);
  };

  return (
    <div className="search_bar">
      <IoSearch />

      <input
        type="text"
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search for products,brands and more"
      />
    </div>
  );
};

export default NavSearchSec;
