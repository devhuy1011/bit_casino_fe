/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState: any = {
  isLoading: false,
  data: 0,
}

// Thunks
export const fetchPriceKlay = createAsyncThunk('priceKsp/fetch', async () => {
  let priceWon = '0'
  let price = '0'
  const {REACT_APP_API_URL} = process.env;
  try {
    const response = await axios.get(`https://anyblog.co.kr/coin_usdt.php`)
    priceWon = response.data.price
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(`error`, error)
  }
  try {
    const response = await axios.get(`${REACT_APP_API_URL}/api/v1/redirectapi/ticker?currency=klay`)
    // const response = await axios.get(`https://api.klayticket.com/api/v1/redirectapi/ticker?currency=klay`)
    price = response.data.last
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(`priceKlay`, error)
  }


  const data = price? Number(price)/Number(priceWon): 0
  // const data = response.data.data || []
  // Return normalized token names
  return {
    data
  }
})

export const priceKslaySlice = createSlice({
  name: 'pricesKsp',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPriceKlay.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchPriceKlay.fulfilled, (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.data = action.payload.data
    })
  },
})

export default priceKslaySlice.reducer
