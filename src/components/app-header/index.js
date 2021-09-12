import React, { memo } from 'react';

import { headerLinks } from '@/common/local-data';

import { NavLink } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'

import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style';

export default memo(function AppHeader() {
  // 页面代码
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return <NavLink to={item.link}>
        {item.title}
        { /*路由渲染的item被选中时，下方会有一个三角小图标 */}
        <i className="sprite_01 icon"></i>
      </NavLink>
    } else {
      return <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
    }
  }

  // 返回jsx
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          { /*Logo */}
          <a href="#/" className="logo sprite_01 ">网易云音乐</a>

          { /*左边导航栏 */}
          <div className="select-list">
            {
              headerLinks.map((item, index) => {
                return (
                  <div key={item.title} className="select-item">
                    {showSelectItem(item, index)}
                  </div>
                )
              })

            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className="serach" placeholder="音乐/电台/视频/用户" prefix={<SearchOutlined />} />
          <div className="author">
            <a href="/#" >创作者中心</a>
          </div>
          <div className="login">
            <a href="#/" >登录</a>
          </div>
        </HeaderRight>
      </div>
      <div className="subnav"></div>
    </HeaderWrapper>
  )
})
