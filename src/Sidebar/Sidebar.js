import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarItem from './SidebarItem';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Link } from 'react-router-dom';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function Sidebar() {
  const currentPath = window.location.pathname;
  return(
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="header">
          <TwitterIcon />
        </div>
      </div>
      <div className="options">
        <SidebarItem currentPath={currentPath} Icon={HomeIcon} itemName="Home"/>
        <SidebarItem currentPath={currentPath} Icon={SearchIcon} itemName="Explore"/>
        <SidebarItem currentPath={currentPath} Icon={NotificationsNoneIcon} itemName="Notifications"/>
        <SidebarItem currentPath={currentPath} Icon={MailOutlineIcon} itemName="Messages"/>
        <SidebarItem currentPath={currentPath} Icon={BookmarkBorderIcon} itemName="Bookmarks"/>
        <SidebarItem currentPath={currentPath} Icon={ListAltIcon} itemName="Lists"/>
        <SidebarItem currentPath={currentPath} Icon={PersonOutlineIcon} itemName="Profile"/>
        <SidebarItem currentPath={currentPath} Icon={MoreHorizIcon} itemName="More"/>
      </div>
      <div className="tweet-button">
        <Link to='/'>
          <div className="add-circle-icon">
            <AddCircleIcon style={{ fontSize: 40 }} />
          </div>
          <span>
            <div>Tweet</div>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;