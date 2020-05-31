import { combineReducers } from 'redux';
import app from './App/reducer';
// import story from './story/reducer';

const rootReducer = combineReducers({
//   story,
  app,
});

export default rootReducer;
