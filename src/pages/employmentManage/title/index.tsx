import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { useRef } from 'react';
import {  Popconfirm, message } from 'antd';
import TitleRecord from '@/pages/employmentManage/title/TitleRecord';
import type { titleType } from './data';
import { resumeList } from './service';
import FormCascade from '@/components/common/formCascade';
import {useLocation,history} from 'umi'

const ResumeList = () => {
  const  {pathname} = useLocation()
  console.log(pathname);
  const actionRef = useRef<ActionType>();



  const columns: ProColumns<titleType>[] = [
    {
      title: '职位 id',
      dataIndex: 'id',
      search: {
    		transform: (value, key) => {
    			let valueList = { [key]: parseInt(value) }
    			return valueList
    		}
    	},
    },
    {
      title: '职位发布人 id',
      dataIndex: 'worker_id',
      hideInSearch: true,
    },
    {
    	title: '企业 id',
    	dataIndex: 'comp_id',
    	hideInSearch: true,
    },
    {
    	title: '职位名称',
    	dataIndex: 'title'
    },
    {
    	title: '职位分类',
    	dataIndex: 'category',
    	hideInSearch: true,
    	render: (item) => item.join('-')
    },
    {
    	title: '职位薪水',
    	dataIndex: ['min_salary', 'max_salary'],
    	hideInSearch: true,
    	render: (_, item) => {
    		return [item?.min_salary, item?.max_salary]?.join('-')
    	}
    },
    {
    	title: '要求工作经验年限',
    	dataIndex: 'min_experience',
    	hideInSearch: true,
    },
    {
    	title: '要求学历',
    	dataIndex: 'min_education',
    	hideInSearch: true,
    	valueEnum: {
    		Doctor: '博士',
    		Postgraduate: '研究生',
    		RegularCollege: '本科',
    		JuniorCollege: '大专',
    		High: '高中',
    		Junior: '初中',
    		Primary: '小学',
    		LessThanPrime: '小学以下'
    	}
    },
    {
    	title: '职位详情',
    	dataIndex: 'detail',
    	hideInSearch: true,
    },
    {
    	title: '职位坐标',
    	dataIndex: 'address_coordinate',
    	hideInSearch: true,
    	render: (item) => item?.coordinates?.join('-')
    },
    {
    	title: '职位地址',
    	dataIndex: 'address_description',
    	hideInSearch: true,
    	render: (item) => item?.slice(3, item.length)?.join('-')
    },
    {
    	title: '招聘人数',
    	dataIndex: 'required_num',
    	hideInSearch: true,
    },
    {
    	title: '置顶',
    	dataIndex: 'ontop',
    	valueType: 'switch',
    	hideInSearch: true,
    },
    {
    	title: '职位类型',
    	dataIndex: 'full_time_job',
    	hideInSearch: true,
    	valueEnum: {
    		Full: '全职',
    		Part: '兼职',
    		InternShip: '实习'
    	}
    },
    {
    	title: '标签',
    	dataIndex: 'tags',
    	hideInSearch: true,
    	render: (item) => item?.join('-')
    },
    {
    	title: '过期时间',
    	hideInSearch: true,
    	dataIndex: 'expired_at',
    },
    {
    	title: '状态',
    	dataIndex: 'isAvaliable',
    	valueEnum: {
    		true: {
    			text: '已开启',
    			status: 'Processing',
    		},
    		false: {
    			text: '已禁用',
    			status: 'Error',
    		}
    	},
    	search: {
    		transform: (value, key) => {
    			let valueList = { [key]: value == 'true' }
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
            // <a type={'link'} onClick={() => window.open('http://www.baidu.com') } key='info'>查看</a>,
            <Popconfirm
              key='action'
              onConfirm={() => {
              	const api = HTAPI[record.isAvaliable ? 'AdminDisableJob' : 'AdminEnableJob']
	            	api({
	            		job_id: record.id
	            	}).then(() => {
	            		message.success('操作成功')
	            		actionRef.current.reload()
	            	})
              }}
              onCancel={() => {}}
              title={`确认要${record.isAvaliable ? '禁用' : '开启'}这个职位吗`}
            >
              <a type={'link'} style={ record.isAvaliable ? {color: 'red'} : null}>
                {record.isAvaliable ? '禁用' : '开启'}
              </a>
            </Popconfirm>
            // <a key={'record'} onClick={()=>history.push('/employmentManage/title/titleRecord')}>记录</a>
          ]
        );
      }
    }
  ];


  return (
    <>
      <ProTable<titleType>
        headerTitle="职位列表"
        actionRef={actionRef}
        rowKey="titleId"
        style={{display:pathname==='/employmentManage/title/titleRecord'?'none':'block'}}
        options={false}
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => []}
        request={async (
          params,
        ) => {
          // 这里需要返回一个 Promise,在返回之前你可以进行数据转化
          // 如果需要转化参数可以在这里进行修改
          params.page = params.current - 1
          params.current = undefined
          const msg = await resumeList(params);
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
      {
        pathname === '/employmentManage/title/titleRecord' &&
        <TitleRecord/>
      }
    </>
  );
};

export default ResumeList;
