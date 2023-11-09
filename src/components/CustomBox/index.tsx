import React from 'react'
import { useHistory } from 'react-router-dom'
import PlayTriangleLogo from 'assets/images/play-triangle.svg'
import * as S from './style'

interface Props {
    link: string,
    url: string,
    title: string,
    sub: string,
}

const CustomBox = (props: Props) => {
    const {link, url, title, sub} = props
    const navigate = useHistory();
    const handleNavigate = () => {
        navigate.push(`${link}`)
    }
  return (
    <S.Container2 onClick={handleNavigate}>
        <S.Roomgame src={url} width={202} preview={false}/>
        <S.Mask>
            <S.PlayContainer>
                <S.Roomgame src={PlayTriangleLogo} width={20} preview={false} />
            </S.PlayContainer>
        </S.Mask>
        <S.TextWrapper>
            <span>{title}</span>
            <span>{sub}</span>
        </S.TextWrapper>
    </S.Container2>
  )
}

export default CustomBox