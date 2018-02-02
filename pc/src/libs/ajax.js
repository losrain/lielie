import axios from 'axios';
import AJAX_URL from '../config';

let fetch = function (options) {
  let _opts = options;
  return new Promise((resolve, reject) => {
    axios(_opts)
      .then(response => {
        // let res = response.data;
        // if (res.code == 0){
          resolve(res);
        // } else {
        //   reject(res);
        // }
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

let post = function (url, data, config) {
//   let _data = qs.stringify(data);
  let options = Object.assign({
    url: AJAX_URL[url],
    method: 'post',
    data: data
  }, config);
  return fetch(options);
};

let get = function (url, params, config) {
  let _params = params || {};
//   _params._ = utils.getUNIXTimestamp();
  let options = Object.assign({
    url: AJAX_URL[url],
    method: 'get',
    params: _params
  }, config);

  return fetch(options);
};

function install(Vue, options) {
  Vue.prototype.$http = {
    post,
    get
  };
  Vue.prototype.$axios = axios;
}

export default install;