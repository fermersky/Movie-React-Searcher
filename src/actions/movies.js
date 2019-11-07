import { fetch } from 'cross-fetch';

// select movie by title
export const SELECT_MOVIE = 'movies/SELECT_MOVIE';
export function selectMovie(title) {
    return {
        type: SELECT_MOVIE,
        payload: title
    };
}

// request begins
export const REQUEST_MOVIES = 'movies/REQUEST_MOVIES';
export function requestMovies() {
    return {
        type: REQUEST_MOVIES
    };
}

// request ends
export const RECIEVE_MOVIES = 'movies/RECIEVE_MOVIES';
export function recieveMovies(movies) {
    return {
        type: RECIEVE_MOVIES,
        payload: movies
    };
}

// request ends
export const RECIEVE_MOVIE = 'movies/RECIEVE_MOVIE';
export function recieveMovie(movie) {
    return {
        type: RECIEVE_MOVIE,
        payload: movie
    };
}

// current search text
export const SET_SEARCH_TEXT = 'movies/SET_SEARCH_TEXT';
export function setSearchText(text) {
    return {
        type: SET_SEARCH_TEXT,
        payload: text
    };
}

// request
export function fetchMovies(movieTitle) {
    return function(dispatch) {
        // inform state that the API call starts
        dispatch(requestMovies());

        return fetch(`http://www.omdbapi.com/?apikey=26de17e&s=${movieTitle}`)
            .then(respose => respose.json())
            .then(data => {
                dispatch(recieveMovies(data.Search));
            })
            .catch(err => console.error(err));
    };
}

// request
export function fetchMovie(movieTitle) {
    return function(dispatch) {
        // inform state that the API call starts
        dispatch(requestMovies());

        return fetch(`http://www.omdbapi.com/?apikey=26de17e&t=${movieTitle}`)
            .then(respose => respose.json())
            .then(data => {
                dispatch(recieveMovie(data));
            })
            .catch(err => console.error(err));
    };
}

// test
export const TEST = 'movies/TEST';
export function test(title) {
    return {
        type: SELECT_MOVIE,
        payload: title
    };
}
