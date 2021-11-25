import React from 'react';
import {  Slider } from 'antd';

const FormSlider: React.FC<{
  value?: [number,number];
  onChange?: (value: [number,number]) => void;
}> = ({ value, onChange }) => {
  const marks = {
    0: '1k',
    26: '25k',
    50: '50k',
    100:'100k',
  };
  const defaultValue = value && value.length>1 ? value:[10,30] as [number,number]
  const handleChange = (val:  [number,number]) => {
    // 把最后一个值给传递出去
    if (onChange) {
      onChange(val);
    }
  };

  return <Slider range={true} marks={marks} onChange={handleChange} defaultValue={defaultValue}/>;
};

export default FormSlider;
