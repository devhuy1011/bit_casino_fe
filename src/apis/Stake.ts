// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios from 'axios'
import { mainAxiosToken, mainAxios } from 'libs/axios'

interface dataStake {
  address?:any;
  pool?:any;
  amount?:any;
}
// eslint-disable-next-line import/prefer-default-export
export const Stake = async (data?: dataStake) => {
  console.log(`dataStake`, data)
  return mainAxios.post('/api/v1/public/user/stake', 
    data
  )
  .then((response) => {
    // console.log("response", response);
    return response;
  })
  .catch((error) => {
//console.log(`error.response`, error.response);
  });
}

