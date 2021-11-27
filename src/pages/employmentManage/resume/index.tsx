import { PageContainer } from '@ant-design/pro-layout';
import type { TabsProps } from '@/common/js/types';
import type { FC } from 'react';
import { history } from 'umi';
import { Button } from 'antd';
const tabList = [
  {
    key: 'resumeList',
    tab: '简历列表',
  },
  {
    key: 'resumeSetting',
    tab: '简历设置',
  },
];
const tabList2 = [
  {
    key: 'resumeList/resumeRecord',
    tab: '简历记录',
  },
];
const Resume: FC<TabsProps> = (props) => {
  const handleTabChange = (key: string) => {
    const { match } = props;
    const url = match.url === '/' ? '' : match.url;
    switch (key) {
      case 'resumeList':
        history.push(`${url}/resumeList`);
        break;
      case 'resumeSetting':
        history.push(`${url}/resumeSetting`);
        break;
      default:
        break;
    }
  };

  const getTabKey = () => {
    const { match, location } = props;
    const url = match.path === '/' ? '' : match.path;
    const tabKey = location.pathname.replace(`${url}/`, '');
    if (tabKey && tabKey !== '/') {
      return tabKey;
    }
    return 'resumeList';
  };
  return (
    <PageContainer
      header={{ title: '' }}
      tabList={props.location.pathname.replace(`${props.match.path}/`, '')==='resumeList/resumeRecord'?tabList2:tabList}
      tabActiveKey={getTabKey()}
      onTabChange={handleTabChange}
      tabBarExtraContent={props.location.pathname.replace(`${props.match.path}/`, '')==='resumeList/resumeRecord'?<Button type={'primary'} onClick={()=>history.goBack()}>返回</Button>:null}
    >
      {props.children}
    </PageContainer>
  );
}

export default Resume;
