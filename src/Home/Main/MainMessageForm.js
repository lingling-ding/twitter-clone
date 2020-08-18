import React, { useState } from 'react';
import ReplyLimit from './ReplyLimit';
import './MainMessageForm.css';
import { Button } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import GifIcon from '@material-ui/icons/Gif';
import BarChartIcon from '@material-ui/icons/BarChart';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { useSearchUpdate } from '../Home';

const MainMessageForm = () => {
  const searchGif = useSearchUpdate();

  const [replyLimit, setReplyLimit] = useState();

  const ShowReplyLimit = () => {
    setReplyLimit(ReplyLimit);
  };

  return(
    <div className="main-message-form">
      <form>
        <input className="main-message-text" type='text' name="message" placeholder="What's happening?" onClick={ShowReplyLimit} />
        {replyLimit}
        <div className="form-bottom">
          <div className="additional-message">
            <div className="icon">
              <ImageIcon />
            </div>
            <div className="icon" onClick={searchGif}>
              <GifIcon />  
            </div>
            <div className="icon">
              <BarChartIcon />
            </div>
            <div className="icon">
              <SentimentVerySatisfiedIcon />
            </div>
            <div className="icon">
              <ScheduleIcon />
            </div>
          </div>
          <div className="form-button"><Button><span>Tweet</span></Button></div>
        </div>
      </form>
    </div>
  );
};

export default MainMessageForm;