import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import userInfoReducer from './userInfo'
import PopupReducer from './Popup'
// eslint-disable-next-line import/no-unresolved
import IndicatorReducer from './Indicator'
import CheckAproveReducer from './CheckAprove'
import GetBalanceReducer from './getBalance'
import priceKlayReducer from './priceKlay'

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    dataUser: userInfoReducer,
    popup: PopupReducer,
    indicator: IndicatorReducer,
    aprove: CheckAproveReducer,
    balance: GetBalanceReducer,
    priceKlay: priceKlayReducer,
  },
})

/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
 */
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
