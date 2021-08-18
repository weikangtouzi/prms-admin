import React from 'react';
import {
  LightFilter,
  ProFormText,
  ProFormDateRangePicker,
} from '@ant-design/pro-form';
import { Table, Button,Space } from 'antd';
import {useRequest} from 'umi';


const columns = [
  {
    title: '用户ID',
    dataIndex: 'userId',
  },
  {
    title: '用户名',
    dataIndex: 'username',
  },
  {
    title: '真实姓名',
    dataIndex: 'realName',
  },
  {
    title: '管理组',
    dataIndex: 'groupName',
  },
  {
    title: '创建者',
    dataIndex: 'creatorName',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
  },
  {
    title: '状态',
    dataIndex: 'status',
  },
  {
    title: '操作',
    key: 'action',
    render: (text:string, record:any) => (
      <Space size="small">
        <Button size={'small'} type={'primary'}>锁定</Button>
        <Button size={'small'}>日志</Button>
        <Button size={'small'}>修改</Button>
        <Button size={'small'} danger>删除</Button>
      </Space>
    ),
  },
];
const Admins = ()=>{
  const {data,loading} = useRequest('/api/admins')
  return <div>
       <LightFilter
         size={'small'}
         onFinish={async (values) => console.log(values)}
       >
         <ProFormText name="keyword" label="关键字" />
         <ProFormDateRangePicker name="date" label="注册日期" />
       </LightFilter>
       <div>
         <Table
           columns={columns}
           dataSource={data}
           loading={loading}
           rowKey='groupId'
           size={'small'}
           pagination={{
             size:'small',
             showSizeChanger:true,
             showQuickJumper:true
           }}
         />
       </div>
  </div>
}

export default Admins
