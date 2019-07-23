// ./src/components/MoviesList.js
import React from 'react';
import { Link } from 'react-router-dom';
 
const MoviesList = ({ movies }) => {
  //debugger
  const renderMovies = Object.keys(movies).map(movieID =>
    <Link key={movieID} to={`/movies/${movieID}`}>{movies[movieID].title}<br></br></Link>
  );
 
  return (
    <div>
      {renderMovies}
    </div>
  );
};
 
export default MoviesList;