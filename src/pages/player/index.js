import React, { memo } from 'react'

import {
  PlayerWrapper,
  PlayerLeft,
  PlayerRight
} from './style'

export default memo(function Player() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <h2>PlayerInfo</h2>
          <h2>SongCotent</h2>
        </PlayerLeft>
        <PlayerRight>
          <h2>SimiPlayList</h2>
          <h2>SimiSongs</h2>
          <h2>Download</h2>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})
