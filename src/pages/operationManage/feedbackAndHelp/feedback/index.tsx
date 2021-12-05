import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { useRef, useState } from 'react';
import { Image, Popconfirm } from 'antd';
import type { FeedBackType } from '@/pages/operationManage/feedbackAndHelp/feedback/data';
import { feedbackList } from '@/pages/operationManage/feedbackAndHelp/feedback/service';
import FeedbackReply from './FeedbackReply';

const ReportList = () => {
  const actionRef = useRef<ActionType>();
  const [visible, setVisible] = useState<boolean>(false);
  const [current, setCurrent] = useState<Partial<FeedBackType> | undefined>(undefined);

  // 展示弹框
  const showEditModal = ( item: FeedBackType | undefined) => {
    setVisible(true);
    setCurrent(item);
  };

  // 关闭弹窗
  const onCancel = () => {
    setVisible(false);
    setCurrent({});
  };
  const columns: ProColumns<FeedBackType>[] = [
    {
      title: '反馈ID',
      dataIndex: 'id',
    },
    {
      title: '反馈者',
      dataIndex: 'reporter',
    },
    {
      title: '反馈内容',
      dataIndex: 'detail',
      ellipsis: true,
      hideInSearch: true,
    },
    {
      title: '反馈图片',
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
      title: '反馈时间',
      dataIndex: 'reportTime',
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
          text: '已处理',
          status: 'Success',
        },
        2: {
          text: '待处理',
          status: 'Processing',
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
            record.status ===2 && <a onClick={()=>showEditModal(record)}>回复</a>,
            <Popconfirm
              key='del'
              onConfirm={() => {
              }}
              onCancel={() => {
              }}
              title={`确认要删除这个反馈吗`}
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
      <ProTable<FeedBackType>
        headerTitle='反馈列表'
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
          const msg = await feedbackList({
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

      <FeedbackReply
        visible={visible}
        current={current}
        onCancel={onCancel}
        onSubmit={() => {
        }}
      />
    </>
  );
};

export default ReportList;
