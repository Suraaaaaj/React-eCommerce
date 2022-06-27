import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Reducer from '../reducers/Reducer';


const middleware = [];
const store = createStore(
    Reducer,
    composeWithDevTools(
        applyMiddleware(...middleware)
        // other store enhancers if any
      )
)

export default store;