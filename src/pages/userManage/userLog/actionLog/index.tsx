import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { useRef } from 'react';
import type { LogType} from './data';
import { logList } from './service';

const RoleAdmin = () => {
  const actionRef = useRef<ActionType>();

  const columns: ProColumns<LogType>[] = [
    {
      title: '管理员账号',
      dataIndex: 'adminAccount',
    },
    {
      title: '真实姓名',
      dataIndex: 'realName',
    },
    {
      title: '所属角色',
      dataIndex: 'role',
      hideInForm: true,
      valueEnum: {
        0: {
          text: '全部',
        },
        1: {
          text: '超级管理员',
        },
        2: {
          text: '商务',
        },
        3: {
          text: '运营',
        },
      },
    },
    {
      title:'IP记录',
      dataIndex:'ip',
      hideInSearch:true
    },
    {
      title: '操作模块',
      dataIndex: 'moduleId',
      hideInForm: true,
      valueEnum: {
        0: {
          text: '全部',
        },
        1: {
          text: '用户管理',
        },
        2: {
          text: '招聘管理',
        },
        3: {
          text: '内容管理',
        },
      },
    },
    {
      title: '操作时间',
      dataIndex: 'actionTime',
      valueType: 'dateRange',
      render: (_, r) => r.actionTime,
    },
    {
      title: 'IP/事件内容',
      dataIndex: 'keyword',
      hideInTable:true
    },
  ];


  return (
    <>
    <ProTable<LogType>
      headerTitle="操作日志列表"
      actionRef={actionRef}
      rowKey="logId"
      options={false}
      search={{
        labelWidth: 120,
      }}
      toolBarRender={() => []}
      request={async (
        params,
      ) => {
        const msg = await logList({
          current: params.current,
          pageSize: params.pageSize,
          ...params
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
    </>
  );
};

export default RoleAdmin;
