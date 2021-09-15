import styled from 'styled-components'


export const BannerWrapper = styled.div`
  background: url(${props => props.bgImage}) center/6000px;

  .banner {
    height: 270px;
    display: flex;
    position: relative;
  }

`
export const BannerLeft = styled.div`
  display: block;
  width: 730px;
  .banner-item {
    overflow: hidden;
    height: 270px;
    .image {
      width: 100%;
    }
  }
`
export const BannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_blank"
})`
  position: relative;
  display: block;
  width: 254px;
  height: 270px;
  background: url(${require("@/assets/img/download.png").default});

  .title::after {
    content: "PC 安卓 iPhone WP iPad Mac 六大客户端";
    display: block;
    width: 100%;
    height: 16px;
    position: absolute;
    top: 247px;
    left: 15px;
  }
`


export const BannerControl = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  
  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require("@/assets/img/banner_sprite.png").default});
    background-color: transparent;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, .1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`