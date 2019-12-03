// 代理目录
const DEV_ENV = 'https://8.baofeng.com'; // eslint-disable-line
const TEST_ENV = ''; // eslint-disable-line

const ENV = DEV_ENV;

export default {
  '/cms': {
    target: ENV,
    changeOrigin: true,
  },
  '/api2': {
    target: ENV,
    changeOrigin: true,
  },
};
