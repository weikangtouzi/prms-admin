import React from 'react';
import {
  LightFilter,
  ProFormText,
  ProFormSelect,
  ProFormDateRangePicker,
} from '@ant-design/pro-form';
import { Table, Button,Space } from 'antd';
import {useRequest} from 'umi';


const columns = [
  {
    title: 'UID',
    dataIndex: 'uid',
  },
  {
    title: '用户名',
    dataIndex: 'username',
  },
  {
    title: '姓名',
    dataIndex: 'realName',
  },
  {
    title: '拥有身份',
    dataIndex: 'type',
  },
  {
    title: '手机认证',
    dataIndex: 'phone',
  },
  {
    title: '邮箱认证',
    dataIndex: 'email',
  },
  {
    title: '身份认证',
    dataIndex: 'identity',
  },
  {
    title: '登录时间',
    dataIndex: 'loginTime',
  },
  {
    title: '注册时间',
    dataIndex: 'registerTime',
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
        <Button size={'small'} type={'primary'}>审核</Button>
        <Button size={'small'}>锁定</Button>
        <Button size={'small'} danger>删除</Button>
      </Space>
    ),
  },
];
const UserList = ()=>{
  const {data,loading} = useRequest('/api/users')
  return <div>
       <LightFilter
         size={'small'}
         onFinish={async (values) => console.log(values)}
       >
         <ProFormSelect
           name="rna"
           label="实名认证会员"
           allowClear={false}
           fieldProps={{
             labelInValue: true,
           }}
           valueEnum={{
             0: '是',
             1: '否',
           }}
         />
         <ProFormSelect
           name="type"
           label="身份类型"
           allowClear={false}
           fieldProps={{
             labelInValue: true,
           }}
           valueEnum={{
             job: '求职用户',
             recruit: '招聘用户',
             entrepreneurs: '创业者用户',
             investor: '投资人用户',
             adviser: '顾问用户',
           }}
         />
         <ProFormSelect
           name="phoneAuth"
           label="手机认证"
           allowClear={false}
           fieldProps={{
             labelInValue: true,
           }}
           valueEnum={{
             0: '是',
             1: '否',
           }}
         />
         <ProFormText name="keyword" label="关键字" />
         <ProFormDateRangePicker name="date" label="注册日期" />
       </LightFilter>
       <div>
         <Space style={{ margin: 8,marginLeft:0 }}>
           <Button size={'small'} type={'primary'}>添加会员</Button>
           <Button size={'small'} type={'primary'}>导出会员</Button>
         </Space>
         <Table
           columns={columns}
           dataSource={data}
           loading={loading}
           rowKey='uid'
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

export default UserList
