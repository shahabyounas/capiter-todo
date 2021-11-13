import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  headers: {'Content-Type': 'application/json'}
});


instance.interceptors.request.use((req) => {
  return req;
})


instance.interceptors.response.use((res) => {
  
  return res;
})
