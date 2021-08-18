import mockjs from 'mockjs';
export default {
  '/api/users': mockjs.mock({
    'data|50': [
      {
        uid: '@string("upper", 10)',
        username: '@first',
        realName: '@cname',
        'type|0-2': 1,
        'phone|10000000000-19000000000': 12000000000,
        email: '@email',
        identity: '@id',
        loginTime: '@datetime',
        registerTime: '@datetime',
        'status|0-2': 1,
      }
    ],
    success:true
  }),
  '/api/groups': mockjs.mock({
    'data|50': [
      {
        groupId: '@string("upper", 10)',
        groupName: '@cword(5,8)',
        createName: '@cname',
        createTime: '@datetime',
      }
    ],
    success:true
  }),
  '/api/admins': mockjs.mock({
    'data|50': [
      {
        userId: '@string("upper", 10)',
        username: '@cname',
        realName: '@cname',
        groupName: '@cword(5,8)',
        creatorName: '@cname',
        createTime: '@datetime',
        'status|0-2': 1,
      }
    ],
    success:true
  }),

  // GET 可忽略
  '/api/users/1': { id: 1 },
}
