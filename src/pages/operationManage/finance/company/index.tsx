import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { useRef } from 'react';
import type {CompanyTradeType} from '@/pages/operationManage/finance/company/data';
import { companyTradeList } from '@/pages/operationManage/finance/company/service';

const CompanyTradeList = () => {
  const actionRef = useRef<ActionType>();

  const columns: ProColumns<CompanyTradeType>[] = [
    {
      title: '类型',
      dataIndex: 'type',
      valueEnum: {
        0: {
          text: '全部',
          status: 'Default',
        },
        1: {
          text: '会员充值',
        },
        2: {
          text: '课程售卖',
        },
        3: {
          text: '刷新',
        },
      },
    },
    {
      title: '详情',
      dataIndex: 'detail',
      hideInSearch:true,
      ellipsis:true
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
      <ProTable<CompanyTradeType>
        headerTitle="企业订单列表"
        actionRef={actionRef}
        rowKey="tradeNo"
        options={false}
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => []}
        request={async (
          params,
        ) => {
          const msg = await companyTradeList({
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

export default CompanyTradeList;
