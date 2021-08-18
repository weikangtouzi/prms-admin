import { defineConfig } from 'umi';
import routes from './src/config/route';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  webpack5:{},
  routes: [
    {
      path: '/',
      exact: false,
      component:'@/layout/baseLayout',
      routes: [
        { path: '/', component: '@/pages/index',name:'首页',redirect:'/index'},
        ...routes
      ]
    }
  ],
  fastRefresh: {},
  theme: {
    "primary-color": "#00A652",
  },
});
