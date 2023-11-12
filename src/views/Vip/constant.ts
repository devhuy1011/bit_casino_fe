import HanSake from 'assets/vip_image/vip-handshake.png'
import Wallet from 'assets/vip_image/vip-wallet.png'
import Coin from 'assets/vip_image/vip-coins.png'
import Support from 'assets/vip_image/vip-support.png'

import F1 from 'assets/vip_image/Japan Grand Prix F1.jpg'
import WC from 'assets/vip_image/world cup qatar 2022.jpg'
import UEFA from 'assets/vip_image/uefa_istanbul 2023.jpg'
import US from 'assets/vip_image/US Open Final 2022.jpg'

export const BENEFIT = [
  {
    title: 'Người quản lý VIP tận tâm',
    sub: ['Sẽ CHỈ tập trung vào nhu cầu của bạn.', 'Trải nghiệm sòng bạc t nhân được điều chỉnh chính xác cho bạn.'],
    url: HanSake,
  },
  {
    title: 'Phần thưởng giá trị cao',
    sub: [
      'Ưu đãi hấp dẫn được mô phỏng chỉ dành cho bạn.',
      'Không phải đặt cược phần thưởng để nhận.',
      'Tiền thưởng hàng tuần.',
    ],
    url: Wallet,
  },
  {
    title: 'Giới hạn đặt cược cao nhất trong ngành',
    sub: ['Không có giới hạn rút và nạp tiền điện tử!'],
    url: Coin,
  },
  {
    title: 'Hỗ trợ ưu tiên 24/7',
    sub: ['Không phải xếp hàng, không phải chờ đợi.', 'Chúng tôi đáp ứng nhu cầu của bạn trước tiên.'],
    url: Support,
  },
]

export const IMAGE_GRID = [
  {
    title: 'The Japanese Grand Prix in September 2023',
    url: F1,
  },
  {
    title: 'World Cup 2022 tại Quatar',
    url: WC,
  },
  {
    title: 'Chung kết UEFA Champions League tại Istanbul 2023',
    url: UEFA,
  },
  {
    title: 'US Open Final in New York City',
    url: US,
  },
]
