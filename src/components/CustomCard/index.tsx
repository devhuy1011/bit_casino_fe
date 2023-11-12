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

const CustomCard = (props: Props) => {
  const { link, url, title, sub } = props
  const navigate = useHistory()
  return (
    <S.Container>
      <S.Roomgame src={url} width={72} preview={false} />
      <p className="manager">{title}</p>
      <S.ContactContainer>
        <S.Contact>
          {sub.map((data) => (
            <S.ContactDetail>
              <span>{data}</span>
            </S.ContactDetail>
          ))}
        </S.Contact>
      </S.ContactContainer>
    </S.Container>
  )
}

export default CustomCard
