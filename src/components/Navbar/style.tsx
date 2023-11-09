import color from 'style/color'
import styled from 'styled-components'

export const BoxContainer = styled.div`
  .flex-box {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .default-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 1500px){
      padding-left: 2rem;
      padding-right: 2rem;
    }
    min-width: 1200px;
  }
  .sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
    z-index: 10;
  }
  .none {
    position: static;
  }
`

export const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    border-left: none;
    width: 500px;
    background-color: #f2f2f2;
    :where(.css-dev-only-do-not-override-2i2tap).ant-input:hover {
      border-color: transparent;
    }
    :where(.css-dev-only-do-not-override-2i2tap).ant-input:focus,
    :where(.css-dev-only-do-not-override-2i2tap).ant-input:focus-within {
      border-color: transparent;
      box-shadow: none;
      outline: transparent;
    }
  }
  .ant-input-group .ant-input-group-addon {
    background-color: #f2f2f2;
  }
`
export const Container = styled.div`
  width: 100%;
  padding: 16px 0px;
  .hidden {
    display: none;
  }
  .active {
    display: block;
  }
`
export const ButtonHandlerContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button span {
    font-size: 14px;
  }
  .login {
    margin-right: 15px;
    border: 1px solid #686868;
    &:where(.css-dev-only-do-not-override-2i2tap).ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover {
      color: #000;
      border-color: #000;
      background-color: #80808052;
    }
  }
  .register {
    background-color: #d63741;
  }
`
