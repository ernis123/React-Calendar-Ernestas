import {applyMiddleware, compose, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import ReduxThunk from 'redux-thunk';

import rootReducer from '../reducers'
const loggerMiddlware = createLogger()

const NODE_ENV = process.env.NODE_ENV;

let middleware;

if(NODE_ENV === "production"){
  middleware = [ReduxThunk]
}else{
  middleware = [loggerMiddlware,ReduxThunk]
}

const enhancer = compose(
  applyMiddleware(...middleware)
)

const configureStore = ()=>{
  const initialState = loadState();
  const store = createStore(rootReducer,initialState,enhancer)
  store.subscribe(()=>{
    saveState(store.getState())
  })
  return store
}

const saveState = (state) => {
    try {
      localStorage.setItem('state', JSON.stringify(state));
    } catch {

    }
};

const loadState = () => {
  try {
    const state = localStorage.getItem('state');
    if (state === null) {
      return undefined;
    }
    return JSON.parse(state);
  } catch (err) {
    return undefined;
  }
};

export default configureStore;
