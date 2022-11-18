import { Image, Table, Popconfirm, message } from 'antd';
import {useRequest} from 'umi';
import {companyAuditList} from '@/pages/userManage/enterpriseList/companyAudit/service';
import type { ColumnsType } from 'antd/lib/table/interface';
import type { CompanyType } from '@/pages/userManage/enterpriseList/companyList/data';
import CompanyAuditModal from '@/pages/userManage/enterpriseList/companyAudit/CompanyAuditModal';
import { useState, useRef } from 'react';

const statusArr = [
  {value:1,label:'待审核',color:'#faad14'},
  {value:2,label:'审核通过',color:'#52c41a'},
  {value:3,label:'审核失败',color:'#ff4d4f'},
]
interface AuditProps{
  type: 'all'|'fail'|'unCheck'|'success'
}
const AuditComponent = (props: AuditProps)=>{
  const {type='all'} = props;
  const [done,setDone] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [actionType,setActionType] = useState<string>('info');
  const [current, setCurrent] = useState<Partial<CompanyType> | undefined>(undefined);

  const { data, loading, run } = useRequest(companyAuditList,{ defaultParams:[{type}] })

  // 关闭弹窗
  const handleDone = () => {
    setDone(false);
    setVisible(false);
    setCurrent({});
  };

  // 查看或者审核
  const showAuditModal = (t: 'info'|'audit',record: CompanyType) => {
    setActionType(t)
    setVisible(true);
    setCurrent(record);
  };
  const columns: ColumnsType<CompanyType> = [
    {
      title: '_id',
      dataIndex: '_id',
    },
    {
      title: '企业名称',
      dataIndex: 'enterpriseName',
    },
    {
      title: '营业执照',
      dataIndex: 'charter',
      render: (item) => <Image src={item} style={{ width: 60, height: 60 }} />
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => {
        return (
          [
          	<a type={'link'} onClick={() => {
          		showAuditModal('audit', record)
          	}}>
	          	操作
	          </a>
          ]
        );
      },
    },
  ];
  return <div>
    <Table loading={loading} dataSource={data} columns={columns} rowKey='companyId'/>
    <CompanyAuditModal
      done={done}
      visible={visible}
      current={current}
      onDone={handleDone}
      onSubmit={(values) => {
      	const failReason = values?.failReason
      	const isPassed = (failReason?.length ?? 0) <= 0
      	HTAPI.AdminSetCensoredForAnItem({
      		_id: current._id,
      		isPassed: isPassed,
      		description: isPassed ? undefined : failReason
      	}).then(response => {
      		handleDone()
      		message.success('操作成功')
      		run()
      	})
      }}
      actionType={actionType}
     />
  </div>
}

export default AuditComponent;
