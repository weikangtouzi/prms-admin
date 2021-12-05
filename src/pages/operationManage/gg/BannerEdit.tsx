import type { FC } from 'react';
import {
  ModalForm, ProFormRadio, ProFormSelect,
  ProFormText,
} from '@ant-design/pro-form';
import type { AdType } from './data';
import { Radio } from 'antd';
import styles from '@/common/css/style.less';
import { Form, InputNumber } from 'antd';
import FormUpload from '@/components/common/formUpload';

type OperationModalProps = {
  visible: boolean;
  current: Partial<AdType> | undefined;
  onSubmit: (values: AdType) => void;
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
  const { visible, current, onSubmit, children, onCancel } = props;
  if (!visible) {
    return null;
  }
  return (
    <ModalForm<AdType>
      visible={visible}
      {...formItemLayout}
      className={styles.standModalForm}
      title={`${current ? '编辑' : '添加'}Banner`}
      layout={'horizontal'}
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
            name='bannerName'
            label='banner名称'
            rules={[{ required: true, message: '请输入banner名称' }]}
            placeholder='请输入banner名称'
          />
          <ProFormSelect
            name='client'
            label='显示客户端'
            placeholder='请选择'
            valueEnum={{
              1: 'App招聘端',
              2: 'App求职端',
              3: 'Web端官网',
            }}
          />
          <ProFormSelect
            name='position'
            label='显示位置'
            placeholder='请选择'
            valueEnum={{
              1: '首页',
              2: '活动页',
            }}
          />
          <Form.Item label='Banner图' name='bannerUrl'>
            <FormUpload />
          </Form.Item>
          <Form.Item label='排序' name='sort'>
            <InputNumber precision={0} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name='canClick'
            label='可点击'
            rules={[
              { required: true }]}
          >
            <Radio.Group
              options={[
                {
                  label: '开',
                  value: 1,
                },
                {
                  label: '关',
                  value: 2,
                },
              ]}
              optionType='button'
              buttonStyle='solid'
            />
          </Form.Item>
          <Form.Item noStyle shouldUpdate>
            {(form) => {
              return form.getFieldValue('canClick') === 1 ?
                <ProFormRadio.Group
                  name='moduleAfterClick'
                  label='点击后打开'
                  options={[
                    {
                      label: '应用内容',
                      value: 1,
                    },
                    {
                      label: '模块主页',
                      value: 2,
                    },
                    {
                      label: 'URL',
                      value: 3,
                    },
                  ]}
                  rules={[{ required: true }]}
                /> : null;
            }}
          </Form.Item>
          <Form.Item noStyle shouldUpdate>
            {(form) => {
              if(form.getFieldValue('canClick')!==1) return null
              if(form.getFieldValue('moduleAfterClick') === 1){
                return <Form.Item style={{paddingLeft:'120px',margin:0}}>
                  <ProFormSelect name='type' label='类型'    valueEnum={{
                    1: '招聘会',
                    2: '资讯',
                    3: '企业',
                    4: '职位',
                    5: '人才',
                    6: '会员中心',
                  }}/>
                  <ProFormSelect name='page' label='页面'    valueEnum={{
                    1: '首页',
                    2: '活动页',
                  }}/>
                </Form.Item>
              }
              if(form.getFieldValue('moduleAfterClick') === 2){
                return <Form.Item style={{paddingLeft:'120px',margin:0}}>
                  <ProFormSelect name='page' label='页面'    valueEnum={{
                    1: '首页',
                    2: '活动页',
                  }}/>
                </Form.Item>
              }
              if(form.getFieldValue('moduleAfterClick') === 3){
                return   <Form.Item style={{paddingLeft:'120px',margin:0}}>
                  <ProFormText name='link' label='链接'/>
                </Form.Item>
              }
              return null
            }}
          </Form.Item>
        </>
      }
    </ModalForm>
  );
};

export default AnnouncementEditModal;
