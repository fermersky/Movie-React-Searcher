import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { setSearchText, fetchMovies } from './actions/movies';

import MoviesContainer from './containers/MoviesContainer';
import MovieContainer from './containers/MovieContainer';

import Header from './components/Header/Header';

class Root extends Component {
    constructor(props) {
        super(props);

        this.props.dispatch(setSearchText('star wars'));
        this.props.dispatch(fetchMovies('star wars'));
    }

    static propTypes = {
        store: PropTypes.object.isRequired
    };

    render() {
        return (
            <Provider store={this.props.store}>
                <Header />
                <Router>
                    <Route exact path="/" component={MoviesContainer} />
                    <Route exact path="/movies" component={MoviesContainer} />
                    <Route path="/movie/:movieTitle" component={MovieContainer} />
                </Router>
            </Provider>
        );
    }
}

export default connect()(Root);
