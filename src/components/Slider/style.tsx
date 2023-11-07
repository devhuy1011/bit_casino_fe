import color from 'style/color'
import styled from 'styled-components'
import Arrow from 'assets/logo/Arrow.png'
// Import css files
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Box = styled.div`
  width: auto;
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
  position: relative;
`
export const Container = styled.div`
  width: 100%;
  margin: 15px auto;
  background-color: gray;
  .ant-btn {
    height: 24px;
    width: 24px;
    padding: 0;
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
      right: -15px;

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
export const Element = styled.div`
  
`
