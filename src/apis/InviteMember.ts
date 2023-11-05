// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios from 'axios'
import { mainAxiosToken, mainAxios } from 'libs/axios'

interface dataProps {
  addr?: any
  ref?: any
}
// eslint-disable-next-line import/prefer-default-export
export const InviteMember = async (params?: dataProps) => {
  return mainAxios
    .put('/api/v1/public/invite', null ,{
      params
    },
    )
    .then((response) => {
      // console.log("response", response);
      return response
    })
    .catch((error) => {
      console.log(`error.response`, error.response)
    })
}
