﻿export default [
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
      },
      {
        name: 'jobFair',
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
        path: '/contentManage/news',
        component: './contentManage/news',
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
      },
      {
        name: 'withdraw',
        path: '/operationManage/withdraw',
        component: './operationManage/withdraw',
      },
      {
        name: 'invoice',
        path: '/operationManage/invoice',
        component: './operationManage/invoice',
      },
      {
        name: 'ad',
        path: '/operationManage/ad',
        component: './operationManage/ad',
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
