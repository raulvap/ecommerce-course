import React from "react";
import { withRouter } from "react-router-dom";
//withReouter: High Order component, lesson 78

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
   //Match configured lesson 78
   <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
      //  Match configured lesson 78
   >
      <div
         className="background-image"
         style={{
            backgroundImage: `url(${imageUrl})`,
         }}
      />
      <div className="content">
         <h1 className="title">{title.toUpperCase()}</h1>
         <span className="subtitle">SHOP NOW</span>
      </div>
   </div>
);

export default withRouter(MenuItem);
