import styled from 'styled-components'
import color from 'style/color'
import Arrow from 'assets/logo/Arrow.png'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 0;
  margin: 0;
`
export const Header = styled.div`
  width: 1584px;
  margin: 0 auto;
  padding: 0 32px;
`
export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ContainerWrapper = styled.div`
  width: auto;
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
export const Box = styled.div`
  width: auto;
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
  position: relative;
`
export const Container = styled.div`
  width: 100%;
  margin: 15px 15px;
  .ant-btn {
    height: 24px;
    width: 24px;
    padding: 0;
  }
  .sidebar_icon {
    cursor: pointer;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
  }
  .slick-slider {
    .prev-arrow,
    .next-arrow {
      background-repeat: no-repeat;
      background-position: center;
      background-size: 12px;
      position: absolute;
      bottom: 3%;
      transform: translateY(-50%);
      z-index: 10;
      cursor: pointer;
      opacity: 0.5;
      &:hover {
        opacity: 1;
      }
    }
    .prev-arrow {
      background-image: url(${Arrow});
      top: 30%;
      left: -15px;
      transform: rotate(180deg);

      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 50%;
      background-color: #f2f2f2;
      width: 24px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
      opacity: 1;
      :where(.css-dev-only-do-not-override-2i2tap).ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover {
        color: #000;
        border-color: transparent;
      }

      @media screen and (max-width: 1440px) {
        bottom: -57%;
        @media screen and (max-width: 1024px) {
          bottom: -123%;
          @media screen and (max-width: 768px) {
            display: none;
          }
        }
      }
    }
    .next-arrow {
      background-image: url(${Arrow});
      bottom: 15%;
      right: 15px;

      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 50%;
      background-color: #f2f2f2;
      width: 24px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
      opacity: 1;
      @media screen and (max-width: 1440px) {
        bottom: -55%;
        @media screen and (max-width: 1024px) {
          bottom: -120%;
          @media screen and (max-width: 768px) {
            display: none;
          }
        }
      }
    }
  }
`

export const Container2 = styled.div`
  width: 100%;
  position: relative;
  .ant-btn {
    height: 24px;
    width: 24px;
    padding: 0;
  }
  .roomGame {
    border-radius: 10px;
    cursor: pointer;
  }
  .slick-slider {
    .prev-arrow,
    .next-arrow {
      background-repeat: no-repeat;
      background-position: center;
      background-size: 12px;
      position: absolute;
      bottom: 3%;
      transform: translateY(-50%);
      z-index: 10;
      cursor: pointer;
      opacity: 0.5;
      &:hover {
        opacity: 1;
      }
    }
    .prev-arrow {
      background-image: url(${Arrow});
      top: 40%;
      left: -15px;
      transform: rotate(180deg);

      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 50%;
      background-color: #f2f2f2;
      width: 24px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
      opacity: 1;
      :where(.css-dev-only-do-not-override-2i2tap).ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover {
        color: #000;
        border-color: transparent;
      }

      @media screen and (max-width: 1440px) {
        bottom: -57%;
        @media screen and (max-width: 1024px) {
          bottom: -123%;
          @media screen and (max-width: 768px) {
            display: none;
          }
        }
      }
    }
    .next-arrow {
      background-image: url(${Arrow});
      bottom: 35%;
      right: -5px;

      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 50%;
      background-color: #f2f2f2;
      width: 24px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
      opacity: 1;
      @media screen and (max-width: 1440px) {
        bottom: -55%;
        @media screen and (max-width: 1024px) {
          bottom: -120%;
          @media screen and (max-width: 768px) {
            display: none;
          }
        }
      }
    }
    .mask:hover {
      opacity: 1;
    }
  }
`
export const OverLay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  opacity: 0;
  width: 202px;
  height: 151px;
  border-radius: 15px;
  z-index: 1;
`
export const PlayContainer = styled.div`
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(5px);
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    position: absolute;
  }
`
