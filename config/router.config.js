// 路由目录
const routes = [{
  path: '/',
  component: '../layouts/index.js',
  routes: [{
    path: '/',
    name: 'home',
    title: '首页',
    component: './Home',
  }],
}];

export default routes;
