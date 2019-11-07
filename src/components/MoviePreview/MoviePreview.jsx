import React from 'react';
import PropTypes from 'prop-types';

import './MoviePreview.css';
import 'animate.css';

import { Link } from 'react-router-dom';

const MoviePreview = ({ movie }) => {
    function getSlugFromTitle(title) {
        return title.replace(/\s/gi, '_');
    }

    return (
        <div>
            {movie.Poster !== 'N/A' && (
                <div className="movie-preview-wrap animated fadeIn">
                    <Link to={`/movie/${getSlugFromTitle(movie.Title)}`} key={movie.imdbID}>
                        <img className="movie-poster img-thumbnail" src={movie.Poster} alt="" />
                        <h3 className="movie-title">{movie.Title}</h3>
                        <h4 className="movie-year">{movie.Year}</h4>
                    </Link>
                </div>
            )}
        </div>
    );
};

MoviePreview.propTypes = {
    movie: PropTypes.object.isRequired
};

export default MoviePreview;
