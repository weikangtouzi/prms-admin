import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { useRef, useState } from 'react';
import { Popconfirm,Image, message } from 'antd';
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
      dataIndex: 'id',
      search: {
    		transform: (value, key) => {
    			let valueList = { [key]: parseInt(value) }
    			return valueList
    		}
    	},
    },
    {
      title: '企业全称',
      dataIndex: 'enterprise_name',
    },
    {
    	title: '企业名称缩写',
    	dataIndex: 'abbreviation',
    	hideInSearch: true,
    },
    {
      title: '头像',
      dataIndex: 'enterprise_logo',
      hideInSearch: true,
      valueType: 'image',
    },
    {
      title: '管理员账号 id',
      dataIndex: 'user_id',
      hideInSearch: true,
    },
    {
    	title: '企业性质',
    	dataIndex: 'business_nature',
    	hideInSearch: true,
    	valueEnum: {
    		ForeignVentures: '外企',
    		ForeignFundedEnterprises: '外资企业',
    		PrivateEnterprise: '个人企业',
    		StateOwnedEnterprises: '国有企业',
    		Extra: '子公司',
    	}
    },
    {
    	title: '企业行业',
    	dataIndex: 'industry_involved',
    	hideInSearch: true,
    	render: (item) => item?.join('-')
    },
    {
    	title: '企业描述',
    	dataIndex: 'enterprise_profile',
    	hideInSearch: true,
    },
    {
    	title: '企业融资',
    	dataIndex: 'enterprise_financing',
    	hideInSearch: true,
    	valueEnum: {
    		NotYet: '不需要融资',
    		AngelFinancing: '天使轮',
    		A: 'A轮',
    		B: 'B轮',
    		C: 'C轮',
    		D: 'D轮',
    		Listed: '已上市',
    		NoNeed: '不需要融资',
    	}
    },
    {
    	title: '企业人数',
    	dataIndex: 'enterprise_size',
    	hideInSearch: true,
    	valueEnum: {
    		LessThanFifteen: '1-14人',
    		FifteenToFifty: '15-49人',
    		FiftyToOneHundredFifty: '50-99人',
    		OneHundredFiftyToFiveHundreds: '100-499人',
    		FiveHundredsToTwoThousands: '500-2000人',
    		MoreThanTwoThousands: '2000人以上'
    	}
    },
    {
    	title: '企业福利',
    	dataIndex: 'enterprise_welfare',
    	hideInSearch: true,
    	render: (item) => item != '-' ? item?.join('-') : '-'
    },
    {
    	title: '企业标签',
    	dataIndex: 'tags',
    	hideInSearch: true,
    	render: (item) => item != '-' ? item?.join('-') : '-'
    },
    {
    	title: '企业地址坐标',
    	dataIndex: 'enterprise_coordinates',
    	hideInSearch: true,
    	render: (item) => item?.coordinates ? item?.coordinates?.join('-') : '-'
    },
    {
    	title: '企业地址详情',
    	dataIndex: 'enterprise_loc_detail',
    	hideInSearch: true,
    	render: (item) => item != '-' ? item?.join('-') : '-'
    },
    {
    	title: '企业性质',
    	dataIndex: 'extra_attribute',
    	hideInSearch: true,
    },
    {
    	title: '失败详情',
    	dataIndex: 'failed_description',
    	hideInSearch: true,
    },
    {
    	title: '上班时间',
    	dataIndex: 'rest_rule',
    	hideInSearch: true,
    },
    {
    	title: '加班情况',
    	dataIndex: 'overtime_work_degree',
    	hideInSearch: true,
    },
   	{
   		title: '主页',
   		dataIndex: 'homepage',
   		hideInSearch: true,
   	},
   	{
   		title: '创立时间',
   		dataIndex: 'established_time',
   		hideInSearch: true,
   	},
   	{
   		title: '电话',
   		dataIndex: 'tel',
   	},
   	{
   		title: '工作时间',
   		dataIndex: 'work_time',
   		hideInSearch: true,
   	},
   	{
   		title: '状态',
   		dataIndex: 'disabled',
   		hideInSearch: true,
   		valueEnum: {
    		false: {
    			text: '已开启',
    			status: 'Processing',
    		},
    		true: {
    			text: '已禁用',
    			status: 'Error',
    		}
    	},
    	search: {
    		transform: (value, key) => {
    			let valueList = { 'isAvaliable': value != 'true' }
    			return valueList
    		}
    	},
   	},
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => {
        return (
          [
            // <a type={'link'} onClick={() => showEditModal('info', record)} key='info'>查看</a>,

            <Popconfirm
              key='action'
            onConfirm={() => {
            	const api = HTAPI[record.disabled ? 'AdminEnableEnterpriseMainAccount' : 'AdminDisableEnterpriseMainAccount']
            	api({
            		ent_id: record.id
            	}).then(() => {
            		message.success('操作成功')
            		actionRef.current.reload()
            	})
            }}
            onCancel={() => {}}
            title={`确认要${record.disabled ? '恢复' : '禁用'}这个企业吗`}
          >
          	<a type={'link'} style={ record.disabled ? { color: 'red' } : null}>
          		{ record.disabled ? '恢复' : '禁用' }
          	</a>
          </Popconfirm>,
            // record.serviceAccount?
            //   <a type={'link'} onClick={() => showServiceModal('info', record)} key={'query'}>查看客服</a>
            //   : <a type={'link'} onClick={() => showServiceModal('add', record)} key={'add'}>添加客服</a>
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
      scroll={{
      	x: true
      }}
      toolBarRender={() => []}
      request={async (
        // 第一个参数 params 查询表单和 params 参数的结合
        // 第一个参数中一定会有 pageSize 和  current ，这两个参数是 antd 的规范
        params,
      ) => {
        // 这里需要返回一个 Promise,在返回之前你可以进行数据转化
        // 如果需要转化参数可以在这里进行修改
        const {current, pageSize, ...info} = params
        const msg = await companyList({
          page: current - 1,
          pageSize: pageSize,
          info
        });
        return {
          data: msg.rows,
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
