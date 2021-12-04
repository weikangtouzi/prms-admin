import { PageContainer } from '@ant-design/pro-layout';
import type { TabsProps } from '@/common/js/types';
import type { FC } from 'react';
import { history } from '@@/core/history';
const tabList = [
  {
    key: 'list',
    tab: '资讯列表',
  },
  {
    key: 'classify',
    tab: '资讯分类',
  },
];
const News: FC<TabsProps> = (props) => {
  const handleTabChange = (key: string) => {
    const { match } = props;
    const url = match.url === '/' ? '' : match.url;
    switch (key) {
      case 'list':
        history.push(`${url}/list`);
        break;
      case 'classify':
        history.push(`${url}/classify`);
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
    return 'list';
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

export default News;
