// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios from 'axios'
import { klipAxios, mainAxios } from 'libs/axios'

interface dataProps {
  addr?: any
  ref?: any
}
// eslint-disable-next-line import/prefer-default-export
export const klipWallet = async (params?: any) => {
  return klipAxios
    .get('/v2/a2a/result',{
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

export const klipPrepare = async (params?: any) => {
  return klipAxios
    .post('/v2/a2a/prepare',{bapp: {name: "klayTicket"}, type: "auth"}
    )
    .then((response) => {
      // console.log("response", response);
      return response
    })
    .catch((error) => {
      console.log(`error.response`, error.response)
    })
}