import type { FC } from 'react';
import {
  ModalForm,
  ProFormRadio,
  ProFormText, ProFormTextArea,
} from '@ant-design/pro-form';
import { Avatar, Form, List,Image } from 'antd';
import type { CompanyType } from './data.d';
import styles from '@/common/css/style.less';


type CompanyAuditModal = {
  done: boolean;
  visible: boolean;
  actionType: string;
  current: Partial<CompanyType> | undefined;
  onDone: () => void;
  onSubmit: (values: CompanyType) => void;
};

const OperationModal: FC<CompanyAuditModal> = (props) => {
  const { done, visible, current, onDone, onSubmit, children,actionType} = props;
  if (!visible) {
    return null;
  }
  return (
    <ModalForm<CompanyType>
      visible={visible}
      layout={'inline'}
      title={
        current?.checkStatus===2?
          <span><Avatar shape="square" src="/images/user/audit.png" /><span style={{marginLeft:'8px'}}>审核成功</span></span>
          :<List.Item>
          <List.Item.Meta
            avatar={<Avatar shape="square" src="/images/user/audit.png" />}
            title='审核企业'
            description="确认申请的企业名称与营业执照一致"
          />
        </List.Item>
      }
      className={styles.standardListForm}
      width={500}
      onFinish={async (values) => {
        onSubmit(values);
      }}
      initialValues={{...current,checkStatus:undefined}}
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
            name="companyName"
            label="企业名称"
            readonly={true}
            placeholder="请输入"
          />
          <Form.Item label='营业执照' name='logo'>
            <Image
              width={100}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </Form.Item>
          <ProFormRadio.Group
            name="checkStatus"
            label="审核结果"
            readonly={actionType==='info'}
            rules={[
              {required:true}
            ]}
            options={[
              {
                label: '审核成功',
                value: 2,
              },
              {
                label: '审核失败',
                value: 3,
              }
            ]}
          />
          {
            current?.checkStatus!==2 && <Form.Item noStyle shouldUpdate>
              {(form) => {
               return form.getFieldValue('checkStatus') ===3?
                 <ProFormTextArea  name="failReason" label="失败原因"  rules={[{required:true}]}/>:null
              }}
            </Form.Item>
          }
        </>
      }
    </ModalForm>
  );
};

export default OperationModal;
