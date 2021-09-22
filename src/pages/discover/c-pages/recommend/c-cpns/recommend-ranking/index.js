import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getRankingAction } from '../../store/actionCreators';

import HotRecommendHeader from '@/components/hot-recommend-header';
import SoarRanking from '@/components/soar-ranking';
import { RankingWrapper } from './style';

export default memo(function RecommendRanking() {

  //redux hooks
  const { soarRankings, newSongRankings, originalRankings } = useSelector(state => ({
    soarRankings: state.getIn(["recommend", "soarRankings"]),
    newSongRankings: state.getIn(["recommend", "newSongRankings"]),
    originalRankings: state.getIn(["recommend", "originalRankings"])
  }), shallowEqual)
  const dispatch = useDispatch()

  //other hooks
  useEffect(() => {
    dispatch(getRankingAction(0));
    dispatch(getRankingAction(2));
    dispatch(getRankingAction(3));
  }, [dispatch])
  return (
    <RankingWrapper>
      <HotRecommendHeader title="榜单" />
      <div className="soar">
        <SoarRanking info={soarRankings} />
        <SoarRanking info={newSongRankings} />
        <SoarRanking info={originalRankings} />
      </div>
    </RankingWrapper>
  )
})
