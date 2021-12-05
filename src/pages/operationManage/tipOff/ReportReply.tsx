import type { FC } from 'react';
import {
  ModalForm, ProFormTextArea,
} from '@ant-design/pro-form';

import type { ReportType } from './data.d';
import styles from '@/common/css/style.less';


type CompanyAuditModal = {
  visible: boolean;
  current: Partial<ReportType> | undefined;
  onSubmit: (values: ReportType) => void;
  onCancel: () => void;
};

const OperationModal: FC<CompanyAuditModal> = (props) => {
  const { visible, current, onSubmit, children, onCancel } = props;
  if (!visible) {
    return null;
  }
  return (
    <ModalForm<ReportType>
      visible={visible}
      layout={'inline'}
      title='举报回复'
      className={styles.standardListForm}
      width={500}
      onFinish={async (values) => {
        onSubmit(values);
      }}
      initialValues={{ ...current, checkStatus: undefined }}
      trigger={<>{children}</>}
      modalProps={{
        onCancel: () => onCancel(),
        destroyOnClose: true,
      }}
    >
      <ProFormTextArea
        name='reply'
        label='回复内容'
        placeholder='请输入'
      />
    </ModalForm>
  );
};

export default OperationModal;
