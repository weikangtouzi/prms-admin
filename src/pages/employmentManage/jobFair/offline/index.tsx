import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { useRef, useState } from 'react';
import { Button, Popconfirm } from 'antd';
import type { JobFairType } from './data';
import { offlineJobFairList } from './service';
import FairEdit from './FairEdit';
import { PlusOutlined } from '@ant-design/icons';

const JobFairList = () => {
  const actionRef = useRef<ActionType>();
  const [visible, setVisible] = useState<boolean>(false);
  const [current, setCurrent] = useState<Partial<JobFairType> | undefined>(undefined);

  // 关闭弹窗
  const onCancel = () => {
    setVisible(false);
    setCurrent({});
  };

  // 展示弹框
  const showEditModal = (item: JobFairType|undefined) => {
    setVisible(true);
    setCurrent(item);
  };

  const columns: ProColumns<JobFairType>[] = [
    {
      title: '招聘会ID',
      dataIndex: 'id',
    },
    {
      title: '招聘会标题',
      dataIndex: 'title',
    },
    {
      title: '主办方',
      dataIndex: 'sponsor',
    },
    {
      title: '举办时间',
      dataIndex: 'holdTime',
      valueType: 'dateRange',
      render: (_, record) => `${record.holdTime[0]}~${record.holdTime[1]}`,
    },
    {
      title: '报名企业',
      dataIndex: 'joinCompanyNum',
      hideInSearch: true,
    },
    {
      title: '招聘岗位',
      dataIndex: 'jobNum',
      hideInSearch: true,
    },
    {
      title: '求职者',
      dataIndex: 'jobHunterNum',
      hideInSearch: true,
    },
    {
      title: '发布人',
      dataIndex: 'publishUser',
      hideInSearch: true,
    },
    {
      title: '发布时间',
      dataIndex: 'publishTime',
    },
    {
      title: '状态',
      dataIndex: 'status',
      valueEnum: {
        0: {
          text: '全部',
          status: 'Default',
        },
        1: {
          text: '已发布',
          status: 'Processing',
        },
        2: {
          text: '已下线',
          status: 'Error',
        },
        3: {
          text: '未发布',
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
            <a type={'link'} onClick={() => showEditModal( record)} key='info'>编辑</a>,
            <Popconfirm
              key='action'
              onConfirm={() => {
              }}
              onCancel={() => {
              }}
              title={`确认要${record.status === 2 ? '发布' : '下架'}这个招聘会吗`}
            >
              {record.status === 2 ? (
                <a type={'link'} key='recover'>发布</a>
              ) : (
                <a type={'link'} style={{ color: 'red' }} key={'ban'}>
                  下架
                </a>
              )}
            </Popconfirm>,
            <Popconfirm
              key='del'
              onConfirm={() => {
              }}
              onCancel={() => {
              }}
              title={`确认要删除这个招聘会吗`}
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
      <ProTable<JobFairType>
        headerTitle='简历列表'
        actionRef={actionRef}
        rowKey='id'
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
          const msg = await offlineJobFairList({
            current: params.current,
            pageSize: params.pageSize,
            ...params,
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
      <FairEdit
        visible={visible}
        current={current}
        onCancel={onCancel}
        onSubmit={() => {
        }}
      />
    </>
  );
};

export default JobFairList;
