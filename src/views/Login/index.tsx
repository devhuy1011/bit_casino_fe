import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import useWindowSize, { Size } from 'hooks/useWindowSize'
import LogoB from 'assets/logo/big_logo.png'
import Foxy from 'assets/signup/metamask.svg'
import Google from 'assets/signup/google-oauth2.svg'

import Menu from 'components/Menu'
import { Image, Button, Input, Checkbox } from 'antd'

/** Style */
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import * as S from './style'

interface Props {
  apr?: any
}

const Login: React.FC<Props> = () => {
  const history = useHistory()
  const [isCheck, setIsCheck] = useState(false)
  const size: Size = useWindowSize()
  const isMobile = size.width && size.width < 600

  const openTab = (link) => {
    window.open(link)
  }
  const onChange = (e: CheckboxChangeEvent) => {
    // console.log(`check = ${e.target.checked}`)
    setIsCheck(e.target.checked)
  }

  return (
    <S.Wrapper>
      <S.Title>
        <S.Logo>
          <Image src={LogoB} width={150} preview={false} />
        </S.Logo>
        <hr />
        <h1> Đăng Nhập</h1>
        <hr />
        <S.Button>
          <S.Metamask>
            <Image src={Foxy} width={20} height={18} preview={false} />
            Metamask
          </S.Metamask>
          <S.Google>
            <Image src={Google} width={20} height={18} preview={false} />
            Google
          </S.Google>
          <S.Plus>
            <p> + </p>
          </S.Plus>
        </S.Button>
        <hr />
        <S.Span>
          <span> Hoặc </span>
        </S.Span>
        <hr />
        <S.Form>
          <S.Account>
            <S.Description>Tên người dùng hay email</S.Description>
            <Input placeholder="Nhập ccm email vào đây" />
          </S.Account>
          <hr />
          <S.Password>
            <S.Description>Mật khẩu</S.Description>
            <Input placeholder="Nhập nốt cái pát guột vào đây" />
          </S.Password>
          <hr />
          <S.Check>
            <Checkbox defaultChecked={false} onChange={onChange}>
              Tôi sử dụng Google Authenticator
            </Checkbox>
          </S.Check>
          <hr />
          {isCheck ? (
            <S.Auth>
              <hr />
              <S.Description>Mã Google Authenticator</S.Description>
              <Input placeholder="Còn cái mã nữa" />
              <hr />
            </S.Auth>
          ) : null}
          <Button disabled type="primary" danger>
            <S.Login>
              Đăng nhập
            </S.Login>
          </Button>
        </S.Form>
      </S.Title>
      <S.Background>
        <h1>Abc xyZ</h1>
      </S.Background>
    </S.Wrapper>
  )
}

export default React.memo(Login, (prevProps, nextProps) => prevProps.apr === nextProps.apr)
