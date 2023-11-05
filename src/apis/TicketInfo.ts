// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios from 'axios'
import { severAxios, mainAxios } from 'libs/axios'

interface dataProps {
  address?: any
}
// eslint-disable-next-line import/prefer-default-export
export const TicketInfo = async (address?: dataProps) => {
  return mainAxios
    .post('/api/v1/ticket/info', {address},
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    )
    .then((response) => {
      // console.log("response", response);
      return response
    })
    .catch((error) => {
      // console.log(`error.response`, error.response)
    })
}
