export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user/login',
        layout: false,
        name: 'login',
        component: './user/Login',
      },
      {
        path: '/user',
        redirect: '/user/login',
      },
      {
        name: 'register-result',
        icon: 'smile',
        path: '/user/register-result',
        component: './user/register-result',
      },
      {
        name: 'register',
        icon: 'smile',
        path: '/user/register',
        component: './user/register',
      },
      {
        component: '404',
      },
    ],
  },
  {
    path: '/workspace',
    name: 'workspace',
    icon: 'dashboard',
    component: './workspace/index',
  },
  {
    path: '/userManage',
    name: 'userManage',
    icon: 'user',
    routes: [
      {
        path: '/userManage',
        redirect: '/userManage/userList',
      },
      {
        name: 'userList',
        icon: 'smile',
        path: '/userManage/userList',
        component: './userManage/userList',
        routes: [
          {
            name: 'userList',
            path: '/userManage/userList',
            icon: 'smile',
            hideInMenu: true,
            redirect: '/userManage/userList/jobHunter',
          },
          {
            name: 'jobHunter',
            icon: 'smile',
            hideInMenu: true,
            path: '/userManage/userList/jobHunter',
            component: './userManage/userList/jobHunter',
          },
          {
            name: 'recruiter',
            icon: 'smile',
            hideInMenu: true,
            path: '/userManage/userList/recruiter',
            component: './userManage/userList/recruiter',
          },
        ],
      },
      {
        name: 'enterpriseList',
        icon: 'smile',
        path: '/userManage/enterpriseList',
        component: './userManage/enterpriseList',
        routes: [
          {
            name: 'companyList',
            path: '/userManage/enterpriseList',
            icon: 'smile',
            hideInMenu: true,
            redirect: '/userManage/enterpriseList/companyList',
          },
          {
            name: 'companyList',
            icon: 'smile',
            hideInMenu: true,
            path: '/userManage/enterpriseList/companyList',
            component: './userManage/enterpriseList/companyList',
          },
          {
            name: 'companyAudit',
            icon: 'smile',
            hideInMenu: true,
            path: '/userManage/enterpriseList/companyAudit',
            component: './userManage/enterpriseList/companyAudit',
          },
        ],
      },
      {
        name: 'role',
        icon: 'smile',
        path: '/userManage/role',
        component: './userManage/role',
      },
      {
        name: 'userLog',
        icon: 'smile',
        path: '/userManage/userLog',
        component: './userManage/userLog',
      },
    ],
  },
  {
    path: '/employmentManage',
    name: 'employmentManage',
    icon: 'send',
    routes: [
      {
        path: '/employmentManage',
        redirect: '/employmentManage/resume',
      },
      {
        name: 'resume',
        icon: 'smile',
        path: '/employmentManage/resume',
        component: './employmentManage/resume',
      },
      {
        name: 'title',
        icon: 'smile',
        path: '/employmentManage/title',
        component: './employmentManage/title',
      },
      {
        name: 'jobFair',
        icon: 'smile',
        path: '/employmentManage/jobFair',
        component: './employmentManage/jobFair',
      },
    ],
  },
  {
    path: '/contentManage',
    name: 'contentManage',
    icon: 'FileSync',
    routes: [
      {
        path: '/contentManage',
        redirect: '/contentManage/news',
      },
      {
        name: 'news',
        icon: 'smile',
        path: '/contentManage/news',
        component: './contentManage/news',
      },
      {
        name: 'announcement',
        icon: 'smile',
        path: '/contentManage/announcement',
        component: './contentManage/announcement',
      },
      {
        name: 'sensitiveWord',
        icon: 'smile',
        path: '/contentManage/sensitiveWord',
        component: './contentManage/sensitiveWord',
      },
    ],
  },
  {
    path: '/operationManage',
    name: 'operationManage',
    icon: 'FundProjectionScreen',
    routes: [
      {
        path: '/operationManage',
        redirect: '/operationManage/finance',
      },
      {
        name: 'finance',
        icon: 'smile',
        path: '/operationManage/finance',
        component: './operationManage/finance',
      },
      {
        name: 'withdraw',
        icon: 'smile',
        path: '/operationManage/withdraw',
        component: './operationManage/withdraw',
      },
      {
        name: 'invoice',
        icon: 'smile',
        path: '/operationManage/invoice',
        component: './operationManage/invoice',
      },
      {
        name: 'ad',
        icon: 'smile',
        path: '/operationManage/ad',
        component: './operationManage/ad',
      },
      {
        name: 'tipOff',
        icon: 'smile',
        path: '/operationManage/tipOff',
        component: './operationManage/tipOff',
      },
      {
        name: 'feedbackAndHelp',
        icon: 'smile',
        path: '/operationManage/feedbackAndHelp',
        component: './operationManage/feedbackAndHelp',
      },
    ],
  },
  {
    path: '/systemConfig',
    name: 'systemConfig',
    icon: 'Setting',
    routes: [
      {
        path: '/systemConfig',
        redirect: '/systemConfig/system',
      },
      {
        name: 'system',
        icon: 'smile',
        path: '/systemConfig/system',
        component: './systemConfig/system',
      },
      {
        name: 'register',
        icon: 'smile',
        path: '/systemConfig/register',
        component: './systemConfig/register',
      },
      {
        name: 'consume',
        icon: 'smile',
        path: '/systemConfig/consume',
        component: './systemConfig/consume',
      },
    ],
  },
  {
    path: '/',
    redirect: '/userManage/userList',
  },
  {
    component: '404',
  },
];
