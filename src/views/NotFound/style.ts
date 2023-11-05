import styled from 'styled-components'
import bg from 'assets/images/bg_01.jpg'
import bgMobile from 'assets/images/bgMobile.png'
import bgSmall from 'assets/images/bgSmall.png'

const Wrapper = styled.div`
  width: 100%;
  height:calc(100vh - 100px);
  button {
    border: none;
  }
  @media (max-width: 720px) {
    height:calc(100vh - 60px);
  }
`

// Content
const Content = styled.div`
  max-width: 1200px;
  margin: auto;
  height: auto;
  display: block;
  padding-top: 48px;
  padding-bottom: 100px;
  height: 100%;
  @media (max-width: 1199px) {
    padding-left: 25px;
    padding-right: 25px;
  }
  &.header {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-top: 90px;
    @media (max-width: 650px) {
      padding-top: 30px;
    }
  }
`

export const Header = styled.section`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: right;
  width: 100%;
  min-height: 978px;
  height: 100%;
  @media (max-width: 720px) {
    min-height: 1280px;
    background-image: url(${bgMobile});
  }
  @media (max-width: 650px) {
    min-height: 642px;
    background-image: url(${bgSmall});
    background-position-y: bottom;
    min-height: 580px;
  }
`

export const TitleHeader = styled.div`
  /* display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center; */
  gap: 0 10px;
  max-width: 345px;
  h2 {
    font-size: 60px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 57px;
    font-family: 'NotoSansCJKkrBold';
    letter-spacing: normal;
    text-align: center;
    color: #fff;
    margin: 0;
    margin-bottom: 37px;
    text-decoration: underline;
    /* &::after {
      width: 100%;
      height: 4px;
      background-color: #ffffff;
      display: block;
      content: ' ';
      margin-top:8px
    } */
    &.color {
      color: #90f3ff;
    }
    /* &.first {
      letter-spacing: 54px;

    }
    &.last {
      letter-spacing: 90px;

    } */
  }
  margin: 0 0 46px;

  @media (max-width: 720px) {
    margin-top: 60px;
    h2 {
      line-height: 1.2;
    }
  }
  @media (max-width: 650px) {
    margin: 20px 0 20px;
    h2 {
      font-size: 30px;
    }
  }
`

export const TextHeader = styled.p`
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
  font-family: 'NotoSansCJKkrRegular';
  margin: 0 0 60px;
  @media (max-width: 720px) {
    width: 290px;
  }
  @media (max-width: 650px) {
    width: 158px;
    font-size: 14px;
    margin: 0 0 30px;
  }
`

export { Wrapper, Content }
