/**
 * 
[00:00.000] 作词 : 许嵩
[00:01.000] 作曲 : 许嵩
[00:22.240]天空好想下雨
[00:24.380]我好想住你隔壁
[00:26.810]傻站在你家楼下
[00:29.500]抬起头数乌云
[00:31.160]如果场景里出现一架钢琴
[00:33.640]我会唱歌给你听 
 */
const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;
export function parseLyric(lyricString) {
  const lineStrings = lyricString.split("\n");

  const lyric = [];
  for (const line of lineStrings) {
    if (line) {
      const result = parseExp.exec(line)
      const time1 = result[1] * 60 * 1000;
      const time2 = result[2] * 1000;
      const time3 = result[3].length === 3 ? result[3] * 1 : result[3] * 10;
      const time = time1 + time2 + time3;

      const content = line.replace(parseExp, "").trim();
      const lineObj = { time, content }
      lyric.push(lineObj);
    }
  }
  return lyric;
}