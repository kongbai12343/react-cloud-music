import {
  Map
} from 'immutable'

import * as actionTypes from './constants';

// const defaultStore = {
//   topBanners: []
// }

// 使用immutable对state做一个包裹，返回immutable对象
const defaultStore = Map({
  topBanners: []
})

// function reducer(state = defaultStore, action) {
//   switch (action.type) {
//     case actionTypes.CHANGE_TOP_BANNER:
//       return { ...state, topBanners: action.topBanners }
//     default:
//       return state
//   }
// }

function reducer(state = defaultStore, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNER:
      return state.set("topBanners", action.topBanners)
    default:
      return state
  }
}

export default reducer;