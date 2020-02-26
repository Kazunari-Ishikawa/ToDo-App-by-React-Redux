import { combineReducers } from 'redux';
import todo from './Todo';

// rootReducerの設定
const rootReducer = combineReducers({
  todo
});

export default rootReducer;
