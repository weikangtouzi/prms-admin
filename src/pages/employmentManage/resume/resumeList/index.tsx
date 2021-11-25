import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { useRef, useState } from 'react';
import { Button, Popconfirm } from 'antd';
import type { resumeType } from './data';
import { resumeList } from './service';
import AdminModal from './AdminModal';
import { PlusOutlined } from '@ant-design/icons';
import FormCascade from '@/components/common/formCascade';
import FormSlider from '@/components/common/formSlider';

const ResumeList = () => {
  const actionRef = useRef<ActionType>();
  const [visible, setVisible] = useState<boolean>(false);
  const [current, setCurrent] = useState<Partial<resumeType> | undefined>(undefined);

  // 展示弹框
  const showEditModal = (item: resumeType|undefined) => {
    setVisible(true);
    setCurrent(item);
  };

  // 关闭弹窗
  const onCancel = () => {
    setVisible(false);
    setCurrent({});
  };

  const columns: ProColumns<resumeType>[] = [
    {
      title: '简历ID',
      dataIndex: 'resumeId',
    },
    {
      title: '用户账号',
      dataIndex: 'userAccount',
    },
    {
      title: '用户姓名',
      dataIndex: 'userName',
    },
    {
      title:'期望岗位',
      dataIndex: 'expectTitle',
      hideInSearch:true
    },
    {
      title:'期望薪资',
      dataIndex: 'expectSalary',
      formItemProps:{style:{marginBottom:0}},
      render: (_, r) => `${r.expectSalary[0]}k~${r.expectSalary[1]}k`,
      renderFormItem: () => {
        return <FormSlider/>;
      },
    },
    {
      title:'简历完善度',
      dataIndex: 'userName',
      hideInTable:true
    },
    {
      title:'期望城市',
      dataIndex: 'expectCity',
      render: (_, r) => r.expectCity,
      renderFormItem: () => {
        return <FormCascade />;
      },
    },
    {
      title: '状态',
      dataIndex: 'status',
      hideInForm: true,
      hideInSearch:true,
      valueEnum: {
        0: {
          text: '全部',
          status: 'Default',
        },
        1: {
          text: '正常',
          status: 'Processing',
        },
        2: {
          text: '锁定',
          status: 'Error',
        },
      },

    },

    {
      title: '更新时间',
      dataIndex: 'lastLoginTime',
      valueType: 'dateRange',
      render: (_, r) => r.updateTime,
    },
    {
      title: '发布时间',
      dataIndex: 'publishTime',
      valueType: 'dateRange',
      render: (_, r) => r.publishTime,
    },
    {
      title: '增值服务',
      dataIndex: 'vas',
      valueEnum: {
        0: {
          text: '全部',
          status: 'Default',
        },
        1: {
          text: '刷新',
        },
        2: {
          text: '置顶',
        },
      },
      render: (_, r) => r.vas.join('，'),
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => {
        return (
          [
            <a type={'link'} onClick={() => showEditModal( record)} key='info'>预览</a>,

            <Popconfirm
              key='action'
            onConfirm={() => {}}
            onCancel={() => {}}
            title={`确认要${record.status === 2 ? '恢复' : '锁定'}这份简历吗`}
          >
            {record.status === 2 ? (
              <a type={'link'} key='recover'>恢复</a>
            ) : (
              <a type={'link'} style={{color:'red'}} key={'ban'}>
                锁定
              </a>
            )}
          </Popconfirm>,
            <Popconfirm
              key='del'
              onConfirm={() => {}}
              onCancel={() => {}}
              title={`确认要删除这份简历吗`}
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
    <ProTable<resumeType>
      headerTitle="简历列表"
      actionRef={actionRef}
      rowKey="resumeId"
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
        const msg = await resumeList({
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

export default ResumeList;
