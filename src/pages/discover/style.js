import styled from 'styled-components'


export const DiscoverWrapper = styled.div`
  .top {
    height: 35px;
    background-color: #C20C0C;
  }
`

export const TopMenu = styled.div`
  display: flex;
  
  &:first-child {
    padding-left: 180px;
  }
  .item {
    display: inline-block;
    display: flex;
    align-items: center;
    a {
      display: block;
      color: #fff;
      margin: 7px 17px 0;
      padding: 0 13px;
      height: 20px;
      text-align: center;
    }

    .active, &:hover a {
      text-decoration: none;
      background: #9B0909;
      border-radius: 20px;
    }
  }

`