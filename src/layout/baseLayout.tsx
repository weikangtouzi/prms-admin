import React from 'react';
import { Layout, Menu,ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import { HomeOutlined, BellOutlined, SearchOutlined,PoweroffOutlined } from '@ant-design/icons';
import styles from './index.less'
import {useHistory  } from 'umi'
import rootRoutes from '@/config/route';

const { Sider } = Layout;
const BaseLayout = (props:React.PropsWithChildren<any>)=>{
  const history = useHistory();
  const {location:{pathname}} = history
  return   <Layout className={styles.layout}>
    <div className={styles.header}>
      <div className={styles.logo} >logo</div>
      <Menu mode="horizontal" className={styles.menu}>
        {rootRoutes.map((route)=>{
          return <Menu.Item key={route.path} onClick={()=>{history.push(route.path)}}>{route.name}</Menu.Item>;
        })}
      </Menu>
      <div className={styles.right}>
        <span><HomeOutlined /></span>
        <span><BellOutlined /></span>
        <span><SearchOutlined /></span>
        <span><PoweroffOutlined /></span>
      </div>
    </div>
    <Layout className={styles.content}>
      <Sider className={styles.submenu} width={148}>
        <Menu className={styles.menu}>
          {rootRoutes.find(route=>pathname.startsWith(route.path)
          )?.routes?.filter(rr=>rr.name).map(r=>{
            return <Menu.Item key={r.path} onClick={()=>{r.path && history.push(r.path)}}>{r.name}</Menu.Item>;
          })}
        </Menu>
      </Sider>
      <Layout className={styles.contentLayout}>
        <ConfigProvider locale={zhCN}>
          <div className={styles.container}>
            {props.children}
          </div>
        </ConfigProvider>

      </Layout>
    </Layout>
  </Layout>
}

export default BaseLayout;
