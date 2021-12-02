import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { useRef } from 'react';
import {  Popconfirm } from 'antd';
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
      title: '职位ID',
      dataIndex: 'titleId',
    },
    {
      title: '职位名称',
      dataIndex: 'titleName',
    },
    {
      title: '类型',
      dataIndex: 'titleType',
      valueEnum: {
        0: {
          text: '全部',
          status: 'Default',
        },
        1: {
          text: '产品',
        },
        2: {
          text: '技术',
        },
      },
    },

    {
      title: '地区',
      dataIndex: 'region',
      render: (_, r) => r.region,
      renderFormItem: () => {
        return <FormCascade />;
      },
    },
    {
      title: '学历要求',
      dataIndex: 'grade',
      valueEnum: {
        0: {
          text: '全部',
          status: 'Default',
        },
        1: {
          text: '高中',
        },
        2: {
          text: '本科',
        },
        3: {
          text: '硕士',
        },
      },
    },
    {
      title: '经验要求',
      dataIndex: 'experience',
      valueEnum: {
        0: {
          text: '全部',
          status: 'Default',
        },
        1: {
          text: '1-3年',
        },
        2: {
          text: '3-5年',
        },
        3: {
          text: '5年以上',
        },
      },
    },
    {
      title: '状态',
      dataIndex: 'status',
      hideInForm: true,
      hideInSearch:true,
      valueEnum: {
        0: {
          text: '全部',
          status: 'Default',
        },
        1: {
          text: '招聘中',
          status: 'Processing',
        },
        2: {
          text: '已下线',
          status: 'Error',
        },
      },

    },
    {
      title: '上线时间',
      dataIndex: 'upTime',
      valueType: 'dateRange',
      render: (_, r) => r.upTime,
    },
    {
      title: '增值服务',
      dataIndex: 'vas',
      valueEnum: {
        0: {
          text: '全部',
          status: 'Default',
        },
        1: {
          text: '刷新',
        },
        2: {
          text: '置顶',
        },
      },
      render: (_, r) => r.vas.join('，'),
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => {
        return (
          [
            <a type={'link'} onClick={() => window.open('http://www.baidu.com') } key='info'>查看</a>,

           record.status===1 && <Popconfirm
              key='action'
              onConfirm={() => {}}
              onCancel={() => {}}
              title={`确认要下线这个职位吗`}
            >
              <a type={'link'} style={{color:'red'}} key={'ban'}>
                下线
              </a>
            </Popconfirm>,
            <Popconfirm
              key='del'
              onConfirm={() => {}}
              onCancel={() => {}}
              title={`确认要删除这个职位吗`}
            >
              <a type={'link'} style={{color:'#ff4d4f'}}>删除</a>
            </Popconfirm>,
            <a key={'record'} onClick={()=>history.push('/employmentManage/title/titleRecord')}>记录</a>
          ]
        );
      }
    }
  ];


  return (
    <>
      <ProTable<titleType>
        headerTitle="简历列表"
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
          const msg = await resumeList({
            current: params.current,
            pageSize: params.pageSize,
            ...params
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
      {
        pathname === '/employmentManage/title/titleRecord' &&
        <TitleRecord/>
      }
    </>
  );
};

export default ResumeList;
