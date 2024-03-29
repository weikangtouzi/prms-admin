import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { useRef, useState } from 'react';
import { Button, Popconfirm } from 'antd';
import type {AnnouncementType} from '@/pages/contentManage/announcement/data';
import { announcementList } from '@/pages/contentManage/announcement/service';
import { PlusOutlined } from '@ant-design/icons';
import AnnouncementEdit from './AnnouncementEdit';

const AnnouncementList = () => {
  const actionRef = useRef<ActionType>();
  const [visible, setVisible] = useState<boolean>(false);
  const [current, setCurrent] = useState<Partial<AnnouncementType> | undefined>(undefined);

  // 展示弹框
  const showEditModal = (item: AnnouncementType|undefined) => {
    setVisible(true);
    setCurrent(item);
  };

  // 关闭弹窗
  const onCancel = () => {
    setVisible(false);
    setCurrent({});
  };
  const columns: ProColumns<AnnouncementType>[] = [
    {
      title: '公告ID',
      dataIndex: 'id',
    },
    {
      title: '公告标题',
      dataIndex: 'title',
    },
    {
      title: '公告副标题',
      dataIndex: 'subTitle',
      ellipsis:true
    },
    {
      title: '发布人',
      dataIndex: 'publishUser',
      hideInSearch:true
    },
    {
      title: '发布时间',
      dataIndex: 'publishTime',
      valueType: 'dateRange',
      render:(_,r)=>r.publishTime
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
              title={`确认要${record.status === 2 ? '发布' : '下架'}这个公告吗`}
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
              title={`确认要删除这个公告吗`}
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
      <ProTable<AnnouncementType>
        headerTitle="公告列表"
        actionRef={actionRef}
        rowKey="id"
        options={false}
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button key="button" icon={<PlusOutlined />} type="primary" onClick={()=>showEditModal(undefined)}>
            添加资讯
          </Button>,
        ]}
        request={async (
          params,
        ) => {
          const msg = await announcementList({
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
      <AnnouncementEdit
        visible={visible}
        current={current}
        onCancel={onCancel}
        onSubmit={() => {
        }}
      />
    </>
  );
};

export default AnnouncementList;
