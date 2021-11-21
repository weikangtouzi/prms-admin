import React from 'react';
import { Cascader } from 'antd';
import type { CascaderValueType } from 'antd/es/cascader';


const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
      },
    ],
  },
];
const FormCascade: React.FC<{
  value?: CascaderValueType;
  onChange?: (value: CascaderValueType) => void;
}> = ({ value, onChange }) => {


  const handleChange = (val: CascaderValueType) => {
    // 把最后一个值给传递出去
    if (onChange) {
      onChange(val);
    }
  };

  return <Cascader
    value={value}
    options={options}
    onChange={handleChange}
    placeholder="请选择" />;
};

export default FormCascade;
