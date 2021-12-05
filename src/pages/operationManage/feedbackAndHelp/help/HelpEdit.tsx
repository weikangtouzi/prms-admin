import type { FC } from 'react';
import {
  ModalForm,
  ProFormText,
} from '@ant-design/pro-form';
import type { HelpType } from './data.d';
import styles from '@/common/css/style.less';
import { Form, InputNumber } from 'antd';
import FormRichEdit from '@/components/common/formRichEdit';

type OperationModalProps = {
  visible: boolean;
  current: Partial<HelpType> | undefined;
  onSubmit: (values: HelpType) => void;
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
    <ModalForm<HelpType>
      visible={visible}
      {...formItemLayout}
      className={styles.standModalForm}
      title={`${current ? '编辑' : '添加'}帮助内容`}
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
            label="内容标题"
            rules={[{ required: true, message: '请输入帮助内容标题' }]}
            placeholder="请输入帮助内容标题"
          />
          <Form.Item label="内容详情" name="detail">
            <FormRichEdit/>
          </Form.Item>
          <Form.Item label='排序' name='sort'>
            <InputNumber precision={0} style={{ width: '100%' }} />
          </Form.Item>
        </>
      }
    </ModalForm>
  );
};

export default HelpEditModal;
