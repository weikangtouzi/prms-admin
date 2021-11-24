import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { userList } from '@/pages/userManage/userList/jobHunter/service';
import { useRef } from 'react';
import type { UserType } from '@/pages/userManage/userList/jobHunter/data';
import type { UserFilter } from '@/pages/userManage/userList/jobHunter/data';

const UserUnRegister = () => {
  const actionRef = useRef<ActionType>();

  const columns: ProColumns<UserType>[] = [
    {
      title: '用户姓名/ID',
      dataIndex: 'keyword',
      hideInTable: true,
    },
    {
      title: '用户ID',
      dataIndex: 'userId',
      hideInSearch: true,
    },
    {
      title: '用户姓名',
      dataIndex: 'userName',
      hideInSearch: true,
    },
    {
      title: '注册时间',
      dataIndex: 'registerTime',
      valueType: 'dateRange',
      render: (_, r) => r.registerTime,
    },
    {
      title: '注销时间',
      dataIndex: 'registerTime',
      valueType: 'dateRange',
      render: (_, r) => r.unRegisterTime,
    },
  ];
  return (
    <ProTable<UserType, UserFilter>
      headerTitle="求职用户列表"
      actionRef={actionRef}
      rowKey="userId"
      options={false}
      search={{
        labelWidth: 120,
      }}
      toolBarRender={() => []}
      request={async (
        // 第一个参数 params 查询表单和 params 参数的结合
        // 第一个参数中一定会有 pageSize 和  current ，这两个参数是 antd 的规范
        params,
      ) => {
        // 这里需要返回一个 Promise,在返回之前你可以进行数据转化
        // 如果需要转化参数可以在这里进行修改
        const msg = await userList({
          current: params.current,
          pageSize: params.pageSize,
        });
        return {
          data: msg.data,
          // success 请返回 true，
          // 不然 table 会停止解析数据，即使有数据
          success: true,
          // 不传会使用 data 的长度，如果是分页一定要传
          total: msg.total,
        };
      }}
      columns={columns}
    />
  );
};

export default UserUnRegister;
