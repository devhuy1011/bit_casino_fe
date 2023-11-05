/* eslint-disable no-param-reassign */
import { Stake } from 'apis'
import { fetchPopup } from 'state/actions'
// import { DataGasLimitState } from '../types'

// Thunks
// eslint-disable-next-line import/prefer-default-export
export const fetchStake = (data) => async (dispatch?: any) => {
  const response: any = await Stake(data)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const datas = response?.data?.data
  // dispatch(setDataUserCreate(datas))
  dispatch(
    fetchPopup({
      isPopup: false,
    }),
  )
}
