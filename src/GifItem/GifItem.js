import React from 'react';
import "./GifItem.css";
import SearchGif from './SearchGif';
import SearchHeader from './SearchHeader';


const GifItem = () => {
  
  return(
    <div className='gif-item'>
      <div className="box">
        <SearchHeader />
      </div>
    </div>
  );
};

export default GifItem;