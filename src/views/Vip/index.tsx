import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Image, Radio, Tabs } from 'antd'
import type { RadioChangeEvent } from 'antd'

import useWindowSize, { Size } from 'hooks/useWindowSize'

import Menu from 'components/Menu'
import NarBar from 'components/Navbar'
import CustomCard from 'components/CustomCard'
import EventCard from 'components/EnventCard'
import Footer from 'components/Footer'

import Banner from 'assets/vip_image/vippage.png'
import HanSake from 'assets/vip_image/vip-handshake.png'

import { BENEFIT, IMAGE_GRID } from './constant'

/** Style */
import * as S from './style'

interface Props {
  apr?: any
}

const VipPage: React.FC<Props> = () => {
  const history = useHistory()
  const size: Size = useWindowSize()
  const isMobile = size.width && size.width < 600
  const [isHide, setIsHide] = useState(false)
  const [isBackgroundChange, setIsBackgroundChange] = useState(false)

  const openTab = (link) => {
    window.open(link)
  }
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsBackgroundChange(true)
    } else {
      setIsBackgroundChange(false)
    }
  }
  window.addEventListener('scroll', handleScroll)

  const onChange = (e: RadioChangeEvent) => {
    console.log(e.target.value)
  }

  return (
    <S.Wrapper>
      <S.WrapperContainer className={isHide ? 'default' : 'flex-box'}>
        {isHide ? (
          <S.MenuContainer className={isBackgroundChange ? 'white' : 'vip-position'}>
            <Menu
              isShow={isHide}
              isBackgroundChange={isBackgroundChange}
              handleHideNavbar={() => {
                setIsHide(!isHide)
              }}
            />
            <S.ButtonHandlerContainer className={isBackgroundChange ? 'default-slick' : 'vip-position'}>
              <Button className="login" size="large" block onClick={() => history.push(`login`)}>
                Đăng nhập
              </Button>
              <Button className="register" size="large" type="primary" danger onClick={() => history.push(`register`)}>
                Đăng ký
              </Button>
            </S.ButtonHandlerContainer>
          </S.MenuContainer>
        ) : (
          <Menu
            isShow={isHide}
            isBackgroundChange={isBackgroundChange}
            handleHideNavbar={() => {
              setIsHide(!isHide)
            }}
          />
        )}

        <S.Header>
          {isHide ? null : (
            <S.MenuContainer className={isBackgroundChange ? 'white-default' : 'vip-position'}>
              <S.ButtonHandlerContainer className={isBackgroundChange ? 'default-slick' : 'vip-position'}>
                <Button className="login" size="large" block onClick={() => history.push(`login`)}>
                  Đăng nhập
                </Button>
                <Button
                  className="register"
                  size="large"
                  type="primary"
                  danger
                  onClick={() => history.push(`register`)}
                >
                  Đăng ký
                </Button>
              </S.ButtonHandlerContainer>
            </S.MenuContainer>
          )}
          <S.ContainerWrapper>
            <S.ContentContainer>
              <S.Content>
                <h1 className="title">Bitcasino VIP: Tiền không thể mua được trải nghiệm</h1>
                <p className="subContent">
                  Chỉ dành cho những người chơi được mời, câu lạc bộ VIP luôn phấn đấu để đạt được sự xuất sắc trong các
                  dịch vụ, ưu đãi và sự kiện.
                </p>

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
              </S.Content>
              <S.Banner>
                <Image src={Banner} width={1120} preview={false} />
              </S.Banner>
            </S.ContentContainer>
          </S.ContainerWrapper>
          <S.WrapperContent>
            <S.CustomerService>
              <S.Content>
                <h1 className="title-customer">Cá nhân hoá dịch vụ</h1>
                <p className="subContent-customer">
                  Với đội ngũ quản lý tài khoản chuyên biệt đảm bảo rằng mọi thứ luôn ở tiêu chuẩn cao nhất, các thành
                  viên được hưởng tiền thưởng độc quyền, được mời tham dự các sự kiện uy tín và các giải pháp phù hợp để
                  mang lại trải nghiệm thú vị, nhanh chóng và công bằng cho họ.
                </p>
              </S.Content>
              <S.CustomeCard>
                {BENEFIT.map((data) => (
                  <CustomCard url={data.url} title={data.title} sub={data.sub} />
                ))}
              </S.CustomeCard>
            </S.CustomerService>
            <S.Event>
              <S.GridItem>
                {IMAGE_GRID.map((data) => (
                  <EventCard url={data.url} title={data.title} />
                ))}
              </S.GridItem>
              <S.Details>
                <Radio.Group value={size} onChange={onChange} style={{ marginBottom: 16 }}>
                  <Radio.Button value="1">Những sự kiện đã qua</Radio.Button>
                  <Radio.Button value="2">Sự kiện sắp tới</Radio.Button>
                </Radio.Group>
                <p className="event-title">Sự kiện không biên giới</p>
                <p>
                  Câu lạc bộ VIP hoạt động xa hơn nữa để tạo ra những sự kiện khó quên trên toàn cầu. Tất cả các sự kiện
                  luôn miễn phí chi phí và lên kế hoạch cho các thành viên tham dự (người trúng thưởng khuyến mãi VIP,
                  người đạt giải cao). Hãy tận hưởng cuộc sống một cách trọn vẹn nhất và tạo ra những kỷ niệm tuyệt vời
                  với tư cách là thành viên VIP Club.
                </p>
              </S.Details>
            </S.Event>
            <Footer />
          </S.WrapperContent>
        </S.Header>
      </S.WrapperContainer>
    </S.Wrapper>
  )
}

export default React.memo(VipPage, (prevProps, nextProps) => prevProps.apr === nextProps.apr)
