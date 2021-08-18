import {IConfigFromPlugins} from '@@/core/pluginConfig';

const routes: IConfigFromPlugins[] = [
  {
    path: '/index', name: '首页',
    routes: [
      { path: '/index', component: '@/pages/index', name: '首页' },
    ],
  },
  {
    path: '/user', name: '用户',exact:false,
    routes: [
      { path: '/user',redirect:'/user/user-manage' },
      { path: '/user/user-manage', component: '@/pages/user/userManage/index', name: '会员管理'},
      { path: '/user/register-setting', component: '@/pages/user/registerSetting/index', name: '注册设置' },
      { path: '/user/pay-setting', component: '@/pages/index', name: '消费设置' },
      { path: '/user/role-manage', component: '@/pages/user/roleManage/index', name: '角色管理' },
      { path: '/user/user-log', component: '@/pages/index', name: '用户日志' },
      { path: '/user/user-logout', component: '@/pages/index', name: '用户注销' },
    ],
  },
  { path: '/content', component: '@/pages/index', name: '内容',
    routes: [
      { path: '/content',redirect:'/user/user-manage' },
      { path: '/content/circle-manage', component: '@/pages/index', name: '圈子管理' },
      { path: '/content/qaq-manage', component: '@/pages/index', name: '问答管理' },
      { path: '/content/publish-manage', component: '@/pages/index', name: '公告管理' },
      { path: '/content/news-manage', component: '@/pages/index', name: '资讯管理' },
    ],
  },
  { path: '/operating', component: '@/pages/index', name: '运营' },
  { path: '/tool', component: '@/pages/index', name: '工具' },
  {
    path: '/config',
    name: '配置',
    routes: [
      { path: '/config',redirect:'/config/system-config' },
      { path: '/config/system-config', component: '@/pages/config/systemConfig/index', name: '系统配置'},
    ],},
];

export default routes;
