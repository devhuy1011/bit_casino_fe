import React from 'react'
import { useHistory } from 'react-router-dom'

import useWindowSize, { Size } from 'hooks/useWindowSize'

import Menu from 'components/Menu'

/** Style */
import * as S from './style'

interface Props {
  apr?: any
}

const SignIn: React.FC<Props> = () => {
  const history = useHistory()
  const size: Size = useWindowSize()
  const isMobile = size.width && size.width < 600

  const openTab = (link) => {
    window.open(link)
  }

  return (
    <S.Wrapper>
      <Menu />
      <S.Header>
        <h1>Hello World!!</h1>
      </S.Header>
    </S.Wrapper>
  )
}

export default React.memo(SignIn, (prevProps, nextProps) => prevProps.apr === nextProps.apr)