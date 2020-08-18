import React from 'react';
import './SidebarItem.css';
import { Link } from 'react-router-dom';

function SidebarItem({currentPath, Icon, itemName}) {
  const active = currentPath == `/${itemName.toLowerCase()}`;
  return(
    <div className="sidebar-item">
      <Link to={`/${itemName.toLowerCase()}`} className={active && 'sidebar-item-active'}>
        <Icon />
        <div className="item-name">
          {itemName}
        </div>
      </Link>
    </div>
  );
};
export default SidebarItem;