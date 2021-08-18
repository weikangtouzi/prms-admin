import React from 'react';
import { Tabs } from 'antd';
import RegisterSetting from './register'
import AvatarSetting from './avatar'

const { TabPane } = Tabs;

const Register = () => (
  <Tabs defaultActiveKey="register" >
    <TabPane tab="注册设置" key="register">
      <RegisterSetting/>
    </TabPane>
    <TabPane tab="头像设置" key="icon">
      <AvatarSetting/>
    </TabPane>
  </Tabs>
);

export default Register;
