import color from 'style/color'
import styled from 'styled-components'

export const Box = styled.div`
  width: auto;
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
`

export const Container = styled.div`
  width: auto;
  padding: 1.25rem;
  background-color: #f2f2f2;

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
`

export const Logo = styled.div`
  width: 200px;
  margin-bottom: 40px;
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
