import React from 'react';
import { Tabs } from 'antd';
import UserList from './userList';

const { TabPane } = Tabs;

const UserManage = () => (
  <Tabs defaultActiveKey="user" >
    <TabPane tab="用户列表" key="user">
     <UserList/>
    </TabPane>
    <TabPane tab="企业列表" key="company">
      这是企业列表的内容
    </TabPane>
    <TabPane tab="身份认证" key="dock">
      这是身份认证的内容
    </TabPane>
  </Tabs>
);

export default UserManage
