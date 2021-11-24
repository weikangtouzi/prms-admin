import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { useRef, useState } from 'react';
import { Button, Popconfirm } from 'antd';
import type { administratorType } from '@/pages/userManage/role/admin/data';
import { administratorList } from '@/pages/userManage/role/admin/service';
import AdminModal from './AdminModal';
import { PlusOutlined } from '@ant-design/icons';

const RoleAdmin = () => {
  const actionRef = useRef<ActionType>();
  const [visible, setVisible] = useState<boolean>(false);
  const [current, setCurrent] = useState<Partial<administratorType> | undefined>(undefined);

  // 展示弹框
  const showEditModal = (item: administratorType|undefined) => {
    setVisible(true);
    setCurrent(item);
  };

  // 关闭弹窗
  const onCancel = () => {
    setVisible(false);
    setCurrent({});
  };

  const columns: ProColumns<administratorType>[] = [
    {
      title: '管理员账号',
      dataIndex: 'account',
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
      title: '状态',
      dataIndex: 'status',
      hideInForm: true,
      valueEnum: {
        0: {
          text: '全部',
          status: 'Default',
        },
        1: {
          text: '已认证',
          status: 'Processing',
        },
        2: {
          text: '已禁用',
          status: 'Error',
        },
      },
    },
    {
      title: '最近登录时间',
      dataIndex: 'lastLoginTime',
      valueType: 'dateRange',
      render: (_, r) => r.lastLoginTime,
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      valueType: 'dateRange',
      render: (_, r) => r.createTime,
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => {
        return (
          [
            <a type={'link'} onClick={() => showEditModal( record)} key='info'>编辑</a>,

            <Popconfirm
              key='action'
            onConfirm={() => {}}
            onCancel={() => {}}
            title={`确认要${record.status === 2 ? '恢复' : '禁用'}这位企业管理员吗`}
          >
            {record.status === 2 ? (
              <a type={'link'} key='recover'>恢复</a>
            ) : (
              <a type={'link'} style={{color:'red'}} key={'ban'}>
                禁用
              </a>
            )}
          </Popconfirm>,
            <Popconfirm
              key='del'
              onConfirm={() => {}}
              onCancel={() => {}}
              title={`确认要删除这位管理员吗`}
            >
            <a type={'link'} style={{color:'#ff4d4f'}}>删除</a>
            </Popconfirm>
          ]
        );
      },
    },
  ];


  return (
    <>
    <ProTable<administratorType>
      headerTitle="企业用户列表"
      actionRef={actionRef}
      rowKey="account"
      options={false}
      search={{
        labelWidth: 120,
      }}
      toolBarRender={() => [
        <Button key="button" icon={<PlusOutlined />} type="primary" onClick={()=>showEditModal(undefined)}>
          添加
        </Button>,
      ]}
      request={async (
        // 第一个参数 params 查询表单和 params 参数的结合
        // 第一个参数中一定会有 pageSize 和  current ，这两个参数是 antd 的规范
        params,
      ) => {
        // 这里需要返回一个 Promise,在返回之前你可以进行数据转化
        // 如果需要转化参数可以在这里进行修改
        const msg = await administratorList({
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
      <AdminModal
        visible={visible}
        current={current}
        onCancel={onCancel}
        onSubmit={()=>{}}
      />
    </>
  );
};

export default RoleAdmin;
