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
    title: '组编号',
    dataIndex: 'groupId',
  },
  {
    title: '管理组',
    dataIndex: 'groupName',
  },
  {
    title: '创建者',
    dataIndex: 'createName',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
  },
  {
    title: '操作',
    key: 'action',
    render: (text:string, record:any) => (
      <Space size="small">
        <Button size={'small'} type={'primary'}>锁定</Button>
        <Button size={'small'}>权限</Button>
        <Button size={'small'}>修改</Button>
        <Button size={'small'} danger>删除</Button>
      </Space>
    ),
  },
];
const Group = ()=>{
  const {data,loading} = useRequest('/api/groups')
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

export default Group
