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
    return <Button className="prev-arrow" onClick={onClick} />
  }

  const SampleNextArrow = (props) => {
    const { onClick } = props
    return <Button className="next-arrow" onClick={onClick} />
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    swipeToSlide: true,
  }

  return (
    //   <S.Container onClick={() => history.push(`${link}`)}>
    //     <S.Element>
    //       <Image className="sidebar_icon" src={url} width={32} height={32} preview={false} />
    //       <S.VipTitle>
    //         <p>{title}</p>
    //         <p>{subTitle}</p>
    //         <span>{details}</span>
    //       </S.VipTitle>
    //     </S.Element>
    //   </S.Container>

    <S.Box>
      <S.Container>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </S.Container>
    </S.Box>
  )
}

export default SlickSlider
