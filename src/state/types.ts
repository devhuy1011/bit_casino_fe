// import { Toast } from '@gobitbunnyswap/uikit'
import BigNumber from 'bignumber.js'

export type TranslatableText =
  | string
  | {
      id: number
      fallback: string
      data?: {
        [key: string]: string | number
      }
    }

// Global state

export interface State {
  balance: BalanceState
  dataUser: DataUserState
  priceBio: PriceBioState
  poolsData: PoolsState
  listPools: ListPoolsState
  popup: PopupState
  indicator: IndicatorState
  aprove: AproveState
  stakingInfo: StakingInfoState
  ticketInfo: TicketInfoState
  dataStakeStand: DataStakeStandState
  dataStakePre: DataStakePreState
  priceKlay:  DataPriceKlayState
  dataListStand: DataListStandState
  dataListPre: DataListPreState

}

export interface TicketInfoState {
  // data?: any
  remainTicketPre?: any
  remainTicketStand?: any
  ticketPricePre?: any
  ticketPriceStand?: any
}

export interface DataStakePreState {
  data?: any
}

export interface DataPriceKlayState {
  data?: any
}
export interface DataStakeStandState {
  data?: any
}

export interface DataListStandState {
  data?: any
}

export interface DataListPreState {
  data?: any
}

export interface ListPoolsState {
  data?: any
}

export interface PoolsState {
  data?: any
}

export interface DataUserState {
  data?: any
}

export interface PriceBioState {
  data?: any
}

export interface PopupState {
  isPopup?: any
  type?: any
  data?: any
}

export interface IndicatorState {
  isShow?: any
}

export interface AproveState {
  isApproved?: any
}

export interface BalanceState {
  balance?: any
}


export interface StakingInfoState {
  stakingInfo?: any
}
