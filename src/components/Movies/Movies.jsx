import React from 'react';
import PropTypes, { object } from 'prop-types';

import './Movies.css';
import MoviePreview from '../MoviePreview/MoviePreview';

const Movies = ({ movies }) => {
    let moviesList;
    if (movies) {
        moviesList = movies.map(movie => {
            return (
                <li className="col-md-3" key={movie.imdbID}>
                    <MoviePreview movie={movie} />
                </li>
            );
        });
    }
    return (
        <div className="container">
            {movies ? (
                <ul className="movie-list row">{moviesList}</ul>
            ) : (
                <div>
                    <h4>Nothing to preview.</h4>
                    <h4>Enter film title in input field above</h4>
                    <h5>(more then 3 chars)</h5>
                </div>
            )}
        </div>
    );
};

Movies.propTypes = {
    movies: PropTypes.arrayOf(object).isRequired
};

export default Movies;
