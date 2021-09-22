import * as actionTypes from './constants';

import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
  getRecommendRanking
} from '@/service/recommend';

// 将数据保存到redux中，创建一个保存数据的action
const changeTopBannerActon = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNER,
  topBanners: res.banners
})

const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMEND,
  hotRecommends: res.result
})

const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUMS,
  newAlbums: res.albums
})

const changeSoarRankingAction = (res) => ({
  type: actionTypes.CHANGE_SOAR_RANKING,
  soarRankings: res.playlist
})
const changeNewSongRankingAction = (res) => ({
  type: actionTypes.CHANGE_NEW_SONG_RANKING,
  newSongRankings: res.playlist
})
const changeOriginalRankingAction = (res) => ({
  type: actionTypes.CHANGE_ORIGINAL_RANKING,
  originalRankings: res.playlist
})

// 轮播图
export const getBannerAction = () => {
  // dispath中真正调用是这个 返回的函数
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerActon(res))
    })
  }
}

// 热门推荐
export const getHotRecommendAction = (limit) => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      dispatch(changeHotRecommendAction(res))
    })
  }
}

// 新碟上架
export const getNewAlbumAction = (limit) => {
  return dispatch => {
    getNewAlbums(limit).then(res => {
      dispatch(changeNewAlbumAction(res))
    })
  }
}

// 榜单
export const getRankingAction = (idx) => {
  return dispatch => {
    getRecommendRanking(idx).then(res => {
      switch (idx) {
        case 0:
          dispatch(changeNewSongRankingAction(res));
          break;
        case 2:
          dispatch(changeOriginalRankingAction(res));
          break;
        case 3:
          dispatch(changeSoarRankingAction(res));
          break
        default:
      }
    })
  }
}