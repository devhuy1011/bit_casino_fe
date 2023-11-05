/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
// import getCaver from 'kaikas'

// import { DataGasLimitState } from '../types'

const initialState: any = { data: [] }

export const userCreateSlice = createSlice({
  name: 'DataUserCreate',
  initialState,
  reducers: {
    setDataUserCreate: (state, action) => {
      // return { ...state, data: action.payload}
      state.data = { ...state.data, ...action.payload }
    },
  },
})

// Actions
export const { setDataUserCreate } = userCreateSlice.actions

// Thunks
export const fetchCreateUser = (address?: any) => async (dispatch?: any) => {
  if (address) {
    dispatch(setDataUserCreate({ account: address }))
  } else {
    let result = ['']
    try {
      // result = await getCaver()
    } catch (error) {
      result = ['']
    }
    const account = result[0]

    dispatch(setDataUserCreate({ account }))
  }
}

export default userCreateSlice.reducer
