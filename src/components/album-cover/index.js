import React, { memo } from 'react'

import { getSizeImage } from '@/utils/format-utils'

import { AlbumWrapper } from './style'

export default memo(function AlbumCover(props) {
  const { info, width = 153, size = 130, bgp = -570 } = props
  return (
    <AlbumWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, 100)} alt="" />
        <a href="#/" className="cover sprite_covor" >cover</a>
      </div>
      <div className="album-info">
        <div className="name text-wrap">{info.name}</div>
        <div className="artist text-wrap">{info.artist.name}</div>
      </div>
    </AlbumWrapper>
  )
})
