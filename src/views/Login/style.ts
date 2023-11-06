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
    opacity: 0.35;
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
export const Logo = styled.div`
  max-width: auto;
  height: auto;
`
export const Footer = styled.div`
  width: 100%;
  height: auto;
  > a {
    font-size: 15px;
    text-decoration: none;
    color: rgb(214, 55, 65);
    opacity: 0.8;
  }
  > hr {
    border: none;
  }
`
export const Register = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 10px;
  align-items: center;
  > p {
    font-size: 13px;
    opacity: 0.75;
  }
  > a {
    font-size: 13px;
    text-decoration: none;
    opacity: 0.75;
    color: rgb(214, 55, 65);
  }
`
export const Intro = styled.div`
  width: 340px;
  height: 48px;
  display: block;
  opacity: .7;
  > p {
    font-size: 12px;
    gap: 10px;
    > a {
      text-decoration: none;
      gap: 10px;
      color: #000;
    }
  }
`
export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
`
export const Container = styled.div`
  width: 100%px;
  height: auto;
`
export const BannerImg = styled.div`
  width: 100%;
  height: auto;
  display: block;
`
export const RightFooter = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`
export const Left = styled.div`
  width: 35%;
  height: auto;
  display: flex;
`
export const LeftImg = styled.div`
width: 40px;
height: 40px;
`
export const LeftTitle = styled.div`
  width: 35%;
  height: auto;
  display: block;
`
export const Center = styled.div`
width: 35%;
height: auto;
display: flex;
`
export const CenterImg = styled.div`
width: 40px;
height: 40px;
`
export const CenterTitle = styled.div`
width: 35%;
height: auto;
display: block;
`
export const Right = styled.div`
width: 35%;
height: auto;
display: flex;
`
export const RightImg = styled.div`
width: 40px;
height: 40px;
`
export const RightTitle = styled.div`
width: 35%;
height: auto;
display: block;
`
