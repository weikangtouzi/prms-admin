import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import styles from '../resume/resumeList/style.less'
import { titleRecord } from '@/pages/employmentManage/title/service';
import { titleRecordType } from '@/pages/employmentManage/title/data';

interface RecordTableType{
  type: number
}
const RecordTable = (props: RecordTableType) => {
  const {type} = props;
  const columns: ProColumns<titleRecordType>[] = [
    {
      title: '查看用户',
      dataIndex: 'userName',
      hideInTable:type!==1
    },
    {
      title: '收藏用户',
      dataIndex: 'userName',
      hideInTable:type!==2
    },
    {
      title: '投递用户',
      dataIndex: 'userName',
      hideInTable:type!==3
    },
    {
      title: '最近 一份工作',
      dataIndex: 'lastJob',
    },
    {
      title: '查看时间',
      dataIndex: 'queryTime',
      hideInTable:type!==1
    },
    {
      title: '操作时间',
      dataIndex: 'actionTime',
      hideInTable:type!==2
    },
    {
      title: '投递时间',
      dataIndex: 'postTime',
      hideInTable:type!==3
    },
    {
      title: '投递简历',
      dataIndex: 'resumeName',
      hideInTable:type!==3
    },
  ];

  return  <ProTable<titleRecordType>
    headerTitle=""
    rowKey="recordId"
    options={false}
    search={false}
    className={styles.recordTable}
    toolBarRender={() => []}
    request={async (
      params,
    ) => {
      const msg = await titleRecord({
        current: params.current,
        pageSize: params.pageSize,
        ...params,
        type
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
  />;
}
export default RecordTable;
