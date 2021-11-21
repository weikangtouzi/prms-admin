import { PageContainer } from '@ant-design/pro-layout';
import type { TabsProps } from '@/common/js/types';
import type { FC } from 'react';
import { history } from '@@/core/history';
const tabList = [
  {
    key: 'jobHunter',
    tab: '求职用户',
  },
  {
    key: 'recruiter',
    tab: '招聘用户',
  },
  {
    key: 'entrepreneur',
    tab: '创业者用户',
    disabled: true,
  },
  {
    key: 'investor',
    tab: '投资人用户',
    disabled: true,
  },
  {
    key: 'applications',
    tab: '顾问用户',
    disabled: true,
  }
];
const UserList: FC<TabsProps> = (props)=>{
  const handleTabChange = (key: string) => {
    const { match } = props;
    const url = match.url === '/' ? '' : match.url;
    switch (key) {
      case 'jobHunter':
        history.push(`${url}/jobHunter`);
        break;
      case 'recruiter':
        history.push(`${url}/recruiter`);
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
    return 'jobHunter';
  };
  return <PageContainer
    header={{title:''}}
    tabList={tabList}
    tabActiveKey={getTabKey()}
    onTabChange={handleTabChange}
  >
    {props.children}
  </PageContainer>
}

export default UserList;
