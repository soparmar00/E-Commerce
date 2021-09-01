import { createStore, applyMiddleware } from 'redux';
import {rootrReducer} from '../redux/Reducer/rootReducer';
import thunk from 'redux-thunk';

const store = createStore(rootrReducer, applyMiddleware(thunk));

export default store;