import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import './Main.css';
import { Avatar } from '@material-ui/core';
import MainMessageForm from './MainMessageForm';


const Main = () => {
  
  return (
    <div className="main">
      <div className="main-header">
        <div className="header-name">
          <span>Home</span>
        </div>
        <div className="tip">
          <InfoIcon style={{ fontSize: 35 }} />
        </div>
      </div>
      <div className="main-message">
        <div className="main-message-avatar">
          <Avatar src="https://www.redwolf.in/image/catalog/stickers/disney-donald-duck-face-sticker-india.jpg" />
        </div>
        <MainMessageForm />
      </div>
    </div>
  );
}

export default Main;