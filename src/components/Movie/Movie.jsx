import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faEmptyStar } from '@fortawesome/free-regular-svg-icons';

import './Movie.css';

const Movie = ({ movie }) => {
    function getStars(imdbRating) {
        let markUp = [];

        let index = 0;

        const filledStarCount = Math.round(Math.floor(imdbRating) / 2);
        const emptyStarCount = 5 - filledStarCount;

        console.log(imdbRating);

        for (let i = 0; i < filledStarCount; i++) {
            markUp.push(
                <li key={index++}>
                    <FontAwesomeIcon className="star-icon" icon={faStar} />
                </li>
            );
        }

        for (let i = 0; i < emptyStarCount; i++) {
            markUp.push(
                <li key={index++}>
                    <FontAwesomeIcon className="star-icon" icon={faEmptyStar} />
                </li>
            );
        }

        return markUp;
    }

    return (
        <div className="movie_card" id="bright">
            <div className="info_section">
                <div className="movie_header">
                    <img alt="N/A" className="locandina" src={movie.Poster} />
                    <h1>{movie.Title}</h1>
                    <h4>
                        {movie.Year}, {movie.Director}
                    </h4>
                    <span className="minutes">{movie.Runtime}</span>
                    <p className="type">{movie.Genre}</p>
                </div>
                <div className="movie_desc">
                    <p className="text">{movie.Plot}</p>
                </div>
                <div className="movie-rating">
                    <ul className="movie-rating-stars">{getStars(movie.imdbRating)}</ul>
                </div>
            </div>
            <div style={{ backgroundImage: `url(${movie.Poster})` }} className="blur_back bright_back"></div>
        </div>
    );
};

Movie.propTypes = {
    movie: PropTypes.object.isRequired
};

export default Movie;
