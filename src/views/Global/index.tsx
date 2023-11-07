import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Image } from 'antd'

import useWindowSize, { Size } from 'hooks/useWindowSize'

import Menu from 'components/Menu'
import NarBar from 'components/Navbar'
import SlickSlider from 'components/Slider'
import Banner from 'assets/images/girl-2.png'

/** Style */
import * as S from './style'

interface Props {
  apr?: any
}

const Global: React.FC<Props> = () => {
  const history = useHistory()
  const size: Size = useWindowSize()
  const isMobile = size.width && size.width < 600

  const openTab = (link) => {
    window.open(link)
  }

  return (
    <S.Wrapper>
      <Menu />
      <S.ContainerWrapper>
        <S.Header>
          <NarBar />
        </S.Header>
        <S.ContentContainer>
          <S.Content>
            <h1>Casino tiền điện tử được cấp phép đầu tiên trên thế giới</h1>
            <p className='subContent'>Hãy bắt đầu hành trình của bạn với khoản tiền 20% lên đến 10.000USDT</p>

            <S.Regis>
              <Button className="register" size="large" type="primary" danger onClick={() => history.push(`register`)}>
                Đăng ký
              </Button>
            </S.Regis>
            <p className='subDetail'>Tận hưởng tốc độ giao dịch hàng đầu trong ngành</p>
          </S.Content>
          <S.Banner>
            <Image src={Banner} width={788} />
          </S.Banner>
        </S.ContentContainer>
        <SlickSlider />
      </S.ContainerWrapper>
    </S.Wrapper>
  )
}

export default React.memo(Global, (prevProps, nextProps) => prevProps.apr === nextProps.apr)
