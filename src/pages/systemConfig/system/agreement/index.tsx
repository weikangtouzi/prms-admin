import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { useRef, useState } from 'react';
import type { HelpType } from '@/pages/operationManage/feedbackAndHelp/help/data';
import AgreementEdit from './AgreementEdit';

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
      title: '序号',
      dataIndex: 'id',
    },
    {
      title: '内容名称',
      dataIndex: 'title',
    },
    {
      title: '发布人',
      dataIndex: 'publishUser',
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
            <a type={'link'} onClick={() => showEditModal( record)} key='info'>编辑</a>
          ]
        );
      },
    },
  ];


  return (
    <>
      <ProTable<HelpType>
        headerTitle='协议内容列表'
        actionRef={actionRef}
        rowKey='id'
        options={false}
        search={false}
        pagination={false}
        toolBarRender={() => []}
        request={async (
          // params,
        ) => {
          // const msg = await helpList({
          //   current: params.current,
          //   pageSize: params.pageSize,
          // });
          return {
            data: [
              {id:'1',publishUser:'管理员',title:'用户协议',reportTime:'2021-10-10'},
              {id:'2',publishUser:'管理员',title:'隐私协议',reportTime:'2021-10-10'},
              {id:'3',publishUser:'管理员',title:'App介绍',reportTime:'2021-10-10'},
            ] as HelpType[],
            success: true,
            total: 3,
          };
        }}
        columns={columns}
      />

      <AgreementEdit
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
