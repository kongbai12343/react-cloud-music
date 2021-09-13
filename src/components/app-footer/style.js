import styled from 'styled-components';

export const FooterWrapper = styled.div`
  height: 172px;
  background: #f2f2f2;
  border: 1px solid #b3b3b3;
  .content {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const FooterLeft = styled.div`
  padding-top: 15px;
  line-height: 24px;
 .link {
    a {
      color: #999;
    }
    .line {
      color: #c2c2c2;
      margin: 0 8px 0 10px;
    }
  }
  .copyright {
    color: #666;
    & span:first-child{
      margin-right: 14px;
    }
  }
  .report span:first-child{
    margin-right: 14px;
  }

`

export const FooterRight = styled.ul`
  display: flex;

  .item {
    display: flex;
    flex-direction: column;
    width: 60px;
    height: 70px;
    align-items: center;
    margin-right: 40px;
    
    .link {
      display: block;
      width: 50px;
      height: 45px;
      background-image: url(${require("@/assets/img/sprite_footer_02.png").default});
      background-size: 110px 450px;
    }
    :nth-child(1) .link {
        background-position: -60px -101px;
      }
      :nth-child(2) .link {
        background-position: 0 0;
      }
      :nth-child(3) .link {
        background-position: -60px -50px;
      }
      :nth-child(4) .link {
        background-position: 0 -101px;
      }
      .title {
        background-image: url(${require("@/assets/img/sprite_footer_01.png").default});
        width: 52px;
        height: 14px;
        background-size: 180px 100px;
      }
      :nth-child(1) .title {
        background-position: -1px -86px;
      }
      :nth-child(2) .title {
        background-position: 0 0;
        margin-top: 5px;
      }
      :nth-child(3) .title {
        background-position: 2px -54px;
        margin-top: 5px;
      }
      :nth-child(4) .title {
        background-position: -1px -72px;
        margin-top: 5px;
      }
  }
`