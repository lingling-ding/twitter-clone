import React from 'react';
import { Select,MenuItem } from '@material-ui/core';
import PublicIcon from '@material-ui/icons/Public';
import PeopleIcon from '@material-ui/icons/People';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import './ReplyLimit.css';

const ReplyLimit = () => {
  return(
    <div className="reply-limit">
      <Select name="replylimit" defaultValue="everyone">
        <MenuItem value="everyone">
          <div className="reply-limit-item">
            <div className="reply-limit-icon">
              <PublicIcon />
            </div>
            <div className="reply-limit-text">
              <label>Everyone can reply</label>
            </div>
          </div>
        </MenuItem>
        <MenuItem value="followed">
          <div className="reply-limit-item">
            <div className="reply-limit-icon">
              <PeopleIcon />
            </div>
            <div className="reply-limit-text">
              <label>People you fellow can reply</label>
            </div>
          </div>
        </MenuItem>
        <MenuItem value="mention">
          <div className="reply-limit-item">
            <div className="reply-limit-icon">
              <AlternateEmailIcon />
            </div>
            <div className="reply-limit-text">
              <label>Only people you mention can reply</label>
            </div>
          </div>
        </MenuItem>
      </Select>
    </div>
  );
};

export default ReplyLimit;