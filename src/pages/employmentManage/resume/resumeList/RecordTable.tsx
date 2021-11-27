import type { resumeRecordType } from '@/pages/employmentManage/resume/resumeList/data';
import { resumeRecord } from '@/pages/employmentManage/resume/resumeList/service';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import styles from './style.less'

interface RecordTableType{
  type: number
}
const RecordTable = (props: RecordTableType) => {
  const {type} = props;
  const columns: ProColumns<resumeRecordType>[] = [
    {
      title: '查看用户',
      dataIndex: 'queryUserName',
      hideInTable:type!==1
    },
    {
      title: '邀请用户',
      dataIndex: 'queryUserName',
      hideInTable:type!==2
    },
    {
      title: '操作用户',
      dataIndex: 'queryUserName',
      hideInTable:type!==3
    },
    {
      title: '操作用户',
      dataIndex: 'queryUserName',
      hideInTable:type!==5
    },
    {
      title: '投递职位',
      dataIndex: 'postTitle',
      hideInTable:type!==4
    },
    {
      title: '所属公司',
      dataIndex: 'companyName',
    },
    {
      title: '邀请时间',
      dataIndex: 'inviteTime',
      hideInTable:type!==2
    },
    {
      title: '面试时间',
      dataIndex: 'interviewTime',
      hideInTable:type!==2
    },
    {
      title: '标记时间',
      dataIndex: 'markTime',
      hideInTable:type!==3
    },
    {
      title: '投递时间',
      dataIndex: 'markTime',
      hideInTable:type!==4
    },
    {
      title: '投递操作',
      dataIndex: 'postType',
      hideInTable:type!==4
    },
    {
      title: '收藏时间',
      dataIndex: 'starTime',
      hideInTable:type!==5
    },
    {
      title: '查看时间',
      dataIndex: 'queryTime',
      hideInTable:type!==1
    }
  ];

  return  <ProTable<resumeRecordType>
    headerTitle=""
    rowKey="recordId"
    options={false}
    search={false}
    className={styles.recordTable}
    toolBarRender={() => []}
    request={async (
      params,
    ) => {
      const msg = await resumeRecord({
        current: params.current,
        pageSize: params.pageSize,
        ...params,
        type
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
  />;
}
export default RecordTable;
