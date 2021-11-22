import type { FC } from 'react';
import {
  ModalForm,
  ProFormText,
} from '@ant-design/pro-form';
import type { CompanyType } from './data.d';
import styles from '../style.less';

type OperationModalProps = {
  done: boolean;
  visible: boolean;
  actionType: string;
  current: Partial<CompanyType> | undefined;
  onDone: () => void;
  onSubmit: (values: CompanyType) => void;
};

const OperationModal: FC<OperationModalProps> = (props) => {
  const { done, visible, current, onDone, onSubmit, children,actionType} = props;
  if (!visible) {
    return null;
  }
  return (
    <ModalForm<CompanyType>
      visible={visible}
      layout={'inline'}
      title={done ? null : `企业${current ? actionType==='info'?'查看':'编辑' : '添加'}`}
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
            name="companyId"
            label="企业id"
            readonly={actionType==='info'}
            placeholder="请输入"
          />
          <ProFormText
            name="companyName"
            label="企业名称"
            readonly={actionType==='info'}
            placeholder="请输入"
          />
          <ProFormText
            name="city"
            label="所在城市"
            readonly={actionType==='info'}
            placeholder="请输入"
          />
          <ProFormText
            name="lastLoginTime"
            label="最后登录时间"
            readonly={actionType==='info'}
            placeholder="请输入"
          />
          <ProFormText
            name="jobNum"
            label="职位数"
            readonly={actionType==='info'}
            placeholder="请输入"
          />
        </>
      }
    </ModalForm>
  );
}

export default OperationModal;
