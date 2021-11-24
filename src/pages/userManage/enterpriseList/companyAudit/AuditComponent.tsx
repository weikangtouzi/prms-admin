import { Image, Table } from 'antd';
import {useRequest} from 'umi';
import {companyAuditList} from '@/pages/userManage/enterpriseList/companyAudit/service';
import type { ColumnsType } from 'antd/lib/table/interface';
import type { CompanyType } from '@/pages/userManage/enterpriseList/companyList/data';
import CompanyAuditModal from '@/pages/userManage/enterpriseList/companyAudit/CompanyAuditModal';
import { useState } from 'react';

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
  const {data,loading} = useRequest(companyAuditList,{defaultParams:[{type}]})
  const [current, setCurrent] = useState<Partial<CompanyType> | undefined>(undefined);

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
      title: 'Logo',
      dataIndex: 'logo',
      render:(_,r)=>{
        return  <Image
          width={40}
          src={r.logo}
        />
      }
    },
    {
      title: '企业全称',
      dataIndex: 'companyName',
    },
    {
      title: '账号邮箱',
      dataIndex: 'adminAccount',
    },
    {
      title: '所在城市',
      dataIndex: 'city',
    },
    {
      title: '公司类型',
      dataIndex: 'city',
    },
    {
      title: '申请人职位',
      dataIndex: 'city',
    },
    {
      title: '注册时间',
      dataIndex: 'lastLoginTime',
      render: (_, r) => r.lastLoginTime,
    },
    {
      title: '状态',
      dataIndex: 'checkStatus',
      render:(_,r)=>{
        const item = statusArr.find(i=>i.value===r.checkStatus)
        return <a style={{color:item?.color}}>{item?.label}</a>
      }
    },
    {
      title: '操作',
      dataIndex: 'option',
      render: (_, record) => {
        return record.checkStatus===1?
          <a style={{color:'#52c41a'}} onClick={() => showAuditModal('audit', record)}>审核</a>
          :<a onClick={() => showAuditModal('info', record)}>查看</a>;
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
      onSubmit={(values)=>{console.log(values)}}
      actionType={actionType}
     />
  </div>
}

export default AuditComponent;
