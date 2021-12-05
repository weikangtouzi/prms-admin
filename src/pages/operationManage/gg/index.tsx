import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { useRef, useState } from 'react';
import { Button, Image, Popconfirm } from 'antd';
import type {AdType} from '@/pages/operationManage/gg/data';
import { adList } from '@/pages/operationManage/gg/service';
import { PlusOutlined } from '@ant-design/icons';
import BannerEdit from './BannerEdit';

const AdtList = () => {
  const actionRef = useRef<ActionType>();
  const [visible, setVisible] = useState<boolean>(false);
  const [current, setCurrent] = useState<Partial<AdType> | undefined>(undefined);

  // 展示弹框
  const showEditModal = (item: AdType|undefined) => {
    setVisible(true);
    setCurrent(item);
  };

  // 关闭弹窗
  const onCancel = () => {
    setVisible(false);
    setCurrent({});
  };
  const columns: ProColumns<AdType>[] = [
    {
      title: 'Banner图片',
      dataIndex: 'bannerUrl',
      hideInSearch:true,
      render:(_,r)=>{
        return  <Image
          width={60}
          src={r.bannerUrl}
        />
      }
    },
    {
      title: 'Banner名称',
      dataIndex: 'bannerName',
    },
    {
      title: '显示客户端',
      dataIndex: 'client',
      valueEnum: {
        0: {
          text: '全部',
          status: 'Default',
        },
        1: {
          text: 'App招聘端',
        },
        2: {
          text: 'App求职端',
        },
        3: {
          text: 'Web端官网',
        },
      },
    },
    {
      title: '显示位置',
      dataIndex: 'position',
      hideInSearch:true,
      valueEnum: {
        0: {
          text: '全部',
          status: 'Default',
        },
        1: {
          text: '首页',
        },
        2: {
          text: '活动页',
        }
      },
    },
    {
      title: '排序',
      dataIndex: 'sort',
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
              title={`确认要${record.status === 2 ? '发布' : '下架'}这个Banner吗`}
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
              title={`确认要删除这个Banner吗`}
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
      <ProTable<AdType>
        headerTitle="Banner列表"
        actionRef={actionRef}
        rowKey="id"
        options={false}
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button key="button" icon={<PlusOutlined />} type="primary" onClick={()=>showEditModal(undefined)}>
            添加Banner
          </Button>,
        ]}
        request={async (
          params,
        ) => {
          const msg = await adList({
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
      <BannerEdit
        visible={visible}
        current={current}
        onCancel={onCancel}
        onSubmit={() => {
        }}
      />
    </>
  );
};

export default AdtList;
