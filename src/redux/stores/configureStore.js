import {createStore} from 'redux'
import allReducers from '../reducers/allReducers';

export default (defaultState) => {
    const store = createStore( allReducers, defaultState)
    return store
}