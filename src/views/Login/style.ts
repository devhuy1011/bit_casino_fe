import styled from 'styled-components'
import color from 'style/color'
import background from 'assets/signup/bg-login.png'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
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
  opacity: 0.7;
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
  height: auto;
  padding: 32px;
  top: 0;
  right: 0;
  display: block;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
`
export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > hr {
    border: none;
  }
  > h1 {
    margin: 0 0 4.25rem;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 500;
    text-align: center;
  }
`
export const BannerImg = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
`
export const RightFooter = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: start;
  justify-content: center;
  padding: 0 !important;
  margin: 0 !important;
  list-style-type: none;
`
export const Left = styled.div`
  display: grid;
  gap: 0.75rem;
  grid-auto-flow: column;
  max-width: 14.5rem;
`
export const LeftImg = styled.div`
  display: block;
  width: 2.5rem;
  height: auto;
`
export const LeftTitle = styled.div`
  display: grid;
  gap: 0.75rem;
  > h2 {
    margin: 0;
    font-size: 1.2rem;
    line-height: 1.75rem;
    font-weight: 500;
  }
  > p {
    margin: 0;
    font-size: 0.8rem;
    line-height: 1rem;
  }
`
export const Center = styled.div`
  display: grid;
  gap: 0.75rem;
  grid-auto-flow: column;
  max-width: 14.5rem;
`
export const CenterImg = styled.div`
  display: block;
  width: 2.5rem;
  height: auto;
`
export const CenterTitle = styled.div`
  display: grid;
  gap: 0.75rem;
  > h2 {
    margin: 0;
    font-size: 1.2rem;
    line-height: 1.75rem;
    font-weight: 500;
  }
  > p {
    margin: 0;
    font-size: 0.8rem;
    line-height: 1rem;
  }
`
export const Right = styled.div`
  display: grid;
  gap: 0.75rem;
  grid-auto-flow: column;
  max-width: 14.5rem;
`
export const RightImg = styled.div`
  display: block;
  width: 2.5rem;
  height: auto;
`
export const RightTitle = styled.div`
  display: grid;
  gap: 0.75rem;
  > h2 {
    margin: 0;
    font-size: 1.2rem;
    line-height: 1.75rem;
    font-weight: 500;
  }
  > p {
    margin: 0;
    font-size: 0.8rem;
    line-height: 1rem;
  }
`
