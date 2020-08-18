import React, {useState, createContext, useContext} from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Home.css';
import Main from './Main/Main';
import GifItem from '../GifItem/GifItem';


export const SearchUpdateContext = createContext();

export function useSearchUpdate() {
  return useContext(SearchUpdateContext);
};


function Home() {
  const [gifPage, setGifPage] = useState(false);
  const SearchGif = () => {
    setGifPage(!gifPage);
  };
  return (
    <SearchUpdateContext.Provider value={SearchGif}>
      <div className="home">
        { gifPage ? <GifItem />:null }
        <div className="home-page">
          {/* sidebar */}
          <div className="sidebar">
            <Sidebar />
          </div>
          
          {/* maincontent */}
          <div className="main">
            <Main />
          </div>
          {/* feed */}
        </div>
      </div>
    </SearchUpdateContext.Provider>
  );
};



export default Home;