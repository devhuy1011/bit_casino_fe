import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Image } from 'antd'

import useWindowSize, { Size } from 'hooks/useWindowSize'

import Menu from 'components/Menu'
import NarBar from 'components/Navbar'
import SlickSlider from 'components/Slider'
import Banner from 'assets/images/girl-2.png'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import EvoLogo from 'assets/images/evolution.svg'
import BomLogo from 'assets/images/bombay-live.svg'
import OneLogo from 'assets/images/onetouch.svg'
import PragmaticLogo from 'assets/images/pragmatic-play.svg'
import PaygoLogo from 'assets/images/playngo.svg'
import PushLogo from 'assets/images/push-gaming.svg'
import NoLimitLogo from 'assets/images/nolimit-city.svg'
import HackSawLogo from 'assets/images/hacksaw-gaming.svg'
import CaletaLogo from 'assets/images/caleta.svg'
import PlayTriangleLogo from 'assets/images/play-triangle.svg'
import BombayBaccaratImg from 'assets/images/BombayClub-Speed-Baccarat_490x368px.png'
import BombayBlackJackImg from 'assets/images/BombayClubBlackjack_490x368px.png'
import BombayRouletteImg from 'assets/images/BombayClubRoulette_490x368px.png'
import CustomBox from 'components/CustomBox'
import { NEW_GAME } from './constant'

/** Style */
import * as S from './style'


interface Props {
  apr?: any
}

const dataNav1 = [
  {
    url: EvoLogo,
    link: '/evolution',
  },
  {
    url: BomLogo,
    link: '/bombay',
  },
  {
    url: OneLogo,
    link: '/ontouch',
  },
  {
    url: PragmaticLogo,
    link: '/pragmatic',
  },
  {
    url: PaygoLogo,
    link: '/paygo',
  },
  {
    url: PushLogo,
    link: '/push',
  },
  {
    url: NoLimitLogo,
    link: '/no-limit',
  },
  {
    url: HackSawLogo,
    link: '/no-limit',
  },
  {
    url: CaletaLogo,
    link: '/caleta',
  },
  {
    url: EvoLogo,
    link: '/evolution',
  },
  {
    url: BomLogo,
    link: '/bombay',
  },
  {
    url: OneLogo,
    link: '/ontouch',
  },
  {
    url: PragmaticLogo,
    link: '/pragmatic',
  },
  {
    url: PaygoLogo,
    link: '/paygo',
  },
  {
    url: PushLogo,
    link: '/push',
  },
  {
    url: NoLimitLogo,
    link: '/no-limit',
  },
  {
    url: HackSawLogo,
    link: '/no-limit',
  },
  {
    url: CaletaLogo,
    link: '/caleta',
  },
]

const gameRooms = [
  {
    title: 'Lotus Vietnamese...',
    sub: 'evolution',
    tag: 'special',
    url: BombayBaccaratImg,
    link: '/room1',
  },
  {
    title: 'Bombay Club...',
    sub: 'evolution',
    tag: 'trending',
    url: BombayBlackJackImg,
    link: '/room2',
  },
  {
    title: 'Spooky Baccarat',
    sub: 'evolution',
    tag: 'high-rate',
    url: BombayRouletteImg,
    link: '/room3',
  },
  {
    title: 'Lotus Vietnamese...',
    sub: 'evolution',
    tag: 'special',
    url: BombayBaccaratImg,
    link: '/room1',
  },
  {
    title: 'Bombay Club...',
    sub: 'evolution',
    tag: 'trending',
    url: BombayBlackJackImg,
    link: '/room2',
  },
  {
    title: 'Spooky Baccarat',
    sub: 'evolution',
    tag: 'high-rate',
    url: BombayRouletteImg,
    link: '/room3',
  },
  {
    title: 'Lotus Vietnamese...',
    sub: 'evolution',
    tag: 'special',
    url: BombayBaccaratImg,
    link: '/room1',
  },
  {
    title: 'Bombay Club...',
    sub: 'evolution',
    tag: 'trending',
    url: BombayBlackJackImg,
    link: '/room2',
  },
  {
    title: 'Spooky Baccarat',
    sub: 'evolution',
    tag: 'high-rate',
    url: BombayRouletteImg,
    link: '/room3',
  },
]

const Global: React.FC<Props> = () => {
  const history = useHistory()
  const size: Size = useWindowSize()
  const isMobile = size.width && size.width < 600

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
    infinite: false,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 9,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    swipeToSlide: true,
  }
  const settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 7,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    swipeToSlide: true,
  }

  const openTab = (link) => {
    window.open(link)
  }

  return (
    <S.Wrapper>
      <Menu />

      <S.Header>
        <NarBar />

        <S.ContainerWrapper>
          <S.ContentContainer>
            <S.Content>
              <h1>Casino tiền điện tử được cấp phép đầu tiên trên thế giới</h1>
              <p className="subContent">Hãy bắt đầu hành trình của bạn với khoản tiền 20% lên đến 10.000USDT</p>

              <S.Regis>
                <Button
                  className="register"
                  size="large"
                  type="primary"
                  danger
                  onClick={() => history.push(`register`)}
                >
                  Đăng ký
                </Button>
              </S.Regis>
              <p className="subDetail">Tận hưởng tốc độ giao dịch hàng đầu trong ngành</p>
            </S.Content>
            <S.Banner>
              <Image src={Banner} width={788} preview={false} />
            </S.Banner>
          </S.ContentContainer>

          <S.Box>
            <S.Container>
              <Slider {...settings}>
                {dataNav1.map((data) => (
                  <S.Container onClick={() => history.push(`${data.link}`)}>
                    <Image className="sidebar_icon" src={data.url} preview={false} />
                  </S.Container>
                ))}
              </Slider>
            </S.Container>
          </S.Box>
          <h1>Trò chơi casino trực tuyến</h1>
          <S.Container2>
            <Slider {...settings2}>
              {gameRooms.map((data) => (
                <S.Container2 onClick={() => history.push(`${data.link}`)}>
                  <Image className="roomGame" src={data.url} width={202} preview={false} />
                  <S.OverLay className="mask">
                    <S.PlayContainer>
                      <Image className="roomGame" src={PlayTriangleLogo} width={20} preview={false} />
                    </S.PlayContainer>
                  </S.OverLay>
                  <p>{data.title}</p>
                  <p>{data.sub}</p>
                </S.Container2>
              ))}
            </Slider>
          </S.Container2>
          <h1>Trò chơi casino với Live RTF</h1>
          <S.Container2>
            <Slider {...settings2}>
                {gameRooms.map((data) => (
                  <CustomBox link ={data.link} url={data.url} title={data.title} sub={data.sub}/>
                ))
                }
            </Slider>
          </S.Container2>
          <h1>Trò chơi mới bạn có thể thích</h1>
          <S.Container2>
            <Slider {...settings2}>
                {NEW_GAME.map((data) => (
                  <CustomBox link ={data.link} url={data.url} title={data.title} sub={data.sub}/>
                ))
                }
            </Slider>
          </S.Container2>
        </S.ContainerWrapper>
      </S.Header>
    </S.Wrapper>
  )
}

export default React.memo(Global, (prevProps, nextProps) => prevProps.apr === nextProps.apr)
