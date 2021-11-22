import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { useRef, useState } from 'react';
import { Popconfirm,Image } from 'antd';
import FormCascade from '@/components/common/formCascade';
import type { UserFilter } from '@/pages/userManage/userList/jobHunter/data';
import type { CompanyType } from '@/pages/userManage/enterpriseList/companyList/data';
import { companyList } from '@/pages/userManage/enterpriseList/companyList/service';
import CompanyOperationModal from '@/pages/userManage/enterpriseList/companyList/CompanyOperationModal';
import ServiceOperationModal from '@/pages/userManage/enterpriseList/companyList/ServiceOperationModal';

const PersonalUser = () => {
  const actionRef = useRef<ActionType>();
  const [done,setDone] = useState<boolean>(false);
  const [actionType,setActionType] = useState<string>('info');
  const [visible, setVisible] = useState<boolean>(false);
  const [serviceVisible, setServiceVisible] = useState<boolean>(false);
  const [current, setCurrent] = useState<Partial<CompanyType> | undefined>(undefined);

  // 展示弹框
  const showEditModal = (type: 'info'|'edit',item: CompanyType) => {
    setActionType(type)
    setVisible(true);
    setCurrent(item);
  };

  // 添加 & 查看客服
  const showServiceModal = (type: 'info'|'edit'|'add',item: CompanyType) => {
    setActionType(type)
    setServiceVisible(true);
    setCurrent(item);
  };
  // 关闭弹窗
  const handleDone = () => {
    setDone(false);
    setVisible(false);
    setServiceVisible(false);
    setCurrent({});
  };

  const columns: ProColumns<CompanyType>[] = [
    {
      title: '企业ID',
      dataIndex: 'companyId',
    },
    {
      title: 'Logo',
      dataIndex: 'logo',
      hideInSearch:true,
      render:(_,r)=>{
        return  <Image
          width={50}
          src={r.logo}
        />
      }
    },
    {
      title: '企业全称',
      dataIndex: 'companyName',
    },
    {
      title: '管理员账号',
      dataIndex: 'adminAccount',
    },
    {
      title: '会员等级',
      dataIndex: 'vipLevel',
      hideInForm: true,
      valueEnum: {
        0: {
          text: '无',
        },
        1: {
          text: '钻石会员',
        },
        2: {
          text: '皇冠会员',
        },
      },
    },
    {
      title: '职位数',
      dataIndex: 'jobNum',
    },
    {
      title: '所在城市',
      dataIndex: 'city',
      hideInSearch:true
    },
    {
      title: '期望城市',
      dataIndex: 'wantCity',
      hideInTable:true,
      render: (_, r) => r.city,
      renderFormItem: () => {
        return <FormCascade />;
      },
    },
    {
      title: '最近登录',
      dataIndex: 'lastLoginTime',
      valueType: 'dateRange',
      render: (_, r) => r.lastLoginTime,
    },
    {
      title: '用户状态',
      dataIndex: 'status',
      hideInForm: true,
      valueEnum: {
        0: {
          text: '全部',
          status: 'Default',
        },
        1: {
          text: '已认证',
          status: 'Processing',
        },
        2: {
          text: '已禁用',
          status: 'Error',
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
            <a type={'link'} onClick={() => showEditModal('info', record)} key='info'>查看</a>,

            <Popconfirm
              key='action'
            onConfirm={() => {}}
            onCancel={() => {}}
            title={`确认要${record.status === 2 ? '恢复' : '禁用'}这位企业管理员吗`}
          >
            {record.status === 2 ? (
              <a type={'link'} key='recover'>恢复</a>
            ) : (
              <a type={'link'} style={{color:'red'}} key={'ban'}>
                禁用
              </a>
            )}
          </Popconfirm>,
            record.serviceAccount?
              <a type={'link'} onClick={() => showServiceModal('info', record)} key={'query'}>查看客服</a>
              : <a type={'link'} onClick={() => showServiceModal('add', record)} key={'add'}>添加客服</a>
          ]
        );
      },
    },
  ];


  return (
    <>
    <ProTable<CompanyType, UserFilter>
      headerTitle="企业用户列表"
      actionRef={actionRef}
      rowKey="companyId"
      options={false}
      search={{
        labelWidth: 120,
      }}
      toolBarRender={() => []}
      request={async (
        // 第一个参数 params 查询表单和 params 参数的结合
        // 第一个参数中一定会有 pageSize 和  current ，这两个参数是 antd 的规范
        params,
      ) => {
        // 这里需要返回一个 Promise,在返回之前你可以进行数据转化
        // 如果需要转化参数可以在这里进行修改
        const msg = await companyList({
          current: params.current,
          pageSize: params.pageSize,
          city: params?.city?.length > 1 ? params.city[params.city.length - 1] : undefined,
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
      <CompanyOperationModal
        done={done}
        visible={visible}
        current={current}
        onDone={handleDone}
        onSubmit={()=>{}}
        actionType={actionType}
      />
      <ServiceOperationModal
        done={done}
        visible={serviceVisible}
        current={current}
        onDone={handleDone}
        onSubmit={()=>{}}
        actionType={actionType}
      />
    </>
  );
}

export default PersonalUser;
