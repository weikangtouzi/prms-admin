import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { useRef } from 'react';
import type {SeekerTradeType} from '@/pages/operationManage/finance/seeker/data';
import { seekerTradeList } from '@/pages/operationManage/finance/seeker/service';

const SeekerTradeList = () => {
  const actionRef = useRef<ActionType>();

  const columns: ProColumns<SeekerTradeType>[] = [
    {
      title: '类型',
      dataIndex: 'type',
      valueEnum: {
        0: {
          text: '全部',
          status: 'Default',
        },
        1: {
          text: '简历刷新',
        },
        2: {
          text: '简历置顶',
        },
        3: {
          text: '简历模板',
        },
      },
    },
    {
      title: '账户',
      dataIndex: 'account',
    },
    {
      title: '支付方式',
      dataIndex: 'payType',
      valueEnum: {
        0: {
          text: '全部',
          status: 'Default',
        },
        1: {
          text: '支付宝',
        },
        2: {
          text: '微信',
        },
      },
    },
    {
      title: '金额',
      dataIndex: 'price',
      hideInSearch:true
    },
    {
      title: '交易号',
      dataIndex: 'tradeNo',
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
          text: '成功',
          status: 'Processing',
        },
        2: {
          text: '失败',
          status: 'Error',
        },
      },
    },
    {
      title: '交易时间',
      dataIndex: 'tradeTime',
      valueType: 'dateRange',
      render:(_,r)=>r.tradeTime
    },
  ];


  return (
      <ProTable<SeekerTradeType>
        headerTitle="求职者订单列表"
        actionRef={actionRef}
        rowKey="id"
        options={false}
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => []}
        request={async (
          params,
        ) => {
          const msg = await seekerTradeList({
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

  );
};

export default SeekerTradeList;
