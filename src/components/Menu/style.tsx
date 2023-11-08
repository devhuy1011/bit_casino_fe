import color from 'style/color'
import styled from 'styled-components'

export const Box = styled.div`
  width: auto;
  height: 100%;
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
`

export const Container = styled.div`
  width: auto;
  height: auto;
  padding: 1.25rem;
  background-color: #f2f2f2;
  position: relative;

  > hr {
    border-top: 1px solid #e0e0e0;
    border-left: none;
  }
  .game {
    font-size: 1.25rem;
    line-height: 2rem;
  }
  .hr-line {
    margin-top: 25px;
  }
  &:hover {
    .hidden {
      display: flex;
      opacity: 1;
      visibility: visible;
      transition: opacity 0.3s ease-in-out;
    }
  }
`

export const Logo = styled.div`
  width: 200px;
  margin-bottom: 40px;
  cursor: pointer;
`

export const PartnerContainer = styled.div`
  width: auto;
  border-radius: 0.25rem;
  background-color: #ffff;
  margin-top: 20px;
  margin-bottom: 20px;
  span {
    color: #858585;
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 400;
  }
  p {
    font-size: 0.875rem;
    line-height: 1.7rem;
    margin: 0;
    font-weight: 600;
  }
  hr {
    margin: 0 8px;
    height: 1px;
    border-top: 0px solid #e0e0e0;
    border-left: none;
  }
`

export const Partner = styled.div`
  width: 180px;
  padding: 8px;
  width: auto;
  display: flex;
  justify-content: space-between;
`
export const PartnerDetails = styled.div`
  width: auto;
  margin-right: 20px;
  line-height: 0;
`
export const PartnerMe = styled.div`
  width: auto;
  text-align: center;
  padding-bottom: 5px;
`

export const VipContainer = styled.div`
  width: auto;
  border-radius: 0.5rem;
  background-color: #ffff;
  margin-top: 20px;
  margin-bottom: 20px;
  span {
    color: #858585;
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 400;
  }
  p {
    font-size: 0.875rem;
    line-height: 1.7rem;
    margin: 0;
    font-weight: 600;
  }
`
export const Vip = styled.div`
  width: 180px;
  padding: 5px 12px;
  width: auto;
  display: flex;
  .sidebar_icon {
    background-color: #e0e0e03d;
    border-radius: 50%;
  }
  :hover {
    cursor: pointer;
    > div > img {
      transition: all 0.2s ease-in-out;
      transform: scale(1.1);
    }
    p {
      color: #f13741;
      transition: all 0.2s ease-in-out;
    }
  }
`
export const VipTitle = styled.div`
  width: auto;
  margin-left: 10px;
  line-height: 0;
`

export const ContactContainer = styled.div`
  width: auto;
  border-radius: 0.5rem;
  margin: 0;
  span {
    color: #858585;
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 400;
  }
  p {
    font-size: 0.875rem;
    line-height: 1.7rem;
    margin: 0;
    font-weight: 600;
  }
`
export const Contact = styled.div`
  width: auto;
  span {
    margin-left: 8px;
    font-size: 11px;
    &::after {
      content: '';
      height: 2px;
      width: 2px;
      position: absolute;
      border-radius: 50%;
      top: 80%; /* Đặt vị trí dọc giữa */
      left: 0%; /* Đặt vị trí ngang giữa */
      transform: translate(-50%, -50%); /* Dịch chấm đến giữa */
      background-color: #858585;
    }
  }
`

export const ContactDetail = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;
  height: 18px;
`
export const Arrow = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  top: 20px;
  right: -10px;
  border-radius: 50%;
  background-color: #f2f2f2;
  width: 24px;
  height: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    > img {
      transform: rotate(180deg);
    }
  }
`
export const ArrowContainer = styled.div`
  width: auto;
  .hidden {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-in-out;
  }
`

export const SmallNav = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  top: 25px;
`
export const ArrowPre = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  background-color: #f2f2f2;
  width: 24px;
  height: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    > img {
    }
  }
`
export const LogoSmall = styled.div`
  width: auto;
  cursor: pointer;
`
