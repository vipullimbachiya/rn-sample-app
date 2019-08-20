import {SUBMIT_FORM} from './actionType';
import api from '../../../utils/api';
import {showToast} from '../../../utils/Toast';
import qs from 'qs';

export const submitForm = values => {
  const data = qs.stringify(values);
  return {
    type: SUBMIT_FORM,
    payload: api
      .post('api/users', data)
      .then(res => {
        console.log({res});
        if (res && res.status === 200) {
          return 'success';
        } else {
          return 'error';
        }
      })
      .catch(err => {
        console.log(err.response);
        if (err.response.status === 422) {
          showToast('danger', err.response.data.error.message);
        } else if (err.response.status === 500) {
          showToast('danger', err.response.data.error.message);
        }
        return 'error';
        // console.log(err.response.data.error.message);
        // showToast('danger', err.message);
      }),
  };
};
