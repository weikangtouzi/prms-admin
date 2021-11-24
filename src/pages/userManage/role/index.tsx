import { PageContainer } from '@ant-design/pro-layout';
import type { TabsProps } from '@/common/js/types';
import type { FC } from 'react';
import { history } from '@@/core/history';
const tabList = [
  {
    key: 'admin',
    tab: '管理员',
  },
  {
    key: 'auth',
    tab: '角色权限',
  },
];
const Role: FC<TabsProps> = (props) => {
  const handleTabChange = (key: string) => {
    const { match } = props;
    const url = match.url === '/' ? '' : match.url;
    switch (key) {
      case 'admin':
        history.push(`${url}/admin`);
        break;
      case 'auth':
        history.push(`${url}/auth`);
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
    return 'admin';
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

export default Role;
