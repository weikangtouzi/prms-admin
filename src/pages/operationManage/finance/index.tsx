import { PageContainer } from '@ant-design/pro-layout';
import type { TabsProps } from '@/common/js/types';
import type { FC } from 'react';
import { history } from '@@/core/history';
const tabList = [
  {
    key: 'early',
    tab: '早点充值',
  },
  {
    key: 'seeker',
    tab: '求职者招聘',
  },
  {
    key: 'company',
    tab: '企业订单',
  },
  {
    key: 'statistic',
    tab: '数据统计',
  },
];
const UserList: FC<TabsProps> = (props) => {
  const handleTabChange = (key: string) => {
    const { match } = props;
    const url = match.url === '/' ? '' : match.url;
    switch (key) {
      case 'early':
        history.push(`${url}/early`);
        break;
      case 'seeker':
        history.push(`${url}/seeker`);
        break;
      case 'company':
        history.push(`${url}/company`);
        break;
      case 'statistic':
        history.push(`${url}/statistic`);
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
    return 'early';
  };
  return (
    <PageContainer
      header={{ title: '' }}
      tabList={tabList}
      tabActiveKey={getTabKey()}
      onTabChange={handleTabChange}
    >
      {props.children}
    </PageContainer>
  );
};

export default UserList;
