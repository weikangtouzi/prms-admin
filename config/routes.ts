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
        path: '/user/register-result',
        component: './user/register-result',
      },
      {
        name: 'register',
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
        path: '/userManage/userList',
        component: './userManage/userList',
        routes: [
          {
            name: 'userList',
            path: '/userManage/userList',
            hideInMenu: true,
            redirect: '/userManage/userList/jobHunter',
          },
          {
            name: 'jobHunter',
            hideInMenu: true,
            path: '/userManage/userList/jobHunter',
            component: './userManage/userList/jobHunter',
          },
          {
            name: 'recruiter',
            hideInMenu: true,
            path: '/userManage/userList/recruiter',
            component: './userManage/userList/recruiter',
          },
        ],
      },
      {
        name: 'enterpriseList',
        path: '/userManage/enterpriseList',
        component: './userManage/enterpriseList',
        routes: [
          {
            name: 'companyList',
            path: '/userManage/enterpriseList',
            hideInMenu: true,
            redirect: '/userManage/enterpriseList/companyList',
          },
          {
            name: 'companyList',
            hideInMenu: true,
            path: '/userManage/enterpriseList/companyList',
            component: './userManage/enterpriseList/companyList',
          },
          {
            name: 'companyAudit',
            hideInMenu: true,
            path: '/userManage/enterpriseList/companyAudit',
            component: './userManage/enterpriseList/companyAudit',
          },
        ],
      },
      {
        name: 'role',
        path: '/userManage/role',
        component: './userManage/role',
        routes: [
          {
            name: 'admin',
            path: '/userManage/role',
            hideInMenu: true,
            redirect: '/userManage/role/admin',
          },
          {
            name: 'admin',
            hideInMenu: true,
            path: '/userManage/role/admin',
            component: './userManage/role/admin',
          },
          {
            name: 'auth',
            hideInMenu: true,
            path: '/userManage/role/auth',
            component: './userManage/role/auth',
          }
        ],
      },
      {
        name: 'userLog',
        path: '/userManage/userLog',
        component: './userManage/userLog',
        routes: [
          {
            name: 'actionLog',
            path: '/userManage/userLog',
            hideInMenu: true,
            redirect: '/userManage/userLog/actionLog',
          },
          {
            name: 'actionLog',
            hideInMenu: true,
            path: '/userManage/userLog/actionLog',
            component: './userManage/userLog/actionLog',
          },
          {
            name: 'userUnRegister',
            hideInMenu: true,
            path: '/userManage/userLog/userUnRegister',
            component: './userManage/userLog/userUnRegister',
          }
        ],
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
        path: '/employmentManage/resume',
        component: './employmentManage/resume',
        routes: [
          {
            name: 'resumeList',
            hideInMenu: true,
            path: '/employmentManage/resume',
            redirect: '/employmentManage/resume/resumeList',
          },
          {
            name: 'resumeList',
            hideInMenu: true,
            path: '/employmentManage/resume/resumeList',
            component: './employmentManage/resume/resumeList',
            routes:[
              {
                name: 'resumeRecord',
                hideInMenu: true,
                path: '/employmentManage/resume/resumeList/resumeRecord',
                component: './employmentManage/resume/resumeList',
              }
            ]
          },
          {
            name: 'resumeSetting',
            hideInMenu: true,
            path: '/employmentManage/resume/resumeSetting',
            component: './employmentManage/resume/resumeSetting',
          }
        ]
      },
      {
        name: 'title',
        path: '/employmentManage/title',
        component: './employmentManage/title',
        routes:[
          {
            name: 'titleRecord',
            hideInMenu: true,
            path: '/employmentManage/title/titleRecord',
            component: './employmentManage/title/TitleRecord',
          }
        ]
      },
      {
        name: 'jobFair',
        path: '/employmentManage/jobFair',
        component: './employmentManage/jobFair',
        routes: [
          {
            name: 'offline',
            hideInMenu: true,
            path: '/employmentManage/jobFair',
            redirect: '/employmentManage/jobFair/offline',
          },
          {
            name: 'offline',
            hideInMenu: true,
            path: '/employmentManage/jobFair/offline',
            component: './employmentManage/jobFair/offline',
          }
        ]
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
        path: '/contentManage/news',
        component: './contentManage/news',
        routes:[
          {
            name: 'list',
            hideInMenu: true,
            path: '/contentManage/news',
            redirect: '/contentManage/news/list',
          },
          {
            name: 'list',
            hideInMenu: true,
            path: '/contentManage/news/list',
            component: './contentManage/news/list',
          },
          {
            name: 'classify',
            hideInMenu: true,
            path: '/contentManage/news/classify',
            component: './contentManage/news/classify',
          }
        ]
      },
      {
        name: 'announcement',
        path: '/contentManage/announcement',
        component: './contentManage/announcement',
      },
      {
        name: 'sensitiveWord',
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
        path: '/operationManage/finance',
        component: './operationManage/finance',
        routes: [
          {
            name: 'early',
            hideInMenu: true,
            path: '/operationManage/finance',
            redirect: '/operationManage/finance/early',
          },
          {
            name: 'early',
            hideInMenu: true,
            path: '/operationManage/finance/early',
            component: './operationManage/finance/early',
          },
          {
            name: 'seeker',
            hideInMenu: true,
            path: '/operationManage/finance/seeker',
            component: './operationManage/finance/seeker',
          },
          {
            name: 'company',
            hideInMenu: true,
            path: '/operationManage/finance/company',
            component: './operationManage/finance/company',
          },
          {
            name: 'statistic',
            hideInMenu: true,
            path: '/operationManage/finance/statistic',
            component: './operationManage/finance/statistic',
          },
        ]
      },
      // {
      //   name: 'withdraw',
      //   path: '/operationManage/withdraw',
      //   component: './operationManage/withdraw',
      // },
      {
        name: 'invoice',
        path: '/operationManage/invoice',
        component: './operationManage/invoice',
      },
      {
        name: 'gg',
        path: '/operationManage/gg',
        component: './operationManage/gg',
      },
      {
        name: 'tipOff',
        path: '/operationManage/tipOff',
        component: './operationManage/tipOff',
      },
      {
        name: 'feedbackAndHelp',
        path: '/operationManage/feedbackAndHelp',
        component: './operationManage/feedbackAndHelp',
        routes: [
          {
            name: 'feedback',
            hideInMenu: true,
            path: '/operationManage/feedbackAndHelp',
            redirect: '/operationManage/feedbackAndHelp/feedback',
          },
          {
            name: 'feedback',
            hideInMenu: true,
            path: '/operationManage/feedbackAndHelp/feedback',
            component: './operationManage/feedbackAndHelp/feedback',
          },
          {
            name: 'help',
            hideInMenu: true,
            path: '/operationManage/feedbackAndHelp/help',
            component: './operationManage/feedbackAndHelp/help',
          }
        ]
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
        path: '/systemConfig/system',
        component: './systemConfig/system',
        routes: [
          {
            name: 'agreement',
            hideInMenu: true,
            path: '/systemConfig/system',
            redirect: '/systemConfig/system/agreement',
          },
          {
            name: 'agreement',
            hideInMenu: true,
            path: '/systemConfig/system/agreement',
            component: './systemConfig/system/agreement',
          },
          {
            name: 'icon',
            hideInMenu: true,
            path: '/systemConfig/system/icon',
            component: './systemConfig/system/icon',
          }
        ]
      },
      {
        name: 'register',
        path: '/systemConfig/register',
        component: './systemConfig/register',
      },
      {
        name: 'consume',
        path: '/systemConfig/consume',
        component: './systemConfig/consume',
        routes: [
          {
            name: 'job',
            hideInMenu: true,
            path: '/systemConfig/consume',
            redirect: '/systemConfig/consume/job',
          },
          {
            name: 'job',
            hideInMenu: true,
            path: '/systemConfig/consume/job',
            component: './systemConfig/consume/job',
          },
          {
            name: 'single',
            hideInMenu: true,
            path: '/systemConfig/consume/single',
            component: './systemConfig/consume/single',
          },
          {
            name: 'suit',
            hideInMenu: true,
            path: '/systemConfig/consume/suit',
            component: './systemConfig/consume/suit',
          },
        ]
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
