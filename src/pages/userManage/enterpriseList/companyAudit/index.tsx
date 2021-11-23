import { Tabs } from 'antd';
import AllAudit from '@/pages/userManage/enterpriseList/companyAudit/allAudit';
import FailAudit from '@/pages/userManage/enterpriseList/companyAudit/failAudit';
import SuccessAudit from '@/pages/userManage/enterpriseList/companyAudit/successAudit';
import UnAudit from '@/pages/userManage/enterpriseList/companyAudit/unAudit';

const { TabPane } = Tabs;
const CompanyAudit = () => (
  <div style={{background:'white',padding:'0 24px 16px'}}>
    <Tabs defaultActiveKey='1'>
      <TabPane tab='全部' key='all'>
        <AllAudit/>
      </TabPane>
      <TabPane tab='待审核' key='2'>
        <UnAudit/>
      </TabPane>
      <TabPane tab='审核失败' key='3'>
        <FailAudit/>
      </TabPane>
      <TabPane tab='审核成功' key='4'>
        <SuccessAudit/>
      </TabPane>
    </Tabs>
  </div>
);


export default CompanyAudit;
