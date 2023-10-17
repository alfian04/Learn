import axios, {AxiosRequestConfig} from 'axios';
import Config from 'react-native-config';

export const request = async (
  path: string,
  method: string,
  options?: AxiosRequestConfig,
) => {
 console.log(Config.API_TMDB_URL)
  const instance = axios.create({
    baseURL: Config.API_TMDB_URL,
    headers: {Authorization: `Bearer ${Config.API_TMDB_ACCESS_TOKEN}`},
  });

  const res = await instance(path, {
    method,
    ...options,
  });

  console.log(res.data);
  return res.data;
};
