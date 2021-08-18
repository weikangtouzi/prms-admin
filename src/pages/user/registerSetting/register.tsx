import React from 'react';
import {
  Form,
  InputNumber,
  Switch,
  Button,
  Upload,
  Checkbox,
  Row,
  Col ,
  Descriptions,
  Input
} from 'antd';
import { PlusOutlined,ExclamationCircleOutlined } from '@ant-design/icons';
import styles from './index.less';

const { TextArea } = Input;

const uploadButton = (
  <div>
    <PlusOutlined />
    <div style={{ marginTop: 8 }}>点击上传</div>
  </div>
);

const RegisterSetting = () => {
  return <div className={styles.register}>
    <Form
      name='form'
      initialValues={{}}
    >
    <Descriptions bordered layout='vertical'>
      <Descriptions.Item label='网站开启注册' span={4}>
        <Descriptions bordered size={'small'}>
          <Descriptions.Item label='是否开启'>
            <Form.Item name='switch' label=''>
              <Switch />
            </Form.Item>
          </Descriptions.Item>
        </Descriptions>
      </Descriptions.Item>
      <Descriptions.Item label='通用注册设置' span={4}>
        <Descriptions bordered size={'small'}>
          <Descriptions.Item label='规则设置' span={4}>
            <Form.Item name='switch2' label=''>
              <Checkbox.Group>
                <Row>
                  <Checkbox value='A' style={{ lineHeight: '24px' }}>
                    是否必须含有字母
                  </Checkbox>
                </Row>
                <Row>
                  <Checkbox value='b' style={{ lineHeight: '24px' }}>
                    是否必须大写
                  </Checkbox>
                </Row>
                <Row>
                  <Checkbox value='c' style={{ lineHeight: '24px' }}>
                    是否必须有特殊字符
                  </Checkbox>
                </Row>
              </Checkbox.Group>
            </Form.Item>
          </Descriptions.Item>
          <Descriptions.Item label='实名认证' span={4}>
            <Form.Item name='switch2' label='' >
              <Switch />
            </Form.Item>
          </Descriptions.Item>
        </Descriptions>
      </Descriptions.Item>
      <Descriptions.Item label='注册安全设置' span={4}>
        <Descriptions bordered size={'small'}>
          <Descriptions.Item label='同一IP注册间隔' span={4}>
            <Form.Item name='switch5' label=''>
              <InputNumber min={1} max={10} size={'small'} /> 小时   <ExclamationCircleOutlined style={{ color: '#00A652' }}/> 0为不限，其他数字为间隔时间。
            </Form.Item>
          </Descriptions.Item>
          <Descriptions.Item label='密码单次输入错误限制' span={4}>
            <Form.Item name='switch4' label=''>
              <InputNumber min={1} max={10} size={'small'} /> 次   <ExclamationCircleOutlined style={{ color: '#00A652' }}/> 0为不限，其他数字为限制次数。
            </Form.Item>
          </Descriptions.Item>
          <Descriptions.Item label='超出次数锁定时间限制' span={4}>
            <Form.Item name='switch6' label=''>
              <InputNumber min={1} max={10} size={'small'} /> 小时   <ExclamationCircleOutlined style={{ color: '#00A652' }}/> 0为不限，其他数字为间隔时间。
            </Form.Item>
          </Descriptions.Item>
          <Descriptions.Item label='是否开启安全输入' span={4}>
            <Form.Item name='switch7' label='' >
              <Switch />
            </Form.Item>
          </Descriptions.Item>
          <Descriptions.Item label='敏感词库管理' span={4}>
            <Form.Item name='switch7' label='' >
              <Row>
                <Col span={12}>
                  <TextArea/>
                </Col>
                <Col span={12} style={{padding:"0 3px",display:'flex',alignItems:'center'}} >
                 　 <ExclamationCircleOutlined style={{ color: '#00A652' }}/>&nbsp;<span>多个请用,(半角逗号)隔开。</span>
                </Col>
              </Row>
            </Form.Item>
          </Descriptions.Item>
        </Descriptions>
      </Descriptions.Item>
    </Descriptions>
    </Form>
    <div style={{textAlign:'center'}}>
      <Button type='primary' htmlType='submit' style={{margin:'10px auto'}}>
        提交
      </Button>
    </div>
  </div>;
};

export default RegisterSetting;
