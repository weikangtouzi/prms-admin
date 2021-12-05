import type { FC } from 'react';
import {
  ModalForm,
  ProFormRadio, ProFormSelect,
  ProFormText, ProFormTextArea,
} from '@ant-design/pro-form';
import { Avatar, Form, Image, List } from 'antd';
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
      title={
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar shape='square' src='/images/user/audit.png' />}
            title='举报审核'
            description='确认举报是否属实，审核通过将冻结被举报账户'
          />
        </List.Item>
      }
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
      {
        <>
          <ProFormSelect
            name='reportedUserType'
            label='被举报类型'
            readonly={true}
            placeholder='请选择'
            valueEnum={{
              1: '个人',
              2: '企业',
            }}
          />
          <ProFormText
            name='reportedAccount'
            label='被举报ID'
            readonly={true}
            placeholder='请输入'
          />
          <ProFormSelect
            name='type'
            label='举报类型'
            readonly={true}
            placeholder='请选择'
            valueEnum={{
              1: '职位虚假',
              2: '恶意骚扰',
            }}
          />
          <ProFormTextArea
            name='detail'
            label='具体情况说明'
            readonly={true}
          />
          <Form.Item
            shouldUpdate
            label='图片证明'>
            {(form) => {
              return <Image.PreviewGroup>
                {
                  form.getFieldValue('imgComment').map((img: string) => {
                    return <Image src={img} width={60} key={img} />;
                  })
                }
              </Image.PreviewGroup>;
            }}
          </Form.Item>
          <ProFormRadio.Group
            name='status'
            label='审核结果'
            rules={[
              { required: true },
            ]}
            options={[
              {
                label: '通过',
                value: 1,
              },
              {
                label: '失败',
                value: 2,
              },
            ]}
          />
        </>
      }
    </ModalForm>
  );
};

export default OperationModal;
