import type { FC } from 'react';
import {
  ModalForm,
  ProFormText,
} from '@ant-design/pro-form';
import type { AgreementType } from './data.d';
import styles from '@/common/css/style.less';
import { Form } from 'antd';
import FormRichEdit from '@/components/common/formRichEdit';

type OperationModalProps = {
  visible: boolean;
  current: Partial<AgreementType> | undefined;
  onSubmit: (values: AgreementType) => void;
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

const HelpEditModal: FC<OperationModalProps> = (props) => {
  const { visible, current, onSubmit, children,onCancel } = props;
  if (!visible) {
    return null;
  }
  return (
    <ModalForm<AgreementType>
      visible={visible}
      {...formItemLayout}
      className={styles.standModalForm}
      title={`${current ? '编辑' : '添加'}协议内容`}
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
            label="内容名称"
            readonly={true}
            rules={[{ required: true, message: '请输入内容名称' }]}
            placeholder="请输入内容名称"
          />
          <Form.Item label="内容详情" name="detail">
            <FormRichEdit/>
          </Form.Item>
        </>
      }
    </ModalForm>
  );
};

export default HelpEditModal;
