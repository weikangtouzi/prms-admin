import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { userList } from '@/pages/userManage/userList/jobHunter/service';
import { useRef } from 'react';
import { Button, Popconfirm, message } from 'antd';
import FormCascade from '@/components/common/formCascade';
import type { UserType } from '@/pages/userManage/userList/jobHunter/data';
import type { UserFilter } from '@/pages/userManage/userList/jobHunter/data';

const PersonalUser = () => {
  const actionRef = useRef<ActionType>();

  const columns: ProColumns<UserType>[] = [
    {
      title: '用户id',
      dataIndex: 'id',
      search: {
    		transform: (value, key) => {
    			let valueList = { [key]: parseInt(value) }
    			return valueList
    		}
    	},
    },
    // {
    //   title: '搜索关键词',
    //   dataIndex: 'keyword',
    //   hideInTable: true,
    // },
    // {
    // 	title: '注册时间',
    // 	dataIndex: 'registerTime',
    // 	hideInTable: true,
    // 	valueType: 'date',
    // 	search: {
    // 		transform: (value, key) => {
    // 			let valueList = { [key]: [value] }
    // 			return valueList
    // 		}
    // 	},
    // },

    {
      title: '用户名',
      dataIndex: 'username',
      hideInSearch: true,
    },
    {
      title: '头像',
      dataIndex: 'image_url',
      hideInSearch: true,
      valueType: 'image'
    },
    {
      title: '手机号码',
      dataIndex: 'phone_number',
      search: {
    		transform: (value, key) => {
    			let valueList = { 'phoneNumber': value }
    			return valueList
    		}
    	},
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      hideInSearch: true,
    },
    {
    	title: '性别',
    	dataIndex: 'gender',
    	hideInSearch: true,
    	valueEnum: {
    		true: '男',
    		false: '女'
    	}
    },
    {
      title: '生日',
      dataIndex: 'birth_date',
      hideInSearch: true,
    },
    {
      title: '所在城市',
      dataIndex: 'current_city',
      search: {
    		transform: (value, key) => {
    			let valueList = { 'currentCity': value }
    			return valueList
    		}
    	},
      // render: (_, r) => r.city,
      // renderFormItem: () => {
      //   return <FormCascade />;
      // },
    },
    {
      title: '参加工作时间',
      dataIndex: 'first_time_working',
      hideInSearch: true
    },
    {
    	title: '学历',
    	dataIndex: 'education',
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
    	title: '账号状态',
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
          <Popconfirm
            onConfirm={() => {
            	const api = HTAPI[record.disabled ? 'AdminEnableUserAccount' : 'AdminDisableUserAccount']
            	api({
            		user_id: record.id
            	}).then(() => {
            		message.success('操作成功')
            		actionRef.current.reload()
            	})
            }}
            onCancel={() => {}}
            title={`确认要${record.disabled ? '恢复' : '禁用'}这位用户吗`}
          >
            <a type={'link'} style={ !record.disabled ? { color: 'red' } : null }>
            	{ record.disabled ? '恢复' : '禁用' }
            </a>
          </Popconfirm>
        );
      },
    },
  ];
  return (
    <ProTable<UserType, UserFilter>
      headerTitle="求职用户列表"
      actionRef={actionRef}
      rowKey="username"
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
        const { current, pageSize, ...info } = params
        const msg = await userList({
          page: current - 1,
          pageSize,
          info,
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
  );
};

export default PersonalUser;
