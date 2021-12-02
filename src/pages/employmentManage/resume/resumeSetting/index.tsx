import ProForm, { ProFormSwitch } from '@ant-design/pro-form';
import CheckAll from '@/components/common/checkAll';
import { Card, Col, Form, InputNumber, Row, Space } from 'antd';


const formItemLayout ={
  labelCol: { span: 4 },
  wrapperCol: { span: 14 },
}


const UserList = () => {
  return <Card>
    <ProForm<{
      name: string;
      company?: string;
      useMode?: string;
    }>
      {...formItemLayout}
      layout={'horizontal'}
      submitter={{
        render: (props, doms) => {
          return  <Row>
            <Col span={14} offset={4}>
              <Space>{doms}</Space>
            </Col>
          </Row>
        },
      }}
      onFinish={async (values) => {
        console.log(values);
      }}
      params={{}}
      // request={async () => {
      //   await waitTime(100);
      //   return {
      //     name: '蚂蚁设计有限公司',
      //     useMode: 'chapter',
      //   };
      // }}
    >
      <ProFormSwitch
        width="md"
        name="name"
        label="强制创建简历"
        tooltip="用户咨询岗位时需先创建简历"
      />
      <Form.Item
        name="checkItem"
        label="简历必填项"
        tooltip="用户在线简历必填项完善才能投递"
      >
        <CheckAll options={[
          { label: '个人信息', value: 'Apple' },
          { label: '求职意向', value: 'Pear' },
          { label: '个人优势', value: '2'},
          { label: '工作经历', value: 'Oran2ge'},
          { label: '教育经历', value: 'Ora3nge'},
        ]}/>
      </Form.Item>
      <Form.Item
        name="refresh"
        label="简历刷新要求"
        tooltip="用户在线简历必填项完善才能刷新"
      >
        <CheckAll options={[
          { label: '个人信息', value: 'Apple' },
          { label: '求职意向', value: 'Pear' },
          { label: '个人优势', value: '2'},
          { label: '工作经历', value: 'Oran2ge'},
          { label: '教育经历', value: 'Ora3nge'},
        ]}/>
      </Form.Item>
      <Form.Item
        name="top"
        label="简历置顶要求"
        tooltip="用户在线简历必填项完善才能置顶"
      >
        <CheckAll options={[
          { label: '个人信息', value: 'Apple' },
          { label: '求职意向', value: 'Pear' },
          { label: '个人优势', value: '2'},
          { label: '工作经历', value: 'Oran2ge'},
          { label: '教育经历', value: 'Ora3nge'},
        ]}/>
      </Form.Item>
      <Form.Item
        name='number'
        label="用户可创建"
      >
        <InputNumber min={1} max={10} /> 份简历
      </Form.Item>
      <Form.Item
        name='require'
        label="申请职位要求"
      >
        <InputNumber min={1} max={10} /> %简历完成度
      </Form.Item>
    </ProForm>
  </Card>;
};

export default UserList;
