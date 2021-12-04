import type { FC } from 'react';
import {
  ModalForm,
  ProFormText,
} from '@ant-design/pro-form';
import type { AnnouncementType } from './data.d';
import styles from '@/common/css/style.less';
import { Form } from 'antd';
import FormRichEdit from '@/components/common/formRichEdit';

type OperationModalProps = {
  visible: boolean;
  current: Partial<AnnouncementType> | undefined;
  onSubmit: (values: AnnouncementType) => void;
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

const AnnouncementEditModal: FC<OperationModalProps> = (props) => {
  const { visible, current, onSubmit, children,onCancel } = props;
  if (!visible) {
    return null;
  }
  return (
    <ModalForm<AnnouncementType>
      visible={visible}
      {...formItemLayout}
      className={styles.standModalForm}
      title={`${current ? '编辑' : '添加'}公告`}
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
            label="公告标题"
            rules={[{ required: true, message: '请输入公告标题' }]}
            placeholder="请输入公告标题"
          />
          <ProFormText
            name="subTitle"
            label="公告副标题"
            rules={[{ required: true, message: '请选择公告副标题' }]}
            placeholder="请输入公告副标题"
          />
          <Form.Item label="内容详情" name="detail">
            <FormRichEdit/>
          </Form.Item>

        </>
      }
    </ModalForm>
  );
};

export default AnnouncementEditModal;
