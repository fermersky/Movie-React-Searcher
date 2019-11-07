import {
    RECIEVE_MOVIES,
    REQUEST_MOVIES,
    SELECT_MOVIE,
    RECIEVE_MOVIE,
    SET_SEARCH_TEXT
} from '../actions/movies';
import { handleActions } from 'redux-actions';

const intialState = { isFetching: false, movies: [], movie: {}, searchText: '' };

const movies = {
    reducer: handleActions(
        {
            [REQUEST_MOVIES]: (state, action) => ({
                ...state,
                isFetching: true
            }),
            [RECIEVE_MOVIE]: (state, action) => ({
                ...state,
                isFetching: false,
                movie: action.payload
            }),
            [RECIEVE_MOVIES]: (state, action) => ({
                ...state,
                isFetching: false,
                movies: action.payload
            }),
            [SELECT_MOVIE]: (state, action) => ({
                ...state,
                isFetching: false,
                movie: state.movies.find(movie => movie.title === action.title)
            }),
            [SET_SEARCH_TEXT]: (state, action) => ({
                ...state,
                searchText: action.payload
            })
        },
        intialState
    )
};

// function movies(state = intialState, action) {
//     switch (action.type) {
//         case REQUEST_MOVIES:
//             return {
//                 ...state,
//                 isFetching: true
//             };
//         case RECIEVE_MOVIE:
//             return {
//                 ...state,
//                 isFetching: false,
//                 movie: action.payload
//             };
//         case RECIEVE_MOVIES:
//             return {
//                 ...state,
//                 isFetching: false,
//                 movies: action.payload
//             };
//         case SELECT_MOVIE:
//             return {
//                 ...state,
//                 isFetching: false,
//                 movie: state.movies.find(movie => movie.title === action.title)
//             };
//         case SET_SEARCH_TEXT:
//             return {
//                 ...state,
//                 searchText: action.payload
//             };
//         default:
//             return state;
//     }
// }

export default movies.reducer;
