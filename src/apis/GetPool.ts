// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios from 'axios'
import { mainAxiosToken, mainAxios } from 'libs/axios'

// eslint-disable-next-line import/prefer-default-export
export const GetPool = async () => {
  return mainAxios
    .post('/api/v1/public/user/list_pool',
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
      console.log(`error.response`, error.response)
    })
}
