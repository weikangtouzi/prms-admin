import ProForm  from '@ant-design/pro-form';
import { Button, Card, Col, Form, Input, InputNumber, message, Row, Space } from 'antd';
import {PlusOutlined,MinusOutlined } from '@ant-design/icons';
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

      <Form.Item label='直播次数购买'>
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
      <Form.Item label='购买查看简历'>
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
      <Form.Item label='购买沟通数量'>
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
      <Form.Item label='购买视频面试次数'>
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
      <Form.Item label='职位刷新消耗'>
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
      <Form.Item label='职位置顶消耗'>
        <Input.Group compact>
          <Form.Item
            name='jobTopNum'
            noStyle
            rules={[{ required: true, message: '请输入' }]}
          >
            <InputNumber precision={0}/>
          </Form.Item><span
          style={{ lineHeight: '32px', display: 'inline-block', margin: '0 8px' }}>早点</span>
          <Form.Item
            name='jobTopUnit'
            noStyle
            rules={[{ required: true, message: '请选择' }]}
          >
            <InputNumber precision={0}/>
          </Form.Item><span
          style={{ lineHeight: '32px', display: 'inline-block', marginLeft: '8px' }}>次</span>
        </Input.Group>
      </Form.Item>
      <Form.Item label='单次购买早点设置'>
        <Input.Group compact>
          <Form.Item
            name='jobTopNum'
            noStyle
            rules={[{ required: true, message: '请输入' }]}
          >
            <InputNumber precision={0}/>
          </Form.Item><span
          style={{ lineHeight: '32px', display: 'inline-block', margin: '0 8px' }}>早点</span>
          <Form.Item
            name='jobTopUnit'
            noStyle
            rules={[{ required: true, message: '请选择' }]}
          >
            <InputNumber precision={0}/>
          </Form.Item><span
          style={{ lineHeight: '32px', display: 'inline-block', margin: '0 8px' }}>次</span> <Button icon={<PlusOutlined />}>添加</Button>
        </Input.Group>
        <Input.Group compact style={{marginTop:'8px'}}>
          <Form.Item
            name='jobTopNum'
            noStyle
            rules={[{ required: true, message: '请输入' }]}
          >
            <InputNumber precision={0}/>
          </Form.Item><span
          style={{ lineHeight: '32px', display: 'inline-block', margin: '0 8px' }}>早点</span>
          <Form.Item
            name='jobTopUnit'
            noStyle
            rules={[{ required: true, message: '请选择' }]}
          >
            <InputNumber precision={0}/>
          </Form.Item><span
          style={{ lineHeight: '32px', display: 'inline-block', margin: '0 8px' }}>次</span> <Button danger icon={<MinusOutlined />}>删除</Button>
        </Input.Group>
      </Form.Item>
    </ProForm>
  </Card>
}
export default Job;
