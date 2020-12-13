import Axios from 'axios';

export default (props = {}) => {
  const {
    url = '/',
    method = 'GET',
    data = {},
    params = {},
  } = props;
  console.log({
    url,
    method,
    data,
    params,
  });
  return Axios({
    url,
    method,
    data,
    params,
  }).then((e) => {
    console.log(1, e);
    return e;
  }).catch((e) => {
    console.log(2, e);
    return Promise.reject(e);
  })
};
