import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { useRef, useState } from 'react';
import { Button, Popconfirm } from 'antd';
import type {SensitiveWordType} from '@/pages/contentManage/sensitiveWord/data';
import { PlusOutlined } from '@ant-design/icons';
import SensitiveWordEditModal from './SensitiveWordEditModal';
import { sensitiveWordList } from '@/pages/contentManage/sensitiveWord/service';

const SensitiveWordList = () => {
  const actionRef = useRef<ActionType>();
  const [visible, setVisible] = useState<boolean>(false);
  const [current, setCurrent] = useState<Partial<SensitiveWordType> | undefined>(undefined);

  // 展示弹框
  const showEditModal = (item: SensitiveWordType|undefined) => {
    setVisible(true);
    setCurrent(item);
  };

  // 关闭弹窗
  const onCancel = () => {
    setVisible(false);
    setCurrent({});
  };
  const columns: ProColumns<SensitiveWordType>[] = [
    {
      title: '敏感词ID',
      dataIndex: 'id',
    },
    {
      title: '敏感词',
      dataIndex: 'title',
    },
    {
      title: '发布人',
      dataIndex: 'publishUser',
      hideInSearch:true
    },
    {
      title: '添加时间',
      dataIndex: 'publishTime',
      valueType: 'dateRange',
      render:(_,r)=>r.publishTime
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: () => {
        return (
          [
            <Popconfirm
              key='del'
              onConfirm={() => {
              }}
              onCancel={() => {
              }}
              title={`确认要删除这个敏感词吗`}
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
      <ProTable<SensitiveWordType>
        headerTitle="敏感词列表"
        actionRef={actionRef}
        rowKey="id"
        options={false}
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button key="button" icon={<PlusOutlined />} type="primary" onClick={()=>showEditModal(undefined)}>
            添加敏感词
          </Button>,
        ]}
        request={async (
          params,
        ) => {
          const msg = await sensitiveWordList({
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
      <SensitiveWordEditModal
        visible={visible}
        current={current}
        onCancel={onCancel}
        onSubmit={() => {
        }}
      />
    </>
  );
};

export default SensitiveWordList;
