import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies, requestMovies, setSearchText } from '../actions/movies';

import { Spinner } from 'react-bootstrap';
import Movies from '../components/Movies/Movies';
import InputMovie from '../components/InputMovie/InputMovie';

class MoviesContainer extends Component {
    state = {
        inputValue: this.props.searchText,
        timeout: null
    };

    handleChange = ({ target }) => {
        clearInterval(this.state.timeout);
        this.props.dispatch(requestMovies());
        this.setState({
            inputValue: target.value,
            timeout: setTimeout(() => {
                this.props.dispatch(setSearchText(target.value));

                this.props.dispatch(fetchMovies(target.value));
            }, 1000)
        });
    };

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>...</h1>
                <InputMovie value={this.state.inputValue} name="search" onChange={this.handleChange} />

                {this.props.isFetching ? (
                    <div>
                        <Spinner animation="border" variant="secondary" />
                    </div>
                ) : (
                    <div>
                        <Movies movies={this.props.movies} />
                    </div>
                )}
            </div>
        );
    }
}

export default connect(({ moviesReducer }) => {
    return {
        searchText: moviesReducer.searchText,
        movies: moviesReducer.movies,
        isFetching: moviesReducer.isFetching
    };
})(MoviesContainer);
