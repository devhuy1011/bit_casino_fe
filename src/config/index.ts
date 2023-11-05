import BigNumber from 'bignumber.js/bignumber'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const BSC_BLOCK_TIME = 3

// FPT_PER_BLOCK details
// 40 FPT is minted per block
// 18 FPT per block is sent to Burn pool (A farm just for burning cake)
// 10 FPT per block goes to FPT syrup pool
// 12 FPT per block goes to Yield farms and lottery
// FPT_PER_BLOCK in config/index.ts = 40 as we only change the amount sent to the burn pool which is effectively a farm.
// FPT/Block in components/CakeStats.tsx = 22 (40 - Amount sent to burn pool)

// export const FPT_PER_BLOCK = new BigNumber(40)
export const FPT_PER_BLOCK = new BigNumber(1) // change cake per block
export const BLOCKS_PER_YEAR = new BigNumber((60 / BSC_BLOCK_TIME) * 60 * 24 * 365) // 10512000
export const BASE_APP = 'KlayTicket'
export const TIME_KLAY_TICKET = 'SaleTimeKlayTicket'

//  REFERRAL = {
//   BUY: 1,
//   SWAP: 2,
//   SALE: 3
// }
export const REFERRAL = 3

// https://klayticket.com/ //home
// 'http://3.35.214.191/buy-ticket'
// 'https://sale.klayticket.com/buy-ticket' //sale
// 'https://buy.klayticket.com/buy-ticket' //buy
// 'https://swap.klayticket.com/buy-ticket'//swap
export const LINK_URL_DECENT = 'https://sale.klayticket.com/buy-ticket'
