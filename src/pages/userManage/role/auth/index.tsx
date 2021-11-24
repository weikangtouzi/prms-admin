import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { useRef, useState } from 'react';
import { Button, Popconfirm } from 'antd';
import type { roleType } from './data';
import { roleList } from './service';
import RoleModal from './RoleModal';
import { PlusOutlined } from '@ant-design/icons';

const RoleList = () => {
  const actionRef = useRef<ActionType>();
  const [visible, setVisible] = useState<boolean>(false);
  const [current, setCurrent] = useState<Partial<roleType> | undefined>(undefined);

  // 展示弹框
  const showEditModal = (item: roleType|undefined) => {
    setVisible(true);
    setCurrent(item);
  };
  // 关闭弹窗
  const onCancel = () => {
    setVisible(false);
    setCurrent({});
  };

  const columns: ProColumns<roleType>[] = [
    {
      title: '角色名称',
      dataIndex: 'roleName',
      width:250
    },

    {
      title: '角色人数',
      dataIndex: 'memberNum',
      hideInSearch:true,
      width:150
    },
    {
      title: '角色描述',
      dataIndex: 'roleDesc',
      hideInSearch:true,
      ellipsis:true
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      valueType:'dateRange',
      width:200,
      render: (_, r) => r.createTime,
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      width:150,
      render: (_, record) => {
        return (
          [
            <a type={'link'} onClick={() => showEditModal( record)} key='info'>编辑</a>,
            <Popconfirm
              key='del'
              onConfirm={() => {}}
              onCancel={() => {}}
              title={`确认删除当前角色吗`}
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
    <ProTable<roleType>
      headerTitle="角色列表"
      actionRef={actionRef}
      rowKey="roleId"
      options={false}
      search={{
        labelWidth: 120,
      }}
      toolBarRender={() => [
        <Button key="button" icon={<PlusOutlined />} type="primary" onClick={()=>showEditModal(undefined)}>
          添加角色
        </Button>,
      ]}
      request={async (
        params,
      ) => {
        // 这里需要返回一个 Promise,在返回之前你可以进行数据转化
        // 如果需要转化参数可以在这里进行修改
        const msg = await roleList({
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
      <RoleModal
        visible={visible}
        current={current}
        onSubmit={(values)=>{
          console.log(values);}}
        onCancel={onCancel} />
    </>
  );
}

export default RoleList;
