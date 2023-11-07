import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import useWindowSize, { Size } from 'hooks/useWindowSize'
import LogoB from 'assets/logo/big_logo.png'
import Foxy from 'assets/signup/metamask.svg'
import Google from 'assets/signup/google-oauth2.svg'
import Banner from 'assets/signup/Log-in4.png'
import ImgLeft from 'assets/signup/plane (1) 2.png'
import ImgCenter from 'assets/signup/slots.png'
import ImgRight from 'assets/signup/bombay-club-icon.png'

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
            <S.Login>Đăng nhập</S.Login>
          </Button>
          <hr />
        </S.Form>
        <S.Footer>
          <a href="/Register">Quên mật khẩu?</a>
          <hr />
          <S.Register>
            <p>Bạn không có tài khoản? </p>
            <a href="/Register"> Tạo tài khoản</a>
          </S.Register>
          <S.Intro>
            <p>
              Trang web này được bảo vệ bởi reCAPCHA và
              <a href="/about">Chính sách quyền riêng tư</a>
              và
              <a href="/contactUs">Điều khoản dịch vụ</a>
              được áp dụng của google.
            </p>
          </S.Intro>
        </S.Footer>
      </S.Title>
      <S.Background>
        <S.Container>
          <S.BannerImg>
            <Image src={Banner} width={647} height={667} preview={false} />
          </S.BannerImg>
          <hr />
          <h1>Thưởng thức viện chơi game cao cấp</h1>
          <S.RightFooter>
            <S.Left>
              <S.LeftImg>
                <Image src={ImgLeft} width={40} height={40} preview={false} />
              </S.LeftImg>
              <S.LeftTitle>
                <h2>Trải nghiệm VIP</h2>
                <p>Truy cập vào các sự kiện chỉ dành cho người được mời vào thảm đỏ</p>
              </S.LeftTitle>
            </S.Left>
            <S.Center>
              <S.CenterImg>
                <Image src={ImgCenter} width={40} height={40} preview={false} />
              </S.CenterImg>
              <S.CenterTitle>
                <h2>Hơn 3600 trò chơi</h2>
                <p>Khám phá menu với hơn 3.600 trò slot, trò chơi trên bàn và trò chơi trực tiếp</p>
              </S.CenterTitle>
            </S.Center>
            <S.Right>
              <S.RightImg>
                <Image src={ImgRight} width={40} height={40} preview={false} />
              </S.RightImg>
              <S.RightTitle>
                <h2>Câu lạc bộ BomBay</h2>
                <p>Khám phá một bộ trò chơi trực tiếp độc quyền với giới hạn đặt cược vô song</p>
              </S.RightTitle>
            </S.Right>
          </S.RightFooter>
        </S.Container>
      </S.Background>
    </S.Wrapper>
  )
}

export default React.memo(Login, (prevProps, nextProps) => prevProps.apr === nextProps.apr)
