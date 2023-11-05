/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

// import { DataGasLimitState } from '../types'

const initialState: any = { data:{isPopup: false,type:''} }

export const popupSlice = createSlice({
  name: 'DataPopup',
  initialState,
  reducers: {
    setDataPopup: (state, action?: any) => {
      // return { ...state, data: action.payload}
      state.data = action.payload
    },
  },
})

// Actions
export const { setDataPopup } = popupSlice.actions

// Thunks
export const fetchPopup = (data) => async (dispatch?: any) => {
  dispatch(setDataPopup(data))

}

export default popupSlice.reducer
