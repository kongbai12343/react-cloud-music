import React, { memo, Fragment } from 'react'
import PropTypes from 'prop-types'

import {
  HeaderWrapper,
} from './style'

const HotRecommendHeader = memo(function HotRecommendHeader(props) {

  const showLine = (item, index) => {
    if (index < 4) {
      return (
        <Fragment key={item}>
          <a href="#/" >{item}</a>
          <span className="line">|</span>
        </Fragment>
      )
    } else {
      return <a href="#/">{item}</a>
    }
  }

  const { title, keywords } = props;

  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {
            keywords.map((item, index) => {
              return (
                <div className="item" key={item}>
                  {showLine(item, index)}
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="right">
        <a href="#/" className="more">更多</a>
        <i className="icon sprite_02"></i>
      </div>

    </HeaderWrapper>
  )
})

HotRecommendHeader.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array
}
HotRecommendHeader.defaultProps = {
  keywords: []
}

export default HotRecommendHeader;