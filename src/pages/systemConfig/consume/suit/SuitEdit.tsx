import type { FC } from 'react';
import ProForm, {
  ModalForm,
  ProFormText,
} from '@ant-design/pro-form';
import type { SuitType } from './data.d';
import styles from '@/common/css/style.less';
import { Form, InputNumber } from 'antd';
import type { ProColumns } from '@ant-design/pro-table';
import { EditableProTable } from '@ant-design/pro-table';

type OperationModalProps = {
  visible: boolean;
  current: Partial<SuitType> | undefined;
  onSubmit: (values: SuitType) => void;
  onCancel: () => void;
};

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span:3 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};

const columns: ProColumns<SuitType>[] = [
  {
    title: '职位刷新数',
    dataIndex: 'refreshNum',
  },
  {
    title: '人才沟通数',
    dataIndex: 'communicateNum',
  },
  {
    title: '查看简历数',
    dataIndex: 'resumeNum',
  },
  {
    title: '视频面试数',
    dataIndex: 'videoNum',
  },
  {
    title: '发布职位数',
    dataIndex: 'jobNum',
  },
  {
    title: '成员管理数',
    dataIndex: 'memberNum',
  },
  {
    title: '职位置顶数',
    dataIndex: 'topNum',
  },
];

const defaultData: SuitType[] = [
  {
    id:'1',
    refreshNum: '',
    communicateNum: '',
    resumeNum: '',
    videoNum: '',
    jobNum: '',
    memberNum: '',
    topNum: '',
  },
];

const HelpEditModal: FC<OperationModalProps> = (props) => {
  const { visible, current, onSubmit, children,onCancel } = props;

  if (!visible) {
    return null;
  }
  return (
    <ModalForm<SuitType>
      visible={visible}
      {...formItemLayout}
      className={styles.standModalForm}
      title={`${current ? '编辑' : '添加'}套餐`}
      layout={'horizontal'}
      width={800}
      onFinish={async (values) => {
        onSubmit(values);
      }}
      initialValues={current}
      trigger={<>{children}</>}
      modalProps={{
        onCancel: () => onCancel(),
        destroyOnClose: true,
      }}
    >
      {
        <>
          <ProFormText
            name="title"
            label="套餐名称"
            rules={[{ required: true, message: '请输入套餐名称' }]}
            placeholder="请输入套餐名称"
          />
          <Form.Item label="套餐排序" name="sort">
            <InputNumber precision={0} style={{width:'100%'}}/>
          </Form.Item>
          <Form.Item label="套餐年费" style={{marginBottom:0}}>
              <Form.Item
                name='jobTopNum'
                style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                rules={[{ required: true, message: '请输入原价' }]}
              >
                <InputNumber precision={0} placeholder={'请输入原价'} style={{width:'100%'}}/>
              </Form.Item>
              <Form.Item
                name='jobTopUnit'
                style={{ display: 'inline-block', width: 'calc(50% - 0px)', margin: '0 0 0 8px' }}
                rules={[{ required: true, message: '请输入优惠价' }]}
              >
                <InputNumber precision={0} placeholder={'请输入优惠价'} style={{width:'100%'}}/>
              </Form.Item>
          </Form.Item>
          <ProForm.Item
            label="配额"
            name="dataSource"
            trigger="onValuesChange"
            initialValue={defaultData}
          >
            <EditableProTable<SuitType>
              rowKey="id"
              toolBarRender={false}
              columns={columns}
              recordCreatorProps={false}
              editable={{
                type: 'single',
                editableKeys:['1','2','3','4','5'],
                actionRender: (row, _, dom) => {
                  return [dom.delete];
                },
              }}
            />
          </ProForm.Item>
        </>
      }
    </ModalForm>
  );
};

export default HelpEditModal;
