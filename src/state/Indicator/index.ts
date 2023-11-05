/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState: any = { isShow: false }

export const indicatorSlice = createSlice({
  name: 'Indicator',
  initialState,
  reducers: {
    setIndicator: (state, action?: any) => {
      state.isShow = action.payload.isShow
    },
  },
})

// Actions
export const { setIndicator } = indicatorSlice.actions

// Thunks
export const fetchInDicator = (data) => async (dispatch?: any) => {
  dispatch(setIndicator(data))
}

export default indicatorSlice.reducer
