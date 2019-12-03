import { fetch } from 'dva';
import { message } from 'antd';

const ENCRYPT_SWITCH = false;

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '操作频繁，请稍后再试。',
  404: '发出的请求不存在',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

const checkStatus = (res) => {
  const { status, statusText } = res;
  if (status >= 200 && status < 300) {
    return res;
  }
  const errorText = codeMessage[status] || statusText;
  message.error(errorText);
  const error = new Error(errorText);
  error.name = status;
  error.response = res;
  throw error;
};

const request = (url, extraOptions) => {
  const defaultOptions = {
    credentials: 'include',
    method: 'POST',
    headers: {
      // 请求头
    },
  };
  const options = { ...defaultOptions, ...extraOptions };
  if (options.method === 'POST' || options.method === 'PUT') {
      if (options.body instanceof FormData) { // eslint-disable-line
      options.headers = {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        ...options.headers,
      };
    } else {
      options.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...options.headers,
      };
      if (ENCRYPT_SWITCH) {
        // 若启用了加密，走加密传输逻辑
        options.body = JSON.stringify(options.body);
      } else {
        options.body = JSON.stringify(options.body);
      }
    }
  }
  return fetch(url, options).then(checkStatus).then(res => res.json()).then((res) => {
    if (ENCRYPT_SWITCH) {
      // 若启用了加密，走解密逻辑
      return res;
    }
    return res;
  });
};

export default request;
