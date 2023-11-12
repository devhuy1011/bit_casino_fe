import styled from 'styled-components'
import Arrow from 'assets/logo/Arrow.png'
import { Image } from 'antd'

export const Roomgame = styled(Image)`
  border-radius: 10px;
  cursor: pointer;
`
export const Container = styled.div`
  width: 276px;
  height: fit-content;
  position: relative;
  background-color: #f2f2f2;
  border-radius: 10px;
  .manager {
    font-size: 18px;
    width: 235px;
    margin: auto;
  }
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

export const ContactContainer = styled.div`
  width: 100%;
  border-radius: 0.5rem;
  margin: 0;
  padding: 1.25rem;
  p {
    font-size: 0.875rem;
    line-height: 1.7rem;
    margin: 0;
    font-weight: 600;
  }
`
export const Contact = styled.div`
  width: 220px;
  text-align: left;
  padding-left: 1rem;
  span {
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: left;
    &::after {
      content: '';
      height: 5px;
      width: 5px;
      position: absolute;
      border-radius: 50%;
      top: 52%; /* Đặt vị trí dọc giữa */
      left: -6%; /* Đặt vị trí ngang giữa */
      transform: translate(-50%, -50%); /* Dịch chấm đến giữa */
      background-color: #000;
    }
  }
`

export const ContactDetail = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;
`
