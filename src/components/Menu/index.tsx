import React from 'react'

import BigLogo from 'assets/logo/big_logo.png'
import { Image } from 'antd'

import * as S from './style'

interface Props {
  isShow?: boolean
}

const Menu: React.FC<Props> = ({ isShow }) => {
  return (
    <S.Box>
      <S.Container>
        <S.Logo>
          <Image src={BigLogo} width={150} preview={false} />
        </S.Logo>
      </S.Container>
    </S.Box>
  )
}

export default Menu
