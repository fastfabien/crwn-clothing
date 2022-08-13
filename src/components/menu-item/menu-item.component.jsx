import React from "react";
import { withRouter } from "../utility/withRouter.utilities";
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, router, linkUrl }) => {
  return (
    <div className={`${size} menu-item`} onClick={() => router.navigate(`${router.location.pathname}${linkUrl}`)}>
      <div style={{ backgroundImage: `url(${imageUrl})` }} className="background-image"  />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span>SHOP NOW</span>
      </div>
    </div>
  )
};

export default withRouter(MenuItem);