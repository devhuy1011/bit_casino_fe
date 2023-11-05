// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios from 'axios'
import { mainAxiosToken, mainAxios } from 'libs/axios'

interface dataProps {
  address?: any
}
// eslint-disable-next-line import/prefer-default-export
export const WithdrawAll = async (address?: dataProps) => {
  console.log(`dataaddress`, address)
  return mainAxios
    .post('/api/v1/public/user/withdraw_all', address)
    .then((response) => {
      // console.log("response", response);
      return response
    })
    .catch((error) => {
      console.log(`error.response`, error.response)
    })
}
