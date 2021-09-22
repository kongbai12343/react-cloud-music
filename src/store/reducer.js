import { combineReducers } from 'redux-immutable';
// import { combineReducers } from 'redux';

// 避免命名冲突，重命名
import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store';
import { reducer as playerReducer } from '../pages/player/store';

// 合成reducer
const cReducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer
})

export default cReducer