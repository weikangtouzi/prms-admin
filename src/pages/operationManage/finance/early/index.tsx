import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { useRef } from 'react';
import type {EarlyTradeType} from '@/pages/operationManage/finance/early/data';
import { earlyTradeList } from '@/pages/operationManage/finance/early/service';

const EarlyTradeList = () => {
  const actionRef = useRef<ActionType>();

  const columns: ProColumns<EarlyTradeType>[] = [
    {
      title: '充值账号',
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
      title: '交易时间',
      dataIndex: 'tradeTime',
      valueType: 'dateRange',
      render:(_,r)=>r.tradeTime
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
  ];


  return (
      <ProTable<EarlyTradeType>
        headerTitle="早点充值列表"
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
          const msg = await earlyTradeList({
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

export default EarlyTradeList;
