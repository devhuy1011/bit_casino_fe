import styled from 'styled-components'
import Arrow from 'assets/logo/Arrow.png'
import { Image } from 'antd'

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 100px;
`
export const Container = styled.div`
  max-width: 1488px;
  display: flex;
  justify-content: space-between;
`
export const Item = styled.div`
  width: 220px;
  display: flex;
  flex-direction: column;
  .title {
    color: #1b1414;
    font-size: 14px;
  }
  p {
    color: #858585;
    font-size: 12px;
  }
  .contain {
    width: 195px;
    border: 1px solid #f2f2f2;
    background-color: #f2f2f2;
    text-align: center;
    padding: 5px;
    border-radius: 5px;
    margin-top: 10px;
    span {
      color: #858585;
      font-size: 16px;
    }
    .ant-select-selector {
      width: 195px;
      border: 1px solid #f2f2f2;
      background-color: #f2f2f2;
      text-align: center;
      padding: 5px;
      border-radius: 5px;
      margin-top: 10px;
      span {
        color: #858585;
        font-size: 16px;
      }
    }
    :where(.css-dev-only-do-not-override-2i2tap).ant-select-single:not(.ant-select-customize-input)
      .ant-select-selector {
      width: 195px;
      border: 1px solid #f2f2f2;
      background-color: #f2f2f2;
      text-align: center;
      padding: 5px;
      border-radius: 5px;
      margin-top: 10px;
      span {
        color: #858585;
        font-size: 16px;
      }
    }
  }
`
