import React from 'react';
import { Tabs } from 'antd';
import Group from './group'
import Admins from './admins'
import AddManager from './addManager'

const { TabPane } = Tabs;

const RoleManage = () => (
  <Tabs defaultActiveKey="group" >
    <TabPane tab="管理组" key="group">
      <Group/>
    </TabPane>
    <TabPane tab="管理员列表" key="list">
      <Admins/>
    </TabPane>
    <TabPane tab="添加管理员" key="add">
      <AddManager/>
    </TabPane>
  </Tabs>
);

export default RoleManage
