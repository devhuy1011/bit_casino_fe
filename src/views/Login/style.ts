import styled from 'styled-components'
import color from 'style/color'
import background from 'assets/signup/bg-login.png'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  button {
    border: none;
  }
`
export const Title = styled.div`
  min-width: 380px;
  padding: 20px;
  height: 100%;
  button {
    border: none;
  }
  > hr {
    border: none;
  }
`
export const Form = styled.div`
  width: 100%;
  height: auto;
  > hr {
    border: none;
  }
  > button {
    width: 100%;
    height: 38px;
  }
  .ant-btn-primary.ant-btn-dangerous:disabled {
    color: #fff;
    background-color: rgb(214, 55, 65);
    opacity: .35;
  }
`
export const Account = styled.div`
  width: 100%;
  height: 72px;
  > input {
    width: 100%;
    height: 40px;
    padding: 0px 16px;
    font-size: 15px;
    background-color: #f2f2f2;
  }
`
export const Password = styled.div`
  width: 100%;
  height: 72px;
  > input {
    width: 100%;
    height: 40px;
    padding: 0px 16px;
    font-size: 15px;
    background-color: #f2f2f2;
  }
`
export const Description = styled.div`
  width: 100%;
  height: 32px;
  padding: 0px 0px 8px;
  color: rgb(133, 133, 133);
`
export const Check = styled.div`
  width: 100%;
  height: 24px;
  gap: 5px;
  .ant-checkbox-wrapper {
    .ant-checkbox-checked .ant-checkbox-inner {
      background-color: red;
    }
    &:hover {
      .ant-checkbox-checked .ant-checkbox-inner {
        background-color: red;
      }
    }
  }
`
export const Auth = styled.div`
  width: 100%;
  > hr {
    border: none;
  }
  > input {
    width: 100%;
    height: 40px;
    padding: 0px 16px;
    font-size: 15px;
    background-color: #f2f2f2;
  }
`
export const Login = styled.div`
  width: 100%;
  height: 40px;
`
export const Button = styled.div`
  width: 340px;
  height: 40px;
  display: flex;
  gap: 3px;
  button {
    border: none;
  }
`
export const Metamask = styled.div`
  width: 150px;
  height: 40px;
  padding: 5px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e5e7eb;
  gap: 3px;
  font-size: 15px;
`
export const Google = styled.div`
  width: 150px;
  height: 40px;
  padding: 5px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e5e7eb;
  gap: 3px;
  font-size: 15px;
`
export const Plus = styled.div`
  width: 44px;
  height: 40px;
  padding: 5px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e5e7eb;
  gap: 3px;
  font-size: 15px;
  background-color: #f2f2f2;
`
export const Span = styled.div`
  width: 100%;
  text-align: center;
  justify-items: center;
`
export const Background = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
`
export const Logo = styled.div`
  max-width: auto;
  height: auto;
`
