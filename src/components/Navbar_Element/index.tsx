import React from 'react'
import { useHistory } from 'react-router-dom'

import { Image } from 'antd'

import * as S from './style'

interface Props {
  url?: string
  title?: string
  link?: string
  subTitle?: string
  details?: string
}

const NavbarElement: React.FC<Props> = ({ url, title, link, subTitle, details }) => {
  const history = useHistory()

  return (
    <S.Box>
      <S.Container onClick={() => history.push(`${link}`)}>
        <S.Element>
          <Image className="sidebar_icon" src={url} width={32} height={32} preview={false} />
          <S.VipTitle>
            <p>{title}</p>
            <p>{subTitle}</p>
            <span>{details}</span>
          </S.VipTitle>
        </S.Element>
      </S.Container>
    </S.Box>
  )
}

export default NavbarElement
