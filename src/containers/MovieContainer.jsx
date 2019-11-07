import React, { Component } from 'react';
import Movie from '../components/Movie/Movie';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions/movies';
import { Spinner } from 'react-bootstrap';

class MovieContainer extends Component {
    constructor(props) {
        super(props);

        const titleFromUrl = this.props.match.params.movieTitle;
        const title = this.fromSlugToNormalString(titleFromUrl);

        this.props.dispatch(fetchMovie(title));
    }

    movieContainerStyles = {
        alignItems: 'center',
        position: 'relative'
    };

    spinnerStyles = {
        position: 'absolute',
        top: '60px',
        left: '49%'
    };

    fromSlugToNormalString = title => {
        return title.replace(/[_]/gim, ' ');
    };

    render() {
        const isFetching = this.props.isFetching;
        return (
            <div style={this.movieContainerStyles}>
                {isFetching ? (
                    <Spinner style={this.spinnerStyles} animation="border" variant="secondary" />
                ) : (
                    <Movie movie={this.props.movie} />
                )}
            </div>
        );
    }
}

export default connect(state => {
    return {
        movie: state.moviesReducer.movie,
        isFetching: state.moviesReducer.isFetching
    };
})(MovieContainer);
