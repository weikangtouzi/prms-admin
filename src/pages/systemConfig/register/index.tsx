import ProForm, { ProFormSwitch } from '@ant-design/pro-form';
import { Card, Col, Form, Input, InputNumber, message, Row, Select, Space, Switch } from 'antd';

const formItemLayout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 14 },
};
const Icon = () => {
  return <Card title='注册设置'>
    <ProForm
      {...formItemLayout}
      style={{ maxWidth: '660px', marginLeft: '50px' }}
      layout={'horizontal'}
      submitter={{
        render: (props, doms) => {
          return <Row>
            <Col span={14} offset={5}>
              <Space>{doms}</Space>
            </Col>
          </Row>;
        },
      }}
      onFinish={async (values) => {
        console.log(values);
        message.success('提交成功');
      }}
      params={{}}
    >
      <ProFormSwitch label='web端网站可注册' name='webCanRegister' />
      <Form.Item label='密码规则'>
        <Form.Item label='必须包含字母' name='alphabet' style={{ marginBottom: '6px' }} valuePropName='checked'>
          <Switch />
        </Form.Item>
        <Form.Item label='必须包含大写' name='upper' style={{ marginBottom: '6px' }} valuePropName='checked'>
          <Switch />
        </Form.Item>
        <Form.Item label='必须有特殊字符' name='special' style={{ marginBottom: '6px' }} valuePropName='checked'>
          <Switch />
        </Form.Item>
        <Form.Item label='最低位数' name='min' style={{ marginBottom: '6px' }}>
          <InputNumber precision={0} />
        </Form.Item>
      </Form.Item>
      <ProFormSwitch label='实名认证' name='realId' />
      <Form.Item label='注册安全设置'>
        <Form.Item label='同一IP注册需间隔' name='gap' style={{ marginBottom: '6px' }}>
          <Input.Group compact>
            <Form.Item
              name='gapNum'
              noStyle
              rules={[{ required: true, message: '请输入' }]}
            >
              <InputNumber precision={0} />
            </Form.Item>
            <Form.Item
              name='gapUnit'
              noStyle
              rules={[{ required: true, message: '请选择' }]}
            >
              <Select placeholder='请选择'>
                <Select.Option value='second'>秒</Select.Option>
                <Select.Option value='minute'>分</Select.Option>
                <Select.Option value='hour'>小时</Select.Option>
                <Select.Option value='day'>天</Select.Option>
              </Select>
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Form.Item label='密码单次输入错误' style={{ marginBottom: '6px' }}>
          <InputNumber precision={0} /><span
          style={{ lineHeight: '32px', display: 'inline-block', marginLeft: '8px' }}>次被限制</span>
        </Form.Item>
        <Form.Item label='超出错误次数锁定' style={{ marginBottom: '6px' }}>
          <Input.Group compact>
            <Form.Item
              name='lockNum'
              noStyle
              rules={[{ required: true, message: '请输入' }]}
            >
              <InputNumber precision={0} />
            </Form.Item>
            <Form.Item
              name='lockUnit'
              noStyle
              rules={[{ required: true, message: '请选择' }]}
            >
              <Select placeholder='请选择'>
                <Select.Option value='second'>秒</Select.Option>
                <Select.Option value='minute'>分</Select.Option>
                <Select.Option value='hour'>小时</Select.Option>
                <Select.Option value='day'>天</Select.Option>
              </Select>
            </Form.Item>
          </Input.Group>
        </Form.Item>
      </Form.Item>
    </ProForm>
  </Card>;
};
export default Icon;
