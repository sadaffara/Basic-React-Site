import React, { Component } from 'react'
import { Route, Router } from 'react-router-dom'
import Home from '../screens/home'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import configureStore from '../redux/stores/configureStore';
import defaultState from '../redux/stores/defaultState'

export default class Routes extends Component {
    render() {
        const hist = createBrowserHistory();
        const store = configureStore(defaultState);
        return (
            <div>
                <Provider store={store}>
                    <Router history={hist}>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/home" component={Home}></Route>
                    </Router>
                </Provider>
            </div>
        )
    }

}