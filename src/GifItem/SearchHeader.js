import React, { useState, createContext, useContext } from 'react';
import InputBase from '@material-ui/core/InputBase';
import "./GifItem.css";
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import SearchGif from './SearchGif';
import { useSearchUpdate } from '../Home/Home';
import './SearchHeader.css'



const SearchHeader = () => {
  const searchGif = useSearchUpdate();
  const [tag, setTag] = useState('happy');
  const tagHandler = (e) => {
    setTag(e.target.value);
  };
  return(
    <div class="box">
      <div className="search-header">
        <div className="close-icon">
        <CloseIcon onClick={searchGif} />
        </div>
        <div className="search">
          <div className="search-icon">
            <SearchIcon />
          </div>
          <InputBase onChange={tagHandler} placeholder="Search…" autoFocus />
        </div>
      </div>
      <div className="search-gif">
        <SearchGif tag={tag} />
      </div>
      
    </div>
  );
};

export default SearchHeader;