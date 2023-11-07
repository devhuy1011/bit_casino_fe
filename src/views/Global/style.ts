import styled from 'styled-components'
import color from 'style/color'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 0;
  margin: 0;
`
export const Header = styled.div`
  width: 100%;
`
export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ContainerWrapper = styled.div`
  width: 1584px;
  margin: 0 auto;
  padding: 0 32px;
`
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .subContent {
    font-size: 20px;
  }
  .subDetail {
    font-size: 13px;
    color: #858585;
    font-weight: 200;
  }
`
export const Banner = styled.div`
  width: 100%;
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
