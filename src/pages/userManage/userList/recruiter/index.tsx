import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { userList } from '@/pages/userManage/userList/jobHunter/service';
import { useRef } from 'react';
import { Button } from 'antd';
import FormCascade from '@/components/common/formCascade';
import type { UserType } from '@/pages/userManage/userList/jobHunter/data';
import type { UserFilter } from '@/pages/userManage/userList/jobHunter/data';

const PersonalUser = () => {
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
      title: '手机号码',
      dataIndex: 'phoneNumber',
    },
    {
      title: '昵称',
      dataIndex: 'nickName',
      hideInSearch: true,
    },

    {
      title: '身份',
      dataIndex: 'type',
      hideInSearch: true,
    },
    {
      title: '所在城市',
      dataIndex: 'city',
      render: (_, r) => r.city,
      renderFormItem: () => {
        return <FormCascade />;
      },
    },
    {
      title: '公司名称',
      dataIndex: 'companyName',
    },
    {
      title: '实名状态',
      dataIndex: 'status',
      hideInSearch: true,
      valueEnum: {
        0: {
          text: '全部',
          status: 'Default',
        },
        1: {
          text: '已实名',
          status: 'Processing',
        },
        2: {
          text: '未实名',
          status: 'Error',
        },
      },
    },
    {
      title: '注册时间',
      dataIndex: 'registerTime',
      valueType: 'dateRange',
      render: (_, r) => r.registerTime,
    },
    {
      title: '用户状态',
      dataIndex: 'status',
      hideInForm: true,
      valueEnum: {
        0: {
          text: '全部',
          status: 'Default',
        },
        1: {
          text: '生效中',
          status: 'Processing',
        },
        2: {
          text: '已禁用',
          status: 'Error',
        },
      },
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => {
        return record.status === 2 ? (
          <Button type={'link'}>恢复</Button>
        ) : (
          <Button type={'link'} danger>
            禁用
          </Button>
        );
      },
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
          city: params?.city?.length > 1 ? params.city[params.city.length - 1] : undefined,
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

export default PersonalUser;
