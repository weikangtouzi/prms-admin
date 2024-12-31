import type { FC } from 'react';
import {
  ModalForm,
  ProFormText,
} from '@ant-design/pro-form';
import type { CallbackRecordType } from './data';
import styles from '@/common/css/style.less';

type OperationModalProps = {
  done: boolean;
  visible: boolean;
  actionType: string;
  current: Partial<CallbackRecordType> | undefined;
  onDone: () => void;
  onSubmit: (values: CallbackRecordType) => void;
};

const OperationModal: FC<OperationModalProps> = (props) => {
  const { done, visible, current, onDone, onSubmit, children,actionType} = props;
  if (!visible) {
    return null;
  }
  return (
    <ModalForm<CallbackRecordType>
      visible={visible}
      title={`a`}
      className={styles.standardListForm}
      width={500}
      onFinish={async (values) => {
        onSubmit(values);
      }}
      initialValues={current}
      submitter={{
        render: (_, dom) => (done||actionType==='info'? dom[0] : dom),
      }}
      trigger={<>{children}</>}
      modalProps={{
        onCancel: () => onDone(),
        destroyOnClose: true,
        bodyStyle: done ? { padding: '72px 0' } : {},
      }}
    >
      {
        <>
          <ProFormText
            name="serviceAccount"
            label="客服顾问账号"
            readonly={actionType==='info'}
            placeholder="请输入"
          />
        </>
      }
    </ModalForm>
  );
}

export default OperationModal;
