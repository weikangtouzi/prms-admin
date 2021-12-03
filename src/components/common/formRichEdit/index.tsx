import React, { useState } from 'react';
import { Upload } from 'antd';
import 'braft-editor/dist/index.css';
// @ts-ignore
import { ContentUtils } from 'braft-utils';
import type { ControlType, EditorState, ExtendControlType } from 'braft-editor';
import BraftEditor from 'braft-editor';

const controls: ControlType[] = ['bold', 'italic', 'underline', 'text-color', 'separator', 'separator']
const FormRichEdit: React.FC<{
  value?: string[] | string;
  onChange?: (value: string[]) => void;
}> = ({ value, onChange }) => {
  const [text, setText] = useState(BraftEditor.createEditorState('<p>hello world</p>'));

  const handleChange = (e: any) => {
    console.log(e.toHTML());
  };
  const uploadHandler = (param: any) => {
    if (!param.file) {
      return false
    }
    setText((pre: EditorState)=>{
      return ContentUtils.insertMedias(pre, [{
      type: 'IMAGE',
      url: 'https://dummyimage.com/200x200/1890ff/FFF&text=Bnner'
    }])
    })
    return false
  }
  const extendControls: ExtendControlType[] = [
    {
      key: 'antd-uploader',
      type: 'component',
      component: (
        <Upload
          accept="image/*"
          showUploadList={false}
          customRequest={uploadHandler}
        >
          <button type="button" className="control-item button upload-button" data-title="插入图片">插入图片</button>
        </Upload>
      )
    }
  ]

  return <div style={{border:'1px solid #d9d9d9',borderRadius:'2px'}}><BraftEditor
    value={text}
    onChange={handleChange}
    controls={controls}
    extendControls={extendControls}
    contentStyle={{height: 200}}
  />
  </div>;
};

export default FormRichEdit;
