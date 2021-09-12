import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;

  .content {
    height: 70px;
    /* background-color: pink; */
    display: flex;
    justify-content: space-between;
  }
  .subnav {
    height: 5px;
    background-color: #C20C0C;
  }
`

export const HeaderLeft = styled.div`
  display: flex;

  .logo {
    display: inline-block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
    text-indent:-9999px
  }
  .select-list {
    font-size: 14px;
    line-height: 70px;
    display: flex;

    .select-item {
      // 添加相对定位，为子元素为活跃时，下方添加一个三角形的icon
      position: relative;
      a{
        display: inline-block;
        padding: 0 19px;
        text-align: center;
        color: #ccc;
      }
      &:hover a, .active {
        background-color: #000;
        color: #fff;
        text-decoration: none;
      }

      // 给最后一个孩子添加hot icon
      :last-of-type a {
        position: relative;
        ::after {
          /* display: block; */
          position: absolute;
          top: 21px;
          left: 100px;
          content: "";
          width: 28px;
          height: 19px;
          //必须以模块化的方式导入
          background-image: url(${require("@/assets/img/sprite_01.png").default});
          /* background: url("@/assets/img/sprite_01.png") no-repeat; */
          background-position: -190px 0;
        }
      }
      // 路由活跃时，添加红色小三角icon
      .active .icon {
        position: absolute;
        display: block;
        top: 64px;
        left: 50%;
        width: 12px;
        height: 7px;
        transform: translate(-50%,0);
        background-position: -226px 0;
      }
    }
  }
`
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #ccc;
  font-size: 12px;
  // 搜索框
  .serach {
    width: 158px;
    height: 32px;
    border-radius: 32px;

    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }
  // 创作者中心
  .author {
    /* background-color: transparent; */
    display: block;
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border-radius: 32px;
    margin: 0 16px;
    border: 1px solid #666;

    &:hover{
      border: 1px solid #fff;
    }
    &:hover a {
      text-decoration: none;
      color: #fff;
    }
  }
  //登录
  .login:hover a{
    color: #999;
  }

`