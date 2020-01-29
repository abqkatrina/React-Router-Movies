import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';


const App = () => {

  // const [savedList, setSavedList] = useState( [] );



  return (
    <div>
      <SavedList component={SavedList} />
      <Route exact path='/' component={MovieList} />
      <Route path='/movies/:id' 
        render={(props) => {
          return(<Movie {...props}/> )
        }}
      />
    </div>
  );
};

export default App;
