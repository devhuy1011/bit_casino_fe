import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import BigLogo from 'assets/logo/big_logo.png'
import SmallLogo from 'assets/logo/small_logo.png'
import EstLogo from 'assets/images/estcube.svg'
import VipLogo from 'assets/images/sidebar_vip.png'
import SlotLogo from 'assets/images/sidebar_video-slots.png'
import JackPotLogo from 'assets/images/sidebar_jackpot-slots.png'
import BaccaratLogo from 'assets/images/sidebar_baccarat.png'
import HighRollLogo from 'assets/images/sidebar_high_roller.png'
import TurboLogo from 'assets/images/sidebar_turbo_games.png'
import VirtualLogo from 'assets/images/sidebar_virtual-sports.png'
import AllGameLogo from 'assets/images/sidebar_all-games.png'
import LiveBlackLogo from 'assets/images/sidebar_live-blackjack.png'
import LiveRouteLogo from 'assets/images/sidebar_live-roulette.png'
import LiveGameLogo from 'assets/images/sidebar_live-game-shows.png'
import BombayLogo from 'assets/images/sidebar_bombay.png'
import TournamentLogo from 'assets/images/sidebar_tournaments.png'
import PromoLogo from 'assets/images/sidebar_promo.png'
import BonusLogo from 'assets/images/sidebar_bonus-buyin.png'
import LoyaltyLogo from 'assets/images/sidebar_loyalty.png'
import RafLogo from 'assets/images/sidebar_raf.png'
import LiveRptLogo from 'assets/images/sidebar_live-rtp.png'
import ArrowLogo from 'assets/logo/Arrow.png'

import NavbarElement from 'components/Navbar_Element'
import { Image } from 'antd'

import * as S from './style'

interface Props {
  isShow?: boolean
}

const dataNav1 = [
  {
    title: 'Slots',
    url: SlotLogo,
    link: '/slot',
  },
  {
    title: 'Jackpot Slot',
    url: JackPotLogo,
    link: '/jackpot',
  },
  {
    title: 'Baccarat',
    url: BaccaratLogo,
    link: '/baccarat',
  },
  {
    title: 'Người đặt cược',
    subTitle: 'lớn (High Roller)',
    url: HighRollLogo,
    link: '/high_roll',
  },
  {
    title: 'Crash Game',
    url: TurboLogo,
    link: '/crash_game',
  },
  {
    title: 'Thể thao ảo',
    url: VirtualLogo,
    link: '/virtual_sport',
  },
  {
    title: 'Tất cả các trò chơi',
    url: AllGameLogo,
    link: '/all_games',
  },
]

const dataNav2 = [
  {
    title: 'Baccarat trực tiếp',
    url: BaccaratLogo,
    link: '/baccarat_live',
  },
  {
    title: 'Blackjack trực tiếp',
    url: LiveBlackLogo,
    link: '/blackjack_live',
  },
  {
    title: 'Ruolette trực tiếp',
    url: LiveRouteLogo,
    link: '/roulette_live',
  },
  {
    title: 'Chương trình trò',
    subTitle: 'chơi trực tiếp',
    url: LiveGameLogo,
    link: '/game_live',
  },
  {
    title: 'Tất cả trò chơi trực',
    subTitle: 'tiếp',
    url: AllGameLogo,
    link: '/all_game_live',
  },
]

const dataNav3 = [
  {
    title: 'Bombay Club',
    details: 'Đại lý trực tiếp của High Roller',
    url: BombayLogo,
    link: '/bombay',
  },
  {
    title: 'Giải đấu',
    url: TournamentLogo,
    link: '/tournament',
  },
  {
    title: 'Ưu đãi',
    url: PromoLogo,
    link: '/promo',
  },
  {
    title: 'Thưởng khi mua',
    subTitle: 'tính năng',
    url: BonusLogo,
    link: '/bonus',
  },
  {
    title: 'Khách hàng thân',
    subTitle: 'thiết',
    url: LoyaltyLogo,
    link: '/loyalty',
  },
  {
    title: 'Giới thiệu một',
    subTitle: 'người bạn',
    url: LoyaltyLogo,
    link: '/loyalty',
  },
  {
    title: 'Khách hàng thân',
    subTitle: 'thiết',
    url: RafLogo,
    link: '/raf',
  },
  {
    title: 'Nhà cung cấp',
    url: LiveRptLogo,
    link: '/rpt',
  },
  {
    title: 'Sportsbook',
    url: BaccaratLogo,
    link: '/sports_book',
  },
]

const Menu: React.FC<Props> = ({ isShow }) => {
  const history = useHistory()
  const [isHide, setIsHide] = useState(false)

  const handleHideNavbar = () => {
    setIsHide(!isHide)
  }

  return isHide ? (
    <S.SmallNav>
      <S.LogoSmall onClick={() => history.push('/')}>
        <Image src={SmallLogo} width={30} height={40} preview={false} />
      </S.LogoSmall>
      <S.ArrowContainer onClick={handleHideNavbar}>
        <S.ArrowPre>
          <Image src={ArrowLogo} width={12} height={12} preview={false} />
        </S.ArrowPre>
      </S.ArrowContainer>
    </S.SmallNav>
  ) : (
    <S.Box>
      <S.Container>
        <S.ArrowContainer onClick={handleHideNavbar}>
          <S.Arrow className="hidden">
            <Image src={ArrowLogo} width={12} height={12} preview={false} />
          </S.Arrow>
        </S.ArrowContainer>
        <S.Logo onClick={() => history.push('/')}>
          <Image src={BigLogo} width={150} preview={false} />
        </S.Logo>
        <hr />
        <S.PartnerContainer>
          <S.Partner>
            <div>
              <img src={EstLogo} alt="Your SVG" width={24} height={24} />
            </div>
            <S.PartnerDetails>
              <span>Đối tác chính thức của</span>
              <p>ESTCube-2</p>
            </S.PartnerDetails>
          </S.Partner>
          <hr />
          <S.PartnerMe>
            <span>Đối tác của chúng tôi</span>
          </S.PartnerMe>
        </S.PartnerContainer>
        <hr />
        <S.VipContainer>
          <S.Vip onClick={() => history.push('/vip')}>
            <Image className="sidebar_icon" src={VipLogo} width={24} height={24} preview={false} />
            <S.VipTitle>
              <p>VIP</p>
            </S.VipTitle>
          </S.Vip>
        </S.VipContainer>
        <p className="game">Trò chơi</p>
        {dataNav1.map((e) => (
          <NavbarElement url={e.url} title={e.title} link={e.link} subTitle={e.subTitle} />
        ))}
        <hr className="hr-line" />
        <p className="game">Casino trực tuyến</p>
        {dataNav2.map((e) => (
          <NavbarElement url={e.url} title={e.title} link={e.link} subTitle={e.subTitle} />
        ))}
        <hr className="hr-line" />
        {dataNav3.map((e) => (
          <NavbarElement url={e.url} title={e.title} link={e.link} subTitle={e.subTitle} details={e.details} />
        ))}
        <hr className="hr-line" />

        <S.ContactContainer>
          <S.Contact>
            <S.ContactDetail onClick={() => history.push('/help_center')}>
              <span>Trung tâm trợ giúp</span>
            </S.ContactDetail>
            <S.ContactDetail>
              <span>Trò chuyện trực tuyến</span>
            </S.ContactDetail>
            <S.ContactDetail onClick={() => history.push('/help-terms-and-conditions')}>
              <span>Điều khoản và điều kiện</span>
            </S.ContactDetail>
            <S.ContactDetail onClick={() => history.push('/about-us')}>
              <span>Về chúng tôi</span>
            </S.ContactDetail>
            <S.ContactDetail onClick={() => history.push('/news')}>
              <span>Tin tức</span>
            </S.ContactDetail>
          </S.Contact>
        </S.ContactContainer>
      </S.Container>
    </S.Box>
  )
}

export default Menu
