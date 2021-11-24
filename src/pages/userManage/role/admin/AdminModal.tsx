import type { FC } from 'react';
import {
  ModalForm,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-form';
import type { administratorType } from './data.d';
import styles from '@/common/css/style.less';

type OperationModalProps = {
  visible: boolean;
  current: Partial<administratorType> | undefined;
  onSubmit: (values: administratorType) => void;
  onCancel: () => void;
};

const AdminModal: FC<OperationModalProps> = (props) => {
  const { visible, current, onSubmit, children,onCancel } = props;
  if (!visible) {
    return null;
  }
  return (
    <ModalForm<administratorType>
      visible={visible}
      title={`${current ? '编辑' : '添加'}管理员信息`}
      className={styles.standardListForm}
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
            name="account"
            label="管理员账号"
            rules={[{ required: true, message: '请输入管理员账号' }]}
            placeholder="请输入"
            disabled={!!current}
          />
          <ProFormText
            name="realName"
            label="真实姓名"
            rules={[{ required: true, message: '请输入真实姓名' }]}
            placeholder="请输入"
          />
          <ProFormSelect
            name="role"
            label="管理员角色"
            rules={[{ required: true, message: '请选择管理员角色' }]}
            options={[
              {
                label: '超级管理员',
                value: 1,
              },
              {
                label: '运营',
                value: 2,
              },
              {
                label: '商务',
                value: 3,
              }
            ]}
            placeholder="请选择管理员角色"
          />
          <ProFormText.Password
            name="password"
            label="登录密码"
            rules={[{ message: '请输入至少五个字符的密码', min: 5 }]}
            placeholder="请输入至少五个字符"
          />
        </>
      }
    </ModalForm>
  );
};

export default AdminModal;
