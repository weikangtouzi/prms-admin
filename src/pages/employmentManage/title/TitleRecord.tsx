import { Button, Card, Tabs } from 'antd';
import TitleTable from './TitleTable';
import { history } from 'umi';

const { TabPane } = Tabs;
const TitleRecord = () => {
  return <Card
    title='职位记录'
    bordered={false}
    extra={<Button type={'primary'} onClick={()=>history.goBack()}>返回</Button>}
    bodyStyle={{paddingTop:0}}
  >
    <Tabs defaultActiveKey='1'>
      <TabPane tab='被查看' key='1'>
        <TitleTable type={1}/>
      </TabPane>
      <TabPane tab='被收藏' key='2'>
        <TitleTable type={2}/>
      </TabPane>
      <TabPane tab='被投递' key='3'>
        <TitleTable type={3}/>
      </TabPane>
    </Tabs>
  </Card>;
};
export default TitleRecord;
