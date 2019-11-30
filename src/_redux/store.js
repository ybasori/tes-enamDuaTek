import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import businessesSearch from '../_reducers/businessesSearch';
import businessesDetail from '../_reducers/businessesDetail';

// this global states
const reducers = combineReducers({
    businessesSearch,
    businessesDetail
});

export default createStore(reducers, applyMiddleware(thunk));