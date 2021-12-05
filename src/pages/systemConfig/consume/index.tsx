import { PageContainer } from '@ant-design/pro-layout';
import type { TabsProps } from '@/common/js/types';
import type { FC } from 'react';
import { history } from '@@/core/history';
const tabList = [
  {
    key: 'job',
    tab: '求职消费',
  },
  {
    key: 'single',
    tab: '招聘单次消费',
  },
  {
    key: 'suit',
    tab: '招聘套餐消费',
  },
];
const Consume: FC<TabsProps> = (props) => {
  const handleTabChange = (key: string) => {
    const { match } = props;
    const url = match.url === '/' ? '' : match.url;
    switch (key) {
      case 'job':
        history.push(`${url}/job`);
        break;
      case 'single':
        history.push(`${url}/single`);
        break;
      case 'suit':
        history.push(`${url}/suit`);
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
    return 'job';
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

export default Consume;
