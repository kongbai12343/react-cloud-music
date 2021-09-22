import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 33px;
  padding: 0 10px 0 34px;
  background-position: -225px -156px;
  border-bottom: 2px solid #C10D0C;

  .left {
    display: flex;
    .title {
      font-size: 20px;
      font-weight: 400;
      line-height: 28px;
    }

    .keyword {
      margin: 7px 0 0 20px;
      .item {
        display: inline-block;
      }

      .line {
        margin: 0 10px;
        color: #ccc;
      }
    }
  }

  .right {

    .more {
      line-height: 33px;
      color: #666;
    }
    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      background-position: 0 -240px;
      vertical-align: middle;
      margin-left: 4px;
    }
  }
`