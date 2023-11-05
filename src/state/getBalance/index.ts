/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState: any = { balance: 0 }

export const getBalanceSlice = createSlice({
  name: 'getBalance',
  initialState,
  reducers: {
    setBalance: (state, action?: any) => {
      state.balance = action.payload

    },
  },
})

// Actions
export const { setBalance } = getBalanceSlice.actions

// Thunks
export const fetchBalance = () => async (dispatch?: any) => {
  const {REACT_APP_API_BALANCE} = process.env;
  try {
    const response = await axios.post(`${REACT_APP_API_BALANCE}/api/v1/public/balance`)
    const result = response.data.balance
    dispatch(setBalance(result))
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(`balance`, error)
  }
  // dispatch(setBalance(data))
}

export default getBalanceSlice.reducer
