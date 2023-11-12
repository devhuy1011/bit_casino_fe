import styled from 'styled-components'
import BgImage from 'assets/vip_image/pattern-bg.png'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 0;
  margin: 0;
  .default {
    display: flex;
    flex-direction: column;
  }
  .flex-box {
    display: flex;
    flex-direction: row;
  }
`
export const WrapperContainer = styled.div`
  width: 100%;
  .transparent {
    background-color: transparent;
    justify-content: flex-end;
  }
  .white {
    background-color: #fff;
    position: sticky;
    top: 0;
    padding: 1rem;
    justify-content: space-between;
  }
  .white-default {
    background-color: #fff;
    position: sticky;
    top: 0;
    padding: 1rem;
    justify-content: flex-end;
  }
`
export const Header = styled.div`
  width: 100%;
  margin: 0 auto;
`
export const ContentContainer = styled.div`
  width: 1600px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ContainerWrapper = styled.div`
  max-width: 100%;
  height: 918px;
  background-color: rgb(248 235 233);
  background-image: url(${BgImage});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ButtonHandlerContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: auto;

  button span {
    font-size: 14px;
  }
  :where(.css-dev-only-do-not-override-2i2tap).ant-btn.ant-btn-block {
    width: auto;
  }
  .login {
    margin-right: 15px;
    border: 1px solid #686868;
    width: auto;
    &:where(.css-dev-only-do-not-override-2i2tap).ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover {
      color: #000;
      border-color: #000;
      background-color: #80808052;
    }
  }
  .register {
    background-color: #d63741;
  }
`

export const MenuContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  z-index: 10;
  .vip-position {
    position: fixed;
    top: 10px;
    right: 10px;
  }
  .default-slick {
    position: static;
  }
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  .title {
    font-size: 64px;
    width: 100%;
  }
  .title-customer {
    font-size: 48px;
    width: 100%;
  }
  .subContent {
    font-size: 24px;
  }
  .subContent-customer {
    width: 660px;
    margin: auto;
    font-size: 24px;
  }
  .customer-ser {
    font-size: 24px;
    max-width: 660px;
  }
  .subDetail {
    font-size: 13px;
    color: #858585;
    font-weight: 200;
  }
`
export const Banner = styled.div`
  img {
    width: 100%;
  }
`
export const Regis = styled.div`
  width: 100%;

  .register {
    background-color: #d63741;
    width: 118px;
    height: 56px;
  }
`
export const CustomerService = styled.div`
  max-width: 1230px;
  margin: auto;
  text-align: center;
`
export const WrapperContent = styled.div`
  max-width: 1230px;
  margin: auto;
`
export const CustomeCard = styled.div`
  max-width: 1230px;
  margin: 100px auto;
  display: flex;
  justify-content: space-between;

  > div:nth-child(odd) {
  }
  > div:nth-child(even) {
    margin-top: 110px;
  }
`
export const Event = styled.div`
  max-width: 1230px;
  margin: auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-self: center;
`
export const GridItem = styled.div`
  width: 608px;
  display: flex;
  align-self: center;
  flex-wrap: wrap;
  > div:nth-child(1) {
    margin-top: 50px;
    margin-right: 8px;
    margin-bottom: 8px;
  }
  > div:nth-child(4) {
    margin-top: -40px;
    margin-left: 8px;
  }
`
export const Details = styled.div`
  max-width: 400px;
  text-align: center;
  text-align: left;
  padding-left: 2.25rem;
  .event-title {
    font-size: 48px;
    margin: 5px 0;
  }
  p {
    font-size: 24px;
  }
`
