import {
  Map
} from 'immutable'

import * as actionTypes from './constants';

// const defaultStore = {
//   topBanners: []
// }

// 使用immutable对state做一个包裹，返回immutable对象
const defaultStore = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
  soarRankings: {},
  newSongRankings: {},
  originalRankings: {}
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
    case actionTypes.CHANGE_HOT_RECOMEND:
      return state.set("hotRecommends", action.hotRecommends)
    case actionTypes.CHANGE_NEW_ALBUMS:
      return state.set("newAlbums", action.newAlbums)

    case actionTypes.CHANGE_SOAR_RANKING:
      return state.set("soarRankings", action.soarRankings)
    case actionTypes.CHANGE_NEW_SONG_RANKING:
      return state.set("newSongRankings", action.newSongRankings)
    case actionTypes.CHANGE_ORIGINAL_RANKING:
      return state.set("originalRankings", action.originalRankings)
    default:
      return state
  }
}

export default reducer;