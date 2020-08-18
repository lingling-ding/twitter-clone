import React, { useState, useEffect } from 'react';
import Giphy from "react-hooks-giphy";
import './SearchGif.css';


const SearchGif = ({tag}) => {
  return(
    <div className="search-gif">
      <Giphy tag={tag} />
      <Giphy tag={tag} />
      <Giphy tag={tag} />
      <Giphy tag={tag} />
      <Giphy tag={tag} />
      <Giphy tag={tag} />
      <Giphy tag={tag} />
      <Giphy tag={tag} />
    </div>
  );
};

export default SearchGif;