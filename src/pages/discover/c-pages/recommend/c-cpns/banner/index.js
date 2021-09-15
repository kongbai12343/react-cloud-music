import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import {
  shallowEqual,
  useDispatch,
  useSelector
} from 'react-redux'

import { getBannerAction } from '../../store/actionCreators'

import { Carousel } from 'antd';
import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from './style'

export default memo(function Banner(props) {
  // state，记录当前图片的位置
  const [currentIndex, setCurrentIndex] = useState(0)

  //组件和redux关联，获取数据和进行操作
  /**
   * useSelector接收两个参数
   * 第一个参数：一个回调函数，返回值作为前面变量的返回值
   * 第二个参数：shallowEqual（必须写上），进行浅层比较
   */
  const { topBanners } = useSelector(state => ({
    // topBanners: state.get("recommend").get("topBanners")
    topBanners: state.getIn(["recommend", "topBanners"])
  }), shallowEqual);
  const dispatch = useDispatch();

  // const { topBanners } = useSelector(state => ({
  //   topBanners: state.recommend.topBanners
  // }), shallowEqual)
  // const dispatch = useDispatch();

  const bannerRef = useRef()

  // 发送网络请求(在actionCreators中已经封装)
  useEffect(() => {
    dispatch(getBannerAction())
  }, [dispatch])

  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to)
  }, [])


  // 其他业务逻辑
  const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay={true} ref={bannerRef} beforeChange={bannerChange}>
            {
              topBanners.map((item, index) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight>
          <p className="title"></p>
        </BannerRight>
        <BannerControl className="control">
          <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
          <button className="btn right" onClick={e => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})

