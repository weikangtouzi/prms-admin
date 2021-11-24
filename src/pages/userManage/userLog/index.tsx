import { PageContainer } from '@ant-design/pro-layout';
import type { TabsProps } from '@/common/js/types';
import type { FC } from 'react';
import { history } from '@@/core/history';
const tabList = [
  {
    key: 'actionLog',
    tab: '操作日志',
  },
  {
    key: 'userUnRegister',
    tab: '用户注销',
  },
];
const UserLog: FC<TabsProps> = (props) => {
  const handleTabChange = (key: string) => {
    const { match } = props;
    const url = match.url === '/' ? '' : match.url;
    switch (key) {
      case 'actionLog':
        history.push(`${url}/actionLog`);
        break;
      case 'userUnRegister':
        history.push(`${url}/userUnRegister`);
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
    return 'actionLog';
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

export default UserLog;
