import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Image } from 'antd'

import useWindowSize, { Size } from 'hooks/useWindowSize'

import Menu from 'components/Menu'
import NarBar from 'components/Navbar'
import Banner from 'assets/images/girl-2.png'

/** Style */
import * as S from './style'

interface Props {
  apr?: any
}

const VipPage: React.FC<Props> = () => {
  const history = useHistory()
  const [backgroundColor, setBackgroundColor] = useState('transparent')
  const size: Size = useWindowSize()
  const isMobile = size.width && size.width < 600

  const openTab = (link) => {
    window.open(link)
  }
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setBackgroundColor('#fff')
    } else {
      setBackgroundColor('transparent')
    }
  }
  window.addEventListener('scroll', handleScroll)

  return (
    <S.Wrapper>
      <Menu />

      <S.Header>
        <NarBar isShow={false} backgroundColor={backgroundColor} />

        <S.ContainerWrapper>
          <span>VipPage</span>
        </S.ContainerWrapper>
      </S.Header>
    </S.Wrapper>
  )
}

export default React.memo(VipPage, (prevProps, nextProps) => prevProps.apr === nextProps.apr)
