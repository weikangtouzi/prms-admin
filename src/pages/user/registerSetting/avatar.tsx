import React from 'react';
import {
  Form,
  Switch,
  Button,
  Upload,
  Descriptions,
  Input
} from 'antd';
import { PlusOutlined,ExclamationCircleOutlined } from '@ant-design/icons';
import styles from './index.less';


const uploadButton = (
  <div>
    <PlusOutlined />
    <div style={{ marginTop: 8 }}>点击上传</div>
  </div>
);

const Avatar = () => {
  return <div className={styles.register}>
    <Form
      name='form'
      initialValues={{}}
    >
    <Descriptions bordered layout='vertical'>
      <Descriptions.Item label='求职者头像' span={4}>
        <Descriptions bordered size={'small'}>
          <Descriptions.Item label='默认男生头像' span={4}>
            <Form.Item name='switch' label=''>
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
              >
                {uploadButton}
              </Upload>
            </Form.Item>
          </Descriptions.Item>
          <Descriptions.Item label='默认女生头像'>
            <Form.Item name='switch' label=''>
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
              >
                {uploadButton}
              </Upload>
            </Form.Item>
          </Descriptions.Item>
        </Descriptions>
      </Descriptions.Item>
      <Descriptions.Item label='企业相关头像' span={4}>
        <Descriptions bordered size={'small'}>
          <Descriptions.Item label='默认企业logo' span={4}>
            <Form.Item name='switch' label=''>
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
              >
                {uploadButton}
              </Upload>
            </Form.Item>
          </Descriptions.Item>
          <Descriptions.Item label='默认顾问头像'>
            <Form.Item name='switch' label=''>
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
              >
                {uploadButton}
              </Upload>
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

export default Avatar;
