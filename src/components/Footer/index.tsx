import React from 'react'
import { useHistory } from 'react-router-dom'
import { Select } from 'antd'
import * as S from './style'

interface Props {
  url: string
}
const langs = [
  { value: 'vi', label: 'Tiếng Việt' },
  { value: 'eng', label: 'English' },
]

const Footer = (props: Props) => {
  const { url } = props
  const navigate = useHistory()
  return (
    <S.Wrapper>
      <S.Container>
        <S.Item>
          <p className="title">Về Bitcasino.io</p>
          <p>
            Bitcasino là Casino trực tuyến được cấp phép đầu tiên và hoạt động kể từ năm 2014. Bitcasino.io được sở hữu
            và vận hành bởi Moon Technologies B.V. Trang web được chính phủ Curaçao cấp phép và điều chỉnh theo Giấy
            phép số 1668/JAZ. Một số phương thức thanh toán được xử lý bởi công ty con thuộc sở hữu hoàn toàn của trang
            web là MProcessing Solutions Ltd, đảo Síp (Menandrou 4, 1066, Nicosia, Síp).
          </p>
        </S.Item>
        <S.Item>
          <p className="title">Trò chơi</p>
          <p>Slot</p>
          <p>Roulette</p>
          <p>Baccarat trực tiếp</p>
          <p>Video Poker</p>
          <p>Poker trực tiếp</p>
          <p>Chương trình trò chơi trực tiếp</p>
          <p>Trò chơi thông thường</p>
          <p>Nhiều người chơi</p>
          <p>Cược thể thao</p>
          <p>Nhà cung cấp trò chơi</p>
        </S.Item>
        <S.Item>
          <p className="title">Về chúng tôi</p>
          <p>CLB khách hàng thân thiết</p>
          <p>Phần thưởng VIP</p>
          <p>Blog</p>
          <p>Chương trình chi nhánh</p>
          <p>Trung tâm hỗ trợ</p>
          <p>Giấy phép của chúng tôi</p>
        </S.Item>
        <S.Item>
          <p className="title">Thông tin</p>
          <p>Điều khoản và điều kiện chung</p>
          <p>Cờ bạc có trách nhiệm</p>
          <p>Điều khoản và điều kiện tự loại trừ</p>
          <p>Giải quyết tranh chấp</p>
          <p>Chính sách AML</p>
          <p>Sự công bằng và phương pháp kiểm tra RNG</p>
          <p>Chính sách KYC</p>
          <p>Tài khoản, các khoản thanh toán và tiền thưởng</p>
          <p>Điều khoản và điều kiện chương trình chi nhánh</p>
          <p>Chính sách quyền riêng tư</p>
          <p>Lợi ích của Bitcoin</p>
        </S.Item>
        <S.Item>
          <Select className="select" defaultValue="Tiếng việt" style={{ width: 195 }} options={langs} />
          <div className="contain">
            <span>1 BTC = 36.939,83 USD</span>
          </div>
        </S.Item>
      </S.Container>
    </S.Wrapper>
  )
}

export default Footer
