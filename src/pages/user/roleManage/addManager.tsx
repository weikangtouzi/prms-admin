import React from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
} from 'antd';
const { Option } = Select;
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};


const RegisterSetting = ()=>{
  return <div style={{padding:'15px 0',maxWidth:'600px'}} >
    <Form
      name="validate_other"
      {...formItemLayout}
      initialValues={{}}
    >
      <Form.Item name="switch" label="用户名">
        <Input />
      </Form.Item>
      <Form.Item name="switch2" label="密码">
        <Input.Password />
      </Form.Item>
      <Form.Item name="switch3" label="真实姓名">
        <Input />
      </Form.Item>
      <Form.Item name="switch4" label="管理员类型">
        <Radio value="a">系统管理员</Radio>
        <Radio value="b">城市管理员</Radio>
      </Form.Item>
      <Form.Item name="switch5" label="所属管理组">
        <Select placeholder="请选择管理组">
          <Option value="china">China</Option>
          <Option value="usa">U.S.A</Option>
        </Select>
      </Form.Item>
      <Form.Item name="switch6" label="状态">
        <Radio.Group>
          <Radio value="a">正常</Radio>
          <Radio value="b">锁定</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  </div>
}

export default RegisterSetting;
