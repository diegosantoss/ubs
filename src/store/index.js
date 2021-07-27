import { createStore, combineReducers, applyMiddleware  } from 'redux';
import thunk from "redux-thunk";

//reducers
import { productsReducers as products } from './Products/reducers';

//middleware
const middleware = applyMiddleware(thunk)

//combine reducers
const reducers = combineReducers({
  products
})

export default createStore(reducers, middleware);