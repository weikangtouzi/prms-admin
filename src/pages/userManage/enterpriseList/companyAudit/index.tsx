import { Tabs } from 'antd';

const { TabPane } = Tabs;
const CompanyAudit = () => (
  <div style={{background:'white',padding:'0 24px 16px'}}>
    <Tabs defaultActiveKey='1'>
      <TabPane tab='全部' key='all'>
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab='待审核' key='2'>
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab='审核失败' key='3'>
        Content of Tab Pane 3
      </TabPane>
      <TabPane tab='审核成功' key='4'>
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  </div>
);


export default CompanyAudit;
