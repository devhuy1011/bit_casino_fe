import { Earn } from 'apis'
import { fetchPopup } from 'state/actions'
// Thunks
// eslint-disable-next-line import/prefer-default-export
export const fetchEarn = (data) => async (dispatch) => {
  const response: any = await Earn(data)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const datas = response?.data?.data
  dispatch(fetchPopup({ isPopup: false }))
}
