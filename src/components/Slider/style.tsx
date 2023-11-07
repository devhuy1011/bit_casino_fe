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
  .slick-slider {
    .prev-arrow,
    .next-arrow {
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      width: 30px;
      height: 30px;
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
      bottom: -20%;
      left: -18%;
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
      left: -13%;
      bottom: -18.5%;
      transform: rotate(180deg);
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
