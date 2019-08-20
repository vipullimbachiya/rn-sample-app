import axios from 'axios';
import {BASE_URL} from '../config';
import {showToast} from './Toast';

function makeHeaders() {
  let headerObj = {};
  headerObj = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  return headerObj;
}

const axiosApi = axios.create({
  baseURL: `${BASE_URL}/`,
});

axiosApi.interceptors.request.use(request => {
  request.headers = makeHeaders();
  console.log({request});
  return request;
});

const checkRespAndRedirect = response => {
  const {data} = response;
};

// axiosApi.defaults.transformRequest = [
//   function(data, headers) {
//     let str = [];
//     for (let p in data)
//       if (data.hasOwnProperty(p) && data[p]) {
//         str.push(encodeURIComponent(p) + '=' + encodeURIComponent(data[p]));
//       }
//     return str.join('&');
//   },
// ];

// axiosApi.interceptors.response.use(
//   response => {
//     checkRespAndRedirect(response);
//     return response;
//   },
//   err => {
//     console.log('Error in interceptor', err);
//     showToast('danger', err.message);
//     if (err.response && err.response.status === 401) {
//       // if you don't return here, then an error will be thrown and you will see a loader infinitely
//       return true;
//     }
//     if (err.response && err.response.status === 403) {
//     }
//     if (err.response && err.response.status === 500) {
//     }
//     return Promise.reject(err);
//   },
// );

export default axiosApi;
