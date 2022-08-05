import React, { useState } from 'react';
import { Button, Form, message, Row, Col, Input, Modal } from 'antd';
import { connect } from 'umi';

const FormItem = Form.Item;
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 18,
  },
};
export default function SetPassword({ currentData }) {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    HTAPI.AdminResetPassword({
    	oldOne: values.password,
    	newOne: values.reloadPassword,
    }).then(response => {
    	message.success('修改成功')
    	setVisible(false)
    })
  };

  const handleFinishFailed = (error) => {
    if (error) {
      message.warn('请输入必填项');
      return false;
    }
  };

  return (
    <span>
        <Button type="link" style={{ margin: 0, padding: 0, color: '#000' }} onClick={() => setVisible(true)}>
          修改密码
        </Button>
        <Modal
          title="修改密码"
          visible={visible}
          onCancel={() => setVisible(false)}
          confirmLoading={false}
          onOk={() => form.submit()}
        >
          <Form
            {...layout}
            name="update-password"
            form={form}
            onFinish={handleSubmit}
            onFinishFailed={handleFinishFailed}
          >
            <Row className="mt20">
              <Col span={24}>
                <FormItem
                  label="旧密码"
                  name="password"
                  rules={[{ required: true, message: '密码格式不正确' }]}
                >
                  <Input.Password style={{ width: '100%' }} />
                </FormItem>
              </Col>
              <Col span={24}>
                <FormItem
                  label="新密码"
                  name="reloadPassword"
                  rules={[{ required: true, message: '密码格式不正确' }]}
                >
                  <Input.Password style={{ width: '100%' }} />
                </FormItem>
              </Col>
            </Row>
          </Form>
      </Modal>
    </span>
  );
}
