import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { useRef, useState } from 'react';
import { Button, Popconfirm } from 'antd';
import type { HelpType } from '@/pages/operationManage/feedbackAndHelp/help/data';
import { helpList } from '@/pages/operationManage/feedbackAndHelp/help/service';
import HelpEdit from './HelpEdit';
import { PlusOutlined } from '@ant-design/icons';

const HelpList = () => {
  const actionRef = useRef<ActionType>();
  const [visible, setVisible] = useState<boolean>(false);
  const [current, setCurrent] = useState<Partial<HelpType> | undefined>(undefined);

  // 展示弹框
  const showEditModal = ( item: HelpType | undefined) => {
    setVisible(true);
    setCurrent(item);
  };

  // 关闭弹窗
  const onCancel = () => {
    setVisible(false);
    setCurrent({});
  };
  const columns: ProColumns<HelpType>[] = [
    {
      title: '内容ID',
      dataIndex: 'id',
    },
    {
      title: '内容标题',
      dataIndex: 'title',
      ellipsis:true
    },
    {
      title: '发布人',
      dataIndex: 'publishUser',
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
          text: '已发布',
          status: 'Success',
        },
        2: {
          text: '待发布',
          status: 'Processing',
        },
      },
    },
    {
      title: '发布时间',
      dataIndex: 'reportTime',
      valueType: 'dateRange',
      render: (_, r) => r.reportTime,
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
              onConfirm={() => {
              }}
              onCancel={() => {
              }}
              title={`确认要${record.status === 2 ? '发布' : '下线'}这个帮助内容吗`}
            >
              {record.status === 2 ? (
                <a type={'link'} key='recover'>发布</a>
              ) : (
                <a type={'link'} style={{ color: 'red' }} key={'ban'}>
                  下线
                </a>
              )}
            </Popconfirm>,
            <Popconfirm
              key='del'
              onConfirm={() => {
              }}
              onCancel={() => {
              }}
              title={`确认要删除这个帮助内容吗`}
            >
              <a type={'link'} style={{ color: '#ff4d4f' }}>删除</a>
            </Popconfirm>,
          ]
        );
      },
    },
  ];


  return (
    <>
      <ProTable<HelpType>
        headerTitle='反馈列表'
        actionRef={actionRef}
        rowKey='id'
        options={false}
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button key="button" icon={<PlusOutlined />} type="primary" onClick={()=>showEditModal(undefined)}>
            添加帮助
          </Button>,
        ]}
        request={async (
          params,
        ) => {
          const msg = await helpList({
            current: params.current,
            pageSize: params.pageSize,
          });
          return {
            data: msg.data,
            success: true,
            total: msg.total,
          };
        }}
        columns={columns}
      />

      <HelpEdit
        visible={visible}
        current={current}
        onCancel={onCancel}
        onSubmit={() => {
        }}
      />
    </>
  );
};

export default HelpList;
