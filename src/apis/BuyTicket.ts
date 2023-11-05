// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { mainAxios } from 'libs/axios'

interface dataStake {
  address?: any
  pool?: any
  amount?: any
}
// eslint-disable-next-line import/prefer-default-export
export const BuyTicket = async (data?: dataStake) => {
  // eslint-disable-next-line no-console

  return mainAxios
    .post('/ticket/buy', data)
    .then((response) => {
      // eslint-disable-next-line no-console
      console.log('response BuyTicket', response)
      return response
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(`error.BuyTicket`, error.response)
    })
}
