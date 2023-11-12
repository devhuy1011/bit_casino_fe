import React from 'react'
import { useHistory } from 'react-router-dom'
import PlayTriangleLogo from 'assets/images/play-triangle.svg'
import * as S from './style'

interface Props {
  link: string
  url: string
  title: string
  sub: any
}

const EventCard = (props: Props) => {
  const { link, url, title, sub } = props
  const navigate = useHistory()
  return (
    <S.Container>
      <S.Roomgame src={url} width={272} height={316} preview={false} />
      <S.Mask>
        <p>{title}</p>
      </S.Mask>
    </S.Container>
  )
}

export default EventCard
