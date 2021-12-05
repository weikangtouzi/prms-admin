import ProForm  from '@ant-design/pro-form';
import { Card, Col, Form, message, Row, Space, Typography } from 'antd';
import FormUpload from '@/components/common/formUpload';
const formItemLayout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 14 },
};
const { Title } = Typography;
const Icon = ()=>{
  return <Card>
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
       <Title level={5}>用户默认头像</Title>
        <Form.Item label='男' name='maleUser' >
          <FormUpload/>
        </Form.Item>
        <Form.Item label='女' name='femaleUser'>
          <FormUpload/>
        </Form.Item>
      <Title level={5}>企业默认头像</Title>
        <Form.Item label='企业Logo' name='logo' >
          <FormUpload/>
        </Form.Item>
        <Form.Item label='企业顾问/Hr头像' name='icon'>
          <FormUpload/>
        </Form.Item>
    </ProForm>
  </Card>
}
export default Icon;
