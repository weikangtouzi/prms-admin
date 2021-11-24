import type { FC } from 'react';
import {
  ModalForm,
  ProFormText, ProFormTextArea,
} from '@ant-design/pro-form';
import type { roleType } from './data.d';
import styles from '@/common/css/style.less';
import { Form } from 'antd';
import AuthList from '@/pages/userManage/role/auth/authList';

type OperationModalProps = {
  visible: boolean;
  current: Partial<roleType> | undefined;
  onSubmit: (values: roleType) => void;
  onCancel: () => void;
};

const RoleModal: FC<OperationModalProps> = (props) => {
  const { visible, current, onSubmit, children,onCancel } = props;
  const [form] = Form.useForm();
  if (!visible) {
    return null;
  }
  const onTreeChecked = (value: any)=>{
    form.setFieldsValue({authList:value})
  }
  return (
    <ModalForm<roleType>
      visible={visible}
      title={`${current ? '编辑' : '添加'}角色信息`}
      className={styles.standardListForm}
      width={640}
      form={form}
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
            name="roleName"
            label="角色名称"
            rules={[{ required: true, message: '请输入角色名称' }]}
            placeholder="请输入"
            disabled={!!current}
          />
          <ProFormTextArea
            name="roleDesc"
            label="角色描述"
            rules={[{ required: true, message: '请输入角色描述' }]}
            placeholder="请输入"
          />
          <Form.Item
            name="authList"
            label="角色权限"
            rules={[{ required: true, message: '请选择角色的权限' }]}
          >
            <AuthList authList={current?.authList} onChecked={onTreeChecked}/>
          </Form.Item>
        </>
      }
    </ModalForm>
  );
};

export default RoleModal;
