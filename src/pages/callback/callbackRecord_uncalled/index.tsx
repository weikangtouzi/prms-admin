import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { useRef, useState } from 'react';
import { Popconfirm, message } from 'antd';
import CallbackRecordOperationModal from '@/pages/callback/callbackRecord_uncalled/CallbackRecord_uncalledOperationModal';
import { CallbackRecordFilter, CallbackRecordType } from './data';
import { AdminGetCallBackRecord_uncalledList } from './service';

const CallbackRecord = () => {
  const actionRef = useRef<ActionType>();
  const [done,setDone] = useState<boolean>(false);
  const [actionType,setActionType] = useState<string>('info');
  const [visible, setVisible] = useState<boolean>(false);
  const [createVisible, setCreateVisible] = useState<boolean>(false);
  const [serviceVisible, setServiceVisible] = useState<boolean>(false);
  const [current, setCurrent] = useState<Partial<CallbackRecordType> | undefined>(undefined);
  // 展示弹框
  const showEditModal = (type: 'info'|'edit',item: CallbackRecordType) => {
    setActionType(type)
    setVisible(true);
    setCurrent(item);
  };

  // // 添加 & 查看客服
  // const showServiceModal = (type: 'info'|'edit'|'add',item: CallbackRecordType) => {
  //   setActionType(type)
  //   setServiceVisible(true);
  //   setCurrent(item);
  // };
  // 关闭弹窗
  const handleDone = () => {
    setDone(false);
    setVisible(false);
    setServiceVisible(false);
    setCurrent({});
  };
  const handleCreateDone = () => {
    setCreateVisible(false);
  };

  const columns: ProColumns<CallbackRecordType>[] = [
    {
      title: 'id',
      dataIndex: '_id',
      hideInSearch: true,
    },
    {
      title: '电话号码',
      dataIndex: 'phone_number',
      search: {
    		transform: (value, key) => {
    			let valueList = { [key]: parseInt(value) }
    			return valueList
    		}
    	},
    },
    {
      title: '真实姓名',
      dataIndex: 'real_name',
      hideInSearch: true,
    },
    {
      title: '性别',
      dataIndex:'gender',
      hideInSearch: true,
      render: (item) => {
        if(item === '-') return '-';
        return item ? '男' : '女'
      }
    },
    {
      title: '学历',
      dataIndex: 'education',
      hideInSearch: true,
      render: (item) => {
        switch (item) {
          case 'Doctor':
            return '博士';
          case 'High':
            return '高中';
          case 'Junior':
            return '初中';
          case 'Primary':
            return '小学';
          case 'JuniorCollege':
            return '本科'
          case 'Postgraduate':
            return '硕士';
          case 'LessThanPrime':
            return '文盲';
          default:
            return '-'
        }
      }
    },
    {
      title: '当前所在城市',
      dataIndex: 'current_city',
    	hideInSearch: true,
      render: (item) => {
        if(item === '-') return '鹰潭市余江区';
        return item
      }
    },
    {
    	title: '年龄',
    	dataIndex: 'birth_date',
    	hideInSearch: true,
    	render: (item) => {
            if(item === '-') return '-';
            const now = new Date();
            const birth = new Date(item);
            let age = now.getFullYear() - birth.getFullYear();
            const month = now.getMonth() - birth.getMonth();
            if (month < 0 || (month === 0 && now.getDate() < birth.getDate())) {
                age--;
            }
            return age;
        }
    },
    {
    	title: '是否就业',
    	dataIndex: 'at_work',
    	hideInSearch: true,
    	render: (item) => {
        if(item === '-') return '-';
        return item? '是' : '否'
      }
    },
    {
    	title: '是否本地就业',
    	dataIndex: 'is_local',
    	hideInSearch: true,
      render: (item) => {
        if(item === '-') return '-';
        return item? '是' : '否'
      }
    },
    {
      title: '是否愿意外出就业',
      dataIndex: 'is_out_work',
    	hideInSearch: true,
      render: (item) => {
        if(item === '-') return '-';
        return item? '是' : '否'
      }
    },
    {
      title: '操作',
      valueType: 'option',
      render: (text, record, _, action) => [
        <a
          key="edit"
          onClick={() => {
            showEditModal('edit', record);
          }}
        >
          编辑
        </a>,
        <Popconfirm   
          key="delete"
          title="确定删除该条数据吗？"
          onConfirm={() => {
            // 这里是删除操作
            message.success('删除成功');
          }}
          onCancel={() => {
            message.error('取消删除');
          }}
        >
          <a>删除</a>
        </Popconfirm>,
      ]
    }
    
  ];


  return (
    <>
    <ProTable<CallbackRecordType, CallbackRecordFilter>
      headerTitle="待回访列表"
      actionRef={actionRef}
      rowKey="_id"
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
        console.log(params)
        const msg = await AdminGetCallBackRecord_uncalledList({
          page: current - 1,
          pageSize: pageSize,
          info: {
            phone_number: info.phone_number?.toString(),
            real_name: info.real_name,
          }
        });
        console.log(msg)
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
      <CallbackRecordOperationModal
        done={done}
        visible={visible}
        current={current}
        onDone={handleDone}
        onSubmit={async (values) => {
          try {
            await HTAPI.AdminAddCallbackRecord(values);
            return;
          } catch (error) {
            console.log(JSON.stringify(error))
            const translatedError = translateGQLError(error, {
              'phone_number': '电话号码',
              'real_name': '真实姓名',
              'gender': '性别',
              'result_of_last_call': '上一次回访结果',
              'detail_of_last_call': '上一次回访详情',
            })
            message.error(translatedError)
          }
        }}
        actionType={actionType}
      />
          
      {/* <ServiceOperationModal
        done={done}
        visible={serviceVisible}
        current={current}
        onDone={handleDone}
        onSubmit={()=>{}}
        actionType={actionType}
      /> */}
    </>
  );
}

export default CallbackRecord;
