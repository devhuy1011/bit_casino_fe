import color from 'style/color'
import styled from 'styled-components'

export const Box = styled.div`
  width: auto;
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
`
export const Container = styled.div`
  width: auto;
  margin: 15px auto;
  span {
    color: #858585;
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 400;
  }
  p {
    font-size: 0.9rem;
    line-height: 1.5rem;

    margin: 0;
  }
`
export const Element = styled.div`
  width: 180px;
  display: flex;
  align-items: center;

  .sidebar_icon {
    background-color: #e0e0e0b3;
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
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  span {
    color: #B3804A;
    font-size: 12px;
    line-height: 1rem;
    font-weight: 200;
  }
`
