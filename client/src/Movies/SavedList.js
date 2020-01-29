import React, { Component, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const SavedList = (props) => {
 
  console.log('savedlist', props);


    return(
      <div className="saved-list">
          <h3>Saved Movies:</h3>
          {/* for each movie, return a link */}
          {/* <NavLink to={`/movies/${movie.id}`} key={movie.id} activeClassName='saved-active'>
            <span className="saved-movie">{movie.title}</span>
          </NavLink> */}
        <div className="home-button"><Link to="/">Home</Link></div>
      </div>
    )
    
}


export default SavedList;
