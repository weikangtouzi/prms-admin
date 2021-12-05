import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { useRef, useState } from 'react';
import { Button, Popconfirm } from 'antd';
import type { SuitType } from '@/pages/systemConfig/consume/suit/data';
import SuitEdit from './SuitEdit';
import { PlusOutlined } from '@ant-design/icons';

const demoData: SuitType[] = [
  { id:'1', title:'认证企业',yearFee: 2,refreshNum: 2,communicateNum: 2,resumeNum: 2,videoNum: 2,jobNum: 2,memberNum: 2,topNum: 2,publishUser: '管理员',publishTime: '2021-10-21'},
  { id:'2', title:'铜牌会员',yearFee: 3,refreshNum: 3,communicateNum: 3,resumeNum: 3,videoNum: 3,jobNum: 3,memberNum: 3,topNum: 3,publishUser: '管理员',publishTime: '2021-10-21'},
  { id:'3', title:'银牌会员',yearFee: 5,refreshNum: 5,communicateNum: 5,resumeNum: 5,videoNum: 5,jobNum: 5,memberNum: 5,topNum: 5,publishUser: '管理员',publishTime: '2021-10-21'},
  { id:'4', title:'金牌会员',yearFee: 10,refreshNum: 10,communicateNum: 10,resumeNum: 10,videoNum: 10,jobNum:10,memberNum: 10,topNum: 10,publishUser: '管理员',publishTime: '2021-10-21'},
  { id:'5', title:'皇冠会员',yearFee: 50,refreshNum: 50,communicateNum: 50,resumeNum: 50,videoNum: 50,jobNum:50,memberNum: 50,topNum: 50,publishUser: '管理员',publishTime: '2021-10-21'},
]

const HelpList = () => {
  const actionRef = useRef<ActionType>();
  const [visible, setVisible] = useState<boolean>(false);
  const [current, setCurrent] = useState<Partial<SuitType> | undefined>(undefined);

  // 展示弹框
  const showEditModal = ( item: SuitType | undefined) => {
    setVisible(true);
    setCurrent(item);
  };

  // 关闭弹窗
  const onCancel = () => {
    setVisible(false);
    setCurrent({});
  };
  const columns: ProColumns<SuitType>[] = [
    {
      title: '排序',
      dataIndex: 'id',
    },
    {
      title: '套餐名称',
      dataIndex: 'title',
    },
    {
      title: '年费(元)',
      dataIndex: 'yearFee',
    },
    {
      title: '职位刷新数',
      dataIndex: 'refreshNum',
    },
    {
      title: '人才沟通数',
      dataIndex: 'communicateNum',
    },
    {
      title: '查看简历数',
      dataIndex: 'resumeNum',
    },
    {
      title: '视频面试数',
      dataIndex: 'videoNum',
    },
    {
      title: '发布职位数',
      dataIndex: 'jobNum',
    },
    {
      title: '成员管理数',
      dataIndex: 'memberNum',
    },
    {
      title: '职位置顶数',
      dataIndex: 'topNum',
    },
    {
      title: '发布时间',
      dataIndex: 'publishTime',
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => {
        return (
          [
             <a type={'link'} onClick={() => showEditModal( record)} key='info'>编辑</a>,
             record.id!=='1' && <Popconfirm
              key='del'
              onConfirm={() => {
              }}
              onCancel={() => {
              }}
              title={`确认要删除这个套餐吗`}
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
      <ProTable<SuitType>
        headerTitle='套餐列表'
        actionRef={actionRef}
        rowKey='id'
        pagination={false}
        options={false}
        search={false}
        toolBarRender={() => [
          <Button key="button" icon={<PlusOutlined />} type="primary" onClick={()=>showEditModal(undefined)}>
            添加套餐
          </Button>,
        ]}
        request={async (
          // params,
        ) => {
          // const msg = await helpList({
          //   current: params.current,
          //   pageSize: params.pageSize,
          // });
          return {
            data: demoData,
            success: true,
            total: 5,
          };
        }}
        columns={columns}
      />

      <SuitEdit
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
