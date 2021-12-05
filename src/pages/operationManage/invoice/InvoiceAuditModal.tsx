import type { FC } from 'react';
import {
  ModalForm,
  ProFormRadio, ProFormSelect,
  ProFormText, ProFormTextArea,
} from '@ant-design/pro-form';
import { Avatar, Form, List } from 'antd';
import type { InvoiceType } from './data.d';
import styles from '@/common/css/style.less';


type CompanyAuditModal = {
  visible: boolean;
  current: Partial<InvoiceType> | undefined;
  onSubmit: (values: InvoiceType) => void;
  onCancel: () => void;
};

const OperationModal: FC<CompanyAuditModal> = (props) => {
  const { visible, current, onSubmit, children,onCancel} = props;
  if (!visible) {
    return null;
  }
  return (
    <ModalForm<InvoiceType>
      visible={visible}
      layout={'inline'}
      title={
        current?.status===2?
          <span><Avatar shape="square" src="/images/user/audit.png" /><span style={{marginLeft:'8px'}}>审核成功</span></span>
          :<List.Item>
          <List.Item.Meta
            avatar={<Avatar shape="square" src="/images/user/audit.png" />}
            title='审核发票'
            description="确认开具申请的发票内容"
          />
        </List.Item>
      }
      className={styles.standardListForm}
      width={500}
      onFinish={async (values) => {
        onSubmit(values);
      }}
      initialValues={{...current,checkStatus:undefined}}
      trigger={<>{children}</>}
      modalProps={{
        onCancel: () => onCancel(),
        destroyOnClose: true,
      }}
    >
      {
        <>
          <ProFormSelect
            name="titleType"
            label="抬头类型"
            readonly={true}
            placeholder="请选择"
            valueEnum={{
              1: '企业',
              2: '个人',
            }}
          />
          <ProFormText
            name="title"
            label="发票抬头"
            readonly={true}
            placeholder="请输入"
          />
          <Form.Item noStyle shouldUpdate>
            {(form) => {
              return form.getFieldValue('titleType') ===1?
                <ProFormText  name="taxNo" label="公司税号" readonly={true}/>:null
            }}
          </Form.Item>
          <ProFormText
            name="price"
            label="发票金额"
            readonly={true}
            placeholder="请输入"
          />
          <ProFormRadio.Group
            name="status"
            label="审核结果"
            rules={[
              {required:true}
            ]}
            options={[
              {
                label: '通过',
                value: 1,
              },
              {
                label: '失败',
                value: 2,
              }
            ]}
          />
          <Form.Item noStyle shouldUpdate>
            {(form) => {
              return form.getFieldValue('status') ===2?
                <ProFormTextArea  name="failReason" label="失败原因"  rules={[{required:true}]}/>:null
            }}
          </Form.Item>
        </>
      }
    </ModalForm>
  );
}

export default OperationModal;
