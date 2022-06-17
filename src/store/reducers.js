import { combineReducers } from 'redux';
import reducers from './general/reducers';

const rootReducer = combineReducers({
  general: reducers
});

export default rootReducer;
