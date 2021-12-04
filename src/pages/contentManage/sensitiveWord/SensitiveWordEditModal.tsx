import type { FC } from 'react';
import {
  ModalForm,
  ProFormText,
} from '@ant-design/pro-form';
import type { SensitiveWordType } from './data.d';
import styles from '@/common/css/style.less';

type OperationModalProps = {
  visible: boolean;
  current: Partial<SensitiveWordType> | undefined;
  onSubmit: (values: SensitiveWordType) => void;
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

const SensitiveWordEditModal: FC<OperationModalProps> = (props) => {
  const { visible, current, onSubmit, children,onCancel } = props;
  if (!visible) {
    return null;
  }
  return (
    <ModalForm<SensitiveWordType>
      visible={visible}
      {...formItemLayout}
      className={styles.standModalForm}
      title={`${current ? '编辑' : '添加'}敏感词`}
      layout={'horizontal'}
      width={640}
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
            name="word"
            label="敏感词"
            rules={[{ required: true, message: '请输入敏感词' }]}
            placeholder="请输入敏感词"
          />
        </>
      }
    </ModalForm>
  );
};

export default SensitiveWordEditModal;
