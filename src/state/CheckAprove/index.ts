/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState: any = { isApproved: false }

export const checkAproveSlice = createSlice({
  name: 'checkAprove',
  initialState,
  reducers: {
    setCheckAprove: (state, action) => {
      state.isApproved = action.payload.isApproved
    },
  },
})

// Actions
export const { setCheckAprove } = checkAproveSlice.actions

// Thunks
export const fetchCheckAproves = () => async () => {
  // dispatch(setCheckAprove(isApproved))
}

export default checkAproveSlice.reducer
