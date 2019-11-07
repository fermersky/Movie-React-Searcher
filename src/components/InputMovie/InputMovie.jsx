import React from 'react';
import './InputMovie.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const InputMovie = props => {
    return (
        <div className="input-movie-container">
            <input placeholder="e.g. Shawshank" className="input-movie" {...props} type="text" />
            <span className="input-movie-search-sign">
                <FontAwesomeIcon className="star-icon" icon={faSearch} />
            </span>
        </div>
    );
};

export default InputMovie;
