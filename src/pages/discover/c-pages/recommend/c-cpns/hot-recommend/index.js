import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { HOT_RECOMMEND_LIMIT } from '@/common/contants'
import {
  HotRecommendWrapper
} from './style'
import { getHotRecommendAction } from '../../store/actionCreators';

import HotRecommendHeader from '@/components/hot-recommend-header';
import SongsCover from '@/components/songs-cover';

export default memo(function HotRecommend(porps) {

  // redux hooks
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual)
  const dispath = useDispatch();
  // other hooks
  useEffect(() => {
    dispath(getHotRecommendAction(HOT_RECOMMEND_LIMIT))
  }, [dispath])

  return (
    <HotRecommendWrapper>
      <HotRecommendHeader title="热门推荐" keywords={["华语", "流行", "摇滚", "民谣", "电子"]} />
      <div className="recommend-list">
        {
          hotRecommends.map((item, index) => {
            return <SongsCover key={item.id} info={item} />
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
