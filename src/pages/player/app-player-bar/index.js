import React, { memo, useEffect, useRef, useState, useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import {
  getSongDetailAction,
  changeSequenceAction,
  changeCurrentIndexAndSongAction,
  changeCurrentLyricIndexAction
} from '../store/actionCreators';
import { getSizeImage, formatDate, getPlaySong } from "@/utils/format-utils"

import { Slider, message } from 'antd';
import { NavLink } from 'react-router-dom';
import {
  AppPlayerBarWrapper,
  Control,
  PlayInfo,
  Operator
} from './style';

export default memo(function AppPlayerBar() {

  // props and state
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // redux hooks
  const { currentSong, sequence, playList, lyricList, currentLyricIndex } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"]),
    sequence: state.getIn(["player", "sequence"]),
    playList: state.getIn(["player", "playList"]),
    lyricList: state.getIn(["player", "lyricList"]),
    currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
  }), shallowEqual);
  const dispatch = useDispatch();

  // other hooks
  const audioRef = useRef();

  // useEffect(() => {
  //   dispatch(getSongDetailAction(167876));
  // }, [dispatch]);

  // 不是每一次都需要获取song src,只有当歌曲发生变化了才再次请求
  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id);
    audioRef.current.play().then(res => {
      setIsPlaying(true);
    }).catch(err => {
      setIsPlaying(false);
    });
  }, [currentSong]);

  // otner handle
  const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
  const artName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手";
  // 歌曲总毫秒数
  const duration = currentSong.dt || 0;
  // 格式化并展示歌曲总时间
  const showDuration = formatDate(duration, "mm:ss");
  // 格式化并展示当前时间
  const showCurrentTime = formatDate(currentTime, "mm:ss");

  // handle function
  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  // 播放顺序方式
  const changeSequence = () => {
    let currentSquence = sequence + 1;
    if (currentSquence > 2) {
      currentSquence = 0;
    }
    dispatch(changeSequenceAction(currentSquence));
  }

  const changeMusic = (tag) => {
    // -1:上一首  1：下一首
    dispatch(changeCurrentIndexAndSongAction(tag));
  }

  // 监听歌曲时间
  const timeUpdate = (e) => {
    // 避免进度条被鼠标滑动和播放时的进度值双重控制
    const currentTime = e.target.currentTime;
    if (!isChanging) {
      //转化为毫秒
      setCurrentTime(currentTime * 1000);
      setProgress(currentTime * 1000 / duration * 100);
    }

    // 获取当前时间歌词
    let i = 0
    for (; i < lyricList.length; i++) {
      let lyricItem = lyricList[i];
      if (currentTime * 1000 < lyricItem.time) {
        break;
      }
    }
    if (currentLyricIndex !== i - 1) {
      dispatch(changeCurrentLyricIndexAction(i - 1));
      const content = lyricList[i - 1] && lyricList[i - 1].content
      message.open({
        key: "lyric",
        content: content,
        duration: 0,
      });
    }

  };

  const handeleMusicEnded = () => {
    if (sequence === 2) { //单曲循环
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      dispatch(changeCurrentIndexAndSongAction(1))
    }
  }

  const silderChange = useCallback((value) => {
    setProgress(value);
    // 滑动过程中，时间跟着改变
    const currentTime = value / 100 * duration;
    setCurrentTime(currentTime);
    setIsChanging(true);
  }, [duration])

  const silderAfterChange = useCallback((value) => {
    const currentTime = value / 100 * duration / 1000;
    audioRef.current.currentTime = currentTime;
    setCurrentTime(currentTime * 1000);
    setIsChanging(false);

    // 当鼠标松开时，如果是暂停状态，变为播放状态
    if (!isPlaying) {
      playMusic();
    }
  }, [duration, isPlaying, playMusic])

  return (
    <AppPlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_playbar prev" onClick={e => changeMusic(-1)}></button>
          <button className="sprite_playbar play" onClick={e => playMusic()}></button>
          <button className="sprite_playbar next" onClick={e => changeMusic(1)}></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src={getSizeImage(picUrl, 35)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <a href="#/" className="singer-name">{artName}</a>
            </div>
            <div className="progress">
              <Slider defaultValue={30}
                value={progress}
                onChange={silderChange}
                onAfterChange={silderAfterChange} />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="duration">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className="left">
            <button className="sprite_playbar btn favor"></button>
            <button className="sprite_playbar btn share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="sprite_playbar btn volume"></button>
            <button className="sprite_playbar btn loop" onClick={e => changeSequence()}></button>
            <button className="sprite_playbar btn playlist" title="播放列表">{playList.length}</button>
          </div>
        </Operator>
      </div>
      {/* 监听歌曲 */}
      <audio ref={audioRef}
        onTimeUpdate={e => timeUpdate(e)}
        onEnded={e => handeleMusicEnded()} />
    </AppPlayerBarWrapper>
  )
})
