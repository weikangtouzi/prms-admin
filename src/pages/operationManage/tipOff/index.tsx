import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { useRef, useState } from 'react';
import { Image, Popconfirm } from 'antd';
import type { ReportType } from '@/pages/operationManage/tipOff/data';
import { reportList } from '@/pages/operationManage/tipOff/service';
import ReportAudit from './ReportAudit';
import ReportReply from './ReportReply';

const ReportList = () => {
  const actionRef = useRef<ActionType>();
  const [visible, setVisible] = useState<string | boolean>(false);
  const [current, setCurrent] = useState<Partial<ReportType> | undefined>(undefined);

  // 展示弹框
  const showEditModal = (type: 'audit' | 'reply', item: ReportType | undefined) => {
    setVisible(type);
    setCurrent(item);
  };

  // 关闭弹窗
  const onCancel = () => {
    setVisible(false);
    setCurrent({});
  };
  const columns: ProColumns<ReportType>[] = [
    {
      title: '被举报ID',
      dataIndex: 'reportedAccount',
    },
    {
      title: '被举报类型',
      dataIndex: 'reportedUserType',
      valueEnum: {
        0: {
          text: '全部',
          status: 'Default',
        },
        1: {
          text: '个人',
        },
        2: {
          text: '公司',
        },
      },
    },
    {
      title: '举报者',
      dataIndex: 'reporter',
    },
    {
      title: '举报类型',
      dataIndex: 'type',
      valueEnum: {
        0: {
          text: '全部',
          status: 'Default',
        },
        1: {
          text: '职位虚假',
        },
        2: {
          text: '恶意骚扰',
        },
      },
    },
    {
      title: '具体情况说明',
      dataIndex: 'detail',
      ellipsis: true,
      hideInSearch: true,
    },
    {
      title: '图片证明',
      dataIndex: 'detail',
      hideInSearch: true,
      width: 150,
      render: (_, record) => {
        return <Image.PreviewGroup>
          {record.imgComment.map((img) => {
            return <Image src={img} width={60} key={img} />;
          })}
        </Image.PreviewGroup>;
      },
    },

    {
      title: '举报时间',
      dataIndex: 'publishTime',
      valueType: 'dateRange',
      render: (_, r) => r.reportTime,
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
          text: '已审核',
          status: 'Processing',
        },
        2: {
          text: '待审核',
          status: 'Success',
        },
      },
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => {
        return (
          [
            <a type={'link'} onClick={() => showEditModal('audit',record)} key='info'>审核</a>,
            <a type={'link'} onClick={() => showEditModal('reply',record)} key='info'>回复</a>,
            <Popconfirm
              key='del'
              onConfirm={() => {
              }}
              onCancel={() => {
              }}
              title={`确认要删除这个举报吗`}
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
      <ProTable<ReportType>
        headerTitle='Banner列表'
        actionRef={actionRef}
        rowKey='id'
        options={false}
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => []}
        request={async (
          params,
        ) => {
          const msg = await reportList({
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
      <ReportAudit
        visible={visible==='audit'}
        current={current}
        onCancel={onCancel}
        onSubmit={() => {
        }}
      />
      <ReportReply
        visible={visible==='reply'}
        current={current}
        onCancel={onCancel}
        onSubmit={() => {
        }}
      />
    </>
  );
};

export default ReportList;
