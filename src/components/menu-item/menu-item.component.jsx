import React from 'react';
import { withRouter } from 'react-router-dom';  //this is higher order component which is a function takes an component as a argument and returns modified component
import './menu-item.styles.scss';


const MenuItem = ({ title, imageUrl, size, history, linkurl, match }) => (
    
    <div className={`${size} menu-item`}
     onClick={() => history.push(`${match.url}${linkurl}`)} > {/*here we are passing the props of history and linkurl to naviage to corresponding page */}
        <div className="background-image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }} />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);