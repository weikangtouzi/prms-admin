import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { useRef, useState } from 'react';
import { Button, Popconfirm } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import type { classifyType } from '@/pages/contentManage/news/classify/data';
import { classifyList } from '@/pages/contentManage/news/classify/service';
import ClassifyEditModal from '@/pages/contentManage/news/classify/classifyEdit';

const ClassifyList = () => {
  const actionRef = useRef<ActionType>();
  const [visible, setVisible] = useState<boolean>(false);
  const [current, setCurrent] = useState<Partial<classifyType> | undefined>(undefined);

  // 展示弹框
  const showEditModal = (item: classifyType|undefined) => {
    setVisible(true);
    setCurrent(item);
  };

  // 关闭弹窗
  const onCancel = () => {
    setVisible(false);
    setCurrent({});
  };
  const columns: ProColumns<classifyType>[] = [
    {
      title: '分类ID',
      dataIndex: 'id',
    },
    {
      title: '分类名称',
      dataIndex: 'name',
    },
    {
      title: '关联文章数',
      dataIndex: 'contactArticle',
      hideInSearch:true
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
              title={<div>确认要{record.status === 2 ? '发布' : '下架'}这个分类吗</div>}
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
              title={`确认要删除这个分类吗`}
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
      <ProTable<classifyType>
        headerTitle="资讯分类列表"
        actionRef={actionRef}
        rowKey="id"
        options={false}
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button key="button" icon={<PlusOutlined />} type="primary" onClick={()=>showEditModal(undefined)}>
            添加分类
          </Button>,
        ]}
        request={async (
          params,
        ) => {
          const msg = await classifyList({
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
      <ClassifyEditModal
        visible={visible}
        current={current}
        onCancel={onCancel}
        onSubmit={() => {
        }}
      />
    </>
  );
};

export default ClassifyList;
