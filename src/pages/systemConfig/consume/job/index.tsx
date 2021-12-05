import ProForm  from '@ant-design/pro-form';
import { Card, Col, Form, Input, InputNumber, message, Row, Select, Space } from 'antd';
const formItemLayout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 14 },
};
const Job = ()=>{
  return <Card title='注册设置'>
    <ProForm
      {...formItemLayout}
      style={{maxWidth:'660px',marginLeft:'50px'}}
      layout={'horizontal'}
      submitter={{
        render: (props, doms) => {
          return  <Row>
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

        <Form.Item label='简历刷新'>
          <Input.Group compact>
            <Form.Item
              name='gapNum'
              noStyle
              rules={[{ required: true, message: '请输入' }]}
            >
              <InputNumber precision={0}/>
            </Form.Item><span
            style={{ lineHeight: '32px', display: 'inline-block', margin: '0 8px' }}>早点</span>
            <Form.Item
              name='gapUnit'
              noStyle
              rules={[{ required: true, message: '请选择' }]}
            >
              <InputNumber precision={0}/>
            </Form.Item><span
            style={{ lineHeight: '32px', display: 'inline-block', marginLeft: '8px' }}>次</span>
          </Input.Group>
        </Form.Item>
      <Form.Item label='简历置顶'>
        <Input.Group compact>
          <Form.Item
            name='topNum'
            noStyle
            rules={[{ required: true, message: '请输入' }]}
          >
            <InputNumber precision={0}/>
          </Form.Item><span
          style={{ lineHeight: '32px', display: 'inline-block', margin: '0 8px' }}>早点</span>
          <Form.Item
            name='topUnit'
            noStyle
            rules={[{ required: true, message: '请选择' }]}
          >
            <InputNumber precision={0}/>
          </Form.Item><span
          style={{ lineHeight: '32px', display: 'inline-block', marginLeft: '8px' }}>次</span>
        </Input.Group>
      </Form.Item>
      <Form.Item label='简历优化'>
        <Input.Group compact>
          <Form.Item
            name='advanceNum'
            noStyle
            rules={[{ required: true, message: '请输入' }]}
          >
            <InputNumber precision={0}/>
          </Form.Item><span
          style={{ lineHeight: '32px', display: 'inline-block', margin: '0 8px' }}>早点</span>
          <Form.Item
            name='advanceUnit'
            noStyle
            rules={[{ required: true, message: '请选择' }]}
          >
            <InputNumber precision={0}/>
          </Form.Item><span
          style={{ lineHeight: '32px', display: 'inline-block', marginLeft: '8px' }}>次</span>
        </Input.Group>
      </Form.Item>
      <Form.Item label='简历代投'>
        <Input.Group compact>
          <Form.Item
            name='delegateNum'
            noStyle
            rules={[{ required: true, message: '请输入' }]}
          >
            <InputNumber precision={0}/>
          </Form.Item><span
          style={{ lineHeight: '32px', display: 'inline-block', margin: '0 8px' }}>早点</span>
          <Form.Item
            name='delegateUnit'
            noStyle
            rules={[{ required: true, message: '请选择' }]}
          >
            <InputNumber precision={0}/>
          </Form.Item><span
          style={{ lineHeight: '32px', display: 'inline-block', marginLeft: '8px' }}>次</span>
        </Input.Group>
      </Form.Item>
      <Form.Item label='简历模板'>
        <Input.Group compact>
          <Form.Item
            name='templateNum'
            noStyle
            rules={[{ required: true, message: '请输入' }]}
          >
            <InputNumber precision={0}/>
          </Form.Item><span
          style={{ lineHeight: '32px', display: 'inline-block', margin: '0 8px' }}>早点</span>
          <Form.Item
            name='templateUnit'
            noStyle
            rules={[{ required: true, message: '请选择' }]}
          >
            <InputNumber precision={0}/>
          </Form.Item><span
          style={{ lineHeight: '32px', display: 'inline-block', marginLeft: '8px' }}>次</span>
        </Input.Group>
      </Form.Item>
      <Form.Item label='职业资讯'>
        <Input.Group compact>
          <Form.Item
            name='newsNum'
            noStyle
            rules={[{ required: true, message: '请输入' }]}
          >
            <InputNumber precision={0}/>
          </Form.Item><span
          style={{ lineHeight: '32px', display: 'inline-block', margin: '0 8px' }}>早点/次</span>
          <Form.Item
            name='newsUnit'
            noStyle
            rules={[{ required: true, message: '请选择' }]}
          >
            <InputNumber precision={0}/>
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
    </ProForm>
  </Card>
}
export default Job;
