// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { mainAxios } from 'libs/axios'

interface dataProps {
  toUpperCase(): any
  address?: any
}

export const WithdrawBonus = async (address?: dataProps) => {
  console.log(`dataaddress`, address)
  return mainAxios
    .post('/api/v1/public/user/withdraw_bonus', address)
    .then((response) => {
      // console.log("response", response);
      return response
    })
    .catch((error) => {
      console.log(`error.response`, error.response)
    })
}

export const setBonus = async (address?: dataProps) => {
  return mainAxios
    .post('/api/v1/public/user/set_bonus', {
      address,
    })
    .then((response) => {
      // console.log("response", response);
      return response
    })
    .catch((error) => {
      console.log(`error.response`, error.response)
    })
}
