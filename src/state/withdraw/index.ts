import { WithdrawAll, WithdrawBonus, setBonus } from 'apis'
import { fetchCreateUser, fetchPopup } from 'state/actions'
// import { DataGasLimitState } from '../types'

// Thunks
// eslint-disable-next-line import/prefer-default-export
export const fetchWithdrawAll = (data) => async (dispatch?: any) => {
  const response: any = await WithdrawAll(data)
  dispatch(fetchCreateUser(data.address))
  const datas = response?.data?.data
  // eslint-disable-next-line no-console
  console.log(`responseWithdrawAll`, datas)
}

export const fetchWithdrawBonus = (data) => async (dispatch?: any) => {
  await WithdrawBonus(data)
  dispatch(fetchCreateUser(data.address))
  dispatch(fetchPopup({ isPopup: false }))

  // const datas = response?.data?.data
  // console.log(`responseWithdrawBonus`, response)
}

export const fetchSetBonus = (data) => async () => {
  await setBonus(data)
  // const datas = response?.data?.data
  // console.log(`responseWithdrawBonus`, response)
}
