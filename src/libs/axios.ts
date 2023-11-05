// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios from "axios";

const { REACT_APP_API_URL } = process.env;

const headerDict = {
};

export const mainAxios = axios.create({
  baseURL: `${REACT_APP_API_URL}`,
  // withCredentials: true,
});

export const klipAxios = axios.create({
  baseURL: `https://a2a-api.klipwallet.com`,
  // withCredentials: true,
});

export const severAxios = axios.create({
  baseURL: `http://3.38.103.191:3000/api/v1`,
});

/** Use if have token */
export const mainAxiosToken = axios.create({
  baseURL: `${REACT_APP_API_URL}`,
  headers: headerDict,
  withCredentials: true,
});

export const reserveAxios = axios.create({
  baseURL: `${REACT_APP_API_URL}/api`,
  withCredentials: true,
});
