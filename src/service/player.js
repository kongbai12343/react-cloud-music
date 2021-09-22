import request from './request'

// 歌曲详情，需要先获取歌曲的ids
export function getSongDetail(ids) {
  return request({
    url: "/song/detail",
    params: {
      ids
    }
  })
}

// 歌词

export function getLyric(id) {
  return request({
    url: "lyric",
    params: {
      id
    }
  })
}