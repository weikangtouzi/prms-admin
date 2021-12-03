import type { FC } from 'react';
import {
  ModalForm, ProFormDateRangePicker,
  ProFormRadio,
  ProFormText,
} from '@ant-design/pro-form';
import type { JobFairType } from './data.d';
import styles from '@/common/css/style.less';
import { Form } from 'antd';
import FormCascade from '@/components/common/formCascade';
import FormUpload from '@/components/common/formUpload';
import FormRichEdit from '@/components/common/formRichEdit';

type OperationModalProps = {
  visible: boolean;
  current: Partial<JobFairType> | undefined;
  onSubmit: (values: JobFairType) => void;
  onCancel: () => void;
};

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const FairEditModal: FC<OperationModalProps> = (props) => {
  const { visible, current, onSubmit, children,onCancel } = props;
  if (!visible) {
    return null;
  }
  return (
    <ModalForm<JobFairType>
      visible={visible}
      {...formItemLayout}
      className={styles.standModalForm}
      title={`${current ? '编辑' : '添加'}招聘会`}
      layout={'horizontal'}
      width={750}
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
            label="招聘会名称"
            rules={[{ required: true, message: '请输入招聘会名称' }]}
            placeholder="请输入"
            disabled={!!current}
          />
          <ProFormDateRangePicker
            name="holdTime"
            label="举办时间"
            rules={[{ required: true, message: '请选择举办时间' }]}
            placeholder="请输入"
          />
          <ProFormDateRangePicker
            name="deadLineSignUp"
            label="报名截止时间"
            rules={[{ required: true, message: '请选择报名截止时间' }]}
            placeholder="请输入"
          />
          <Form.Item label="公司地址" style={{ marginBottom: '0' }}>
            <Form.Item name="region" rules={[{ required: true }]}>
              <FormCascade/>
            </Form.Item>
            <ProFormText
              name="address"
              label=""
              rules={[{ required: true, message: '输入详细地址' }]}
              placeholder="请输入详细地址"
            />
          </Form.Item>
          <Form.Item label="活动主图" name="banner">
             <FormUpload/>
          </Form.Item>
          <ProFormText
            name="sponsor"
            label="主办方"
            rules={[{ required: true, message: '请输入主办方' }]}
            placeholder="请输入主办方"
          />
          <ProFormText
            name="undertaker"
            label="承办方"
            rules={[{ required: true, message: '请输入承办方' }]}
            placeholder="请输入承办方"
          />
          <ProFormText
            name="assistant"
            label="协办方"
            rules={[{ required: true, message: '请输入协办方' }]}
            placeholder="请输入协办方"
          />
          <Form.Item label="招聘会详情" name="detail">
            <FormRichEdit/>
          </Form.Item>
          <ProFormRadio.Group
            name="promote"
            label="推广"
            options={[
              {
                label: '无',
                value: '',
              },
              {
                label: '置顶',
                value: 'top',
              },
              {
                label: '推荐',
                value: 'suggest',
              },
            ]}
          />
        </>
      }
    </ModalForm>
  );
};

export default FairEditModal;
