import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { useRef, useState } from 'react';
import type {InvoiceType} from '@/pages/operationManage/invoice/data';
import { invoiceApplyList } from '@/pages/operationManage/invoice/service';
import InvoiceAuditModal from '@/pages/operationManage/invoice/InvoiceAuditModal';

const InvoiceApplyList = () => {
  const actionRef = useRef<ActionType>();
  const [visible, setVisible] = useState<boolean>(false);
  const [current, setCurrent] = useState<Partial<InvoiceType> | undefined>(undefined);
  // 查看或者审核
  const showAuditModal = (record: InvoiceType) => {
    setVisible(true);
    setCurrent(record);
  };
  // 关闭弹窗
  const onCancel = () => {
    setVisible(false);
    setCurrent({});
  };
  const columns: ProColumns<InvoiceType>[] = [
    {
      title: '申请账户',
      dataIndex: 'account',
    },
    {
      title: '抬头类型',
      dataIndex: 'titleType',
      valueEnum: {
        0: {
          text: '全部',
          status: 'Default',
        },
        1: {
          text: '企业',
        },
        2: {
          text: '个人',
        },
      },
    },
    {
      title: '发票抬头',
      dataIndex: 'title',
      hideInSearch:true
    },
    {
      title: '公司税号',
      dataIndex: 'taxNo',
      hideInSearch:true
    },
    {
      title: '开户银行',
      dataIndex: 'bank',
      hideInSearch:true
    },
    {
      title: '公司开户账号',
      dataIndex: 'bankAccount',
      hideInSearch:true,
      render:(_,r)=>r.titleType===1?r.bankAccount:'-'
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
          status: 'Success',
        },
        2: {
          text: '失败',
          status: 'Error',
        },
        3: {
          text: '审核中',
          status: 'Processing',
        },
      },
    },
    {
      title: '交易时间',
      dataIndex: 'tradeTime',
      valueType: 'dateRange',
      render:(_,r)=>r.tradeTime
    },
    {
      title: '操作',
      dataIndex: 'option',
      render: (_, record) => {
        return record.status===3?
          <a style={{color:'#52c41a'}} onClick={() => showAuditModal( record)}>审核</a>
          :'-';
      },
    },
  ];


  return (
    <>
      <ProTable<InvoiceType>
        headerTitle="发票申请列表"
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
          const msg = await invoiceApplyList({
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
      <InvoiceAuditModal
        visible={visible}
        current={current}
        onSubmit={(values)=>{console.log(values)}}
        onCancel={onCancel}/>
    </>
  );
};

export default InvoiceApplyList;
