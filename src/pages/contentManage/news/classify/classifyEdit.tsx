import type { FC } from 'react';
import {
  ModalForm,
  ProFormText,
} from '@ant-design/pro-form';
import type { classifyType } from './data.d';
import styles from '@/common/css/style.less';

type OperationModalProps = {
  visible: boolean;
  current: Partial<classifyType> | undefined;
  onSubmit: (values: classifyType) => void;
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

const ClassifyEditModal: FC<OperationModalProps> = (props) => {
  const { visible, current, onSubmit, children,onCancel } = props;
  if (!visible) {
    return null;
  }
  return (
    <ModalForm<classifyType>
      visible={visible}
      {...formItemLayout}
      className={styles.standModalForm}
      title={`${current ? '编辑' : '添加'}分类`}
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
            name="name"
            label="分类名称"
            rules={[{ required: true, message: '请输入分类名称' }]}
            placeholder="请输入分类名称"
          />
        </>
      }
    </ModalForm>
  );
};

export default ClassifyEditModal;
