import * as actionTypes from './constants';

import { getTopBanners } from '@/service/recommend';

// 将数据保存到redux中，创建一个保存数据的action
const changeTopBannerActon = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNER,
  topBanners: res.banners
})

export const getBannerAction = () => {
  // dispath中真正调用是这个 返回的函数
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerActon(res))
    })
  }
}