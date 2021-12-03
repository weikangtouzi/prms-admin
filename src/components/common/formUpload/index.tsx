import React, { useState } from 'react';
import { Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { UploadFile } from 'antd/lib/upload/interface';

const uploadButton = (
  <div>
    <PlusOutlined />
    <div style={{ marginTop: 8 }}>点击上传</div>
  </div>
);
const FormUpload: React.FC<{
  value?: string[] | string;
  onChange?: (value: string[]) => void;
}> = ({ value, onChange }) => {
  // todo 对接的时候
  console.log(value);
  const initValue = typeof value === 'string' ? [{
    uid: '-1',
    name: 'image.png',
    status: 'done',
    url: value,
  }] : Array(value).map((v: any) => {
    return {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url:v,
    };
  });
  // @ts-ignore
  const [fileList, setFileList] = useState<UploadFile[]>(initValue);


  const handleChange = (e: any) => {
    setFileList(e.fileList);
  };

  return <Upload
    action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
    listType='picture-card'
    fileList={fileList}
    accept={'image/*'}
    onChange={handleChange}
  >
    {fileList.length >= 1 ? null : uploadButton}
  </Upload>;
};

export default FormUpload;
