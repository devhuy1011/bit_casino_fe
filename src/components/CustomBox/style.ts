import styled from "styled-components";
import Arrow from 'assets/logo/Arrow.png'
import { Image } from "antd";

export const Roomgame = styled(Image)`
    border-radius: 10px;
    cursor: pointer;
}`
export const Mask = styled.div`
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
    &:hover {
        opacity: 1;
    }
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
export const Container2 = styled.div`
  width: 100%;
  position: relative;
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
      top: 25%;
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
      top: 30%;
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
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`