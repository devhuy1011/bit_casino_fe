import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useHistory } from 'react-router-dom'

import { Image, Button } from 'antd'

import * as S from './style'

interface Props {
  url?: string
  title?: string
  link?: string
  subTitle?: string
  details?: string
}

const SlickSlider: React.FC<Props> = ({ url, title, link, subTitle, details }) => {
  const history = useHistory()

  const SamplePrevArrow = (props) => {
    const { onClick } = props
    console.log('abc', onClick)
    return <Button className="prev-arrow" onClick={onClick} />
  }

  const SampleNextArrow = (props) => {
    const { onClick } = props
    return <Button className="next-arrow" onClick={onClick} />
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    swipeToSlide: true,
  }

  return (
    <S.Box>
      <S.Container>
        <Slider {...settings}>
          <S.Container onClick={() => history.push(`${link}`)}>
            <S.Element>
              <Image className="sidebar_icon" src={url} width={32} height={32} preview={false} />
                <p>{title}</p>
                <p>{subTitle}</p>
                <span>{details}</span>
            </S.Element>
          </S.Container>
        </Slider>
      </S.Container>
    </S.Box>
  )
}

export default SlickSlider
