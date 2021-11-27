import { Card, Tabs } from 'antd';
import RecordTable from '@/pages/employmentManage/resume/resumeList/RecordTable';

const { TabPane } = Tabs;
const ResumeRecord = () => {
  return <Card
    title=''
    bordered={false}
    bodyStyle={{paddingTop:0}}
  >
    <Tabs defaultActiveKey='1'>
      <TabPane tab='被查看' key='1'>
        <RecordTable type={1}/>
      </TabPane>
      <TabPane tab='邀请面试' key='2'>
        <RecordTable type={2}/>
      </TabPane>
      <TabPane tab='不合适' key='3'>
        <RecordTable type={3}/>
      </TabPane>
      <TabPane tab='被推送' key='4'>
        <RecordTable type={4}/>
      </TabPane>
      <TabPane tab='被收藏' key='5'>
        <RecordTable type={5}/>
      </TabPane>
    </Tabs>
  </Card>;
};
export default ResumeRecord;
