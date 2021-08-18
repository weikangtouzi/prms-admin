import React from 'react';
import { Tabs } from 'antd';
import Agreement from './agreement';
import PrivacyAgreement from './privacyAgreement';
import Introduce from './introduce';

const { TabPane } = Tabs;

const SystemConfig = () => (
  <Tabs defaultActiveKey="user" >
    <TabPane tab="用户协议" key="user">
      <Agreement/>
    </TabPane>
    <TabPane tab="隐私保护协议" key="company">
      <PrivacyAgreement/>
    </TabPane>
    <TabPane tab="app介绍" key="dock">
      <Introduce/>
    </TabPane>
  </Tabs>
);

export default SystemConfig
