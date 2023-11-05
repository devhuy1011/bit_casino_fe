// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { mainAxios } from 'libs/axios'

export const CreateUser = async (address?: any) => {
  return mainAxios
    .post('/api/v1/public/user/create', {
      address,
    })
    .then((response) => {
      // console.log("response", response);
      return response
    })
    .catch((error) => {
      //console.log(`error.response`, error.response);
    })
}

export const getUserInfo = async (address?: any) => {
  return mainAxios
    .post('/api/v1/public/user/get', {
      address,
    })
    .then((response) => {
      // console.log("response", response);
      return response
    })
    .catch((error) => {
      //console.log(`error.response`, error.response);
    })
}
