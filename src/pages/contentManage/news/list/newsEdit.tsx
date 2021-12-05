import type { FC } from 'react';
import {
  ModalForm,
  ProFormRadio, ProFormSelect,
  ProFormText,
} from '@ant-design/pro-form';
import type { NewsDetailType } from './data.d';
import styles from '@/common/css/style.less';
import { Form } from 'antd';
import FormRichEdit from '@/components/common/formRichEdit';

type OperationModalProps = {
  visible: boolean;
  current: Partial<NewsDetailType> | undefined;
  onSubmit: (values: NewsDetailType) => void;
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

const NewsEditModal: FC<OperationModalProps> = (props) => {
  const { visible, current, onSubmit, children,onCancel } = props;
  if (!visible) {
    return null;
  }
  return (
    <ModalForm<NewsDetailType>
      visible={visible}
      {...formItemLayout}
      className={styles.standModalForm}
      title={`${current ? '编辑' : '添加'}资讯`}
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
            label="资讯标题"
            rules={[{ required: true, message: '请输入资讯标题' }]}
            placeholder="请输入资讯标题"
          />
          <ProFormText
            name="subTitle"
            label="资讯副标题"
            rules={[{ required: true, message: '请选择资讯副标题' }]}
            placeholder="请输入资讯副标题"
          />
          <ProFormSelect
            name="classify"
            label="资讯分类"
            valueEnum={{
              1: '行业资讯',
              2: '新闻资讯',
            }}
          />
          <ProFormRadio.Group
            name="type"
            label="资讯性质"
            rules={[{ required: true, message: '请选择资讯性质' }]}
            options={[
              {
                label: '原创',
                value: 'origin',
              },
              {
                label: '转载',
                value: 'resend',
              },
            ]}
          />
          <Form.Item noStyle shouldUpdate>
            {(form) => {
              return form.getFieldValue('type') ==='resend'?
                <ProFormText  name="originUrl" label="原链接"  rules={[{required:true}]}/>:null
            }}
          </Form.Item>
          <ProFormText
            name="author"
            label="作者名称"
            rules={[{ required: true, message: '请选择作者名称' }]}
            placeholder="请输入作者名称"
          />
          <Form.Item label="内容详情" name="detail">
            <FormRichEdit/>
          </Form.Item>
          <ProFormSelect
            name="contact"
            label="相关资讯"
            mode="multiple"
            valueEnum={{
              '1': '相关资讯1',
              '2': '相关资讯2',
            }}
          />
          <ProFormRadio.Group
            name="promote"
            label="推广"
            options={[
              {
                label: '无',
                value: '',
              },
              {
                label: '推荐',
                value: 'suggest',
              },
            ]}
          />
        </>
      }
    </ModalForm>
  );
};

export default NewsEditModal;
