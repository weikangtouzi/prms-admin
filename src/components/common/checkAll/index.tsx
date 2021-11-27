import React,{useState} from 'react';
import { Checkbox } from 'antd';
import type { CheckboxValueType ,CheckboxOptionType} from 'antd/lib/checkbox/Group';
const CheckboxGroup = Checkbox.Group;

const CheckAll: React.FC<{
  value?: CheckboxValueType[];
  onChange?: (value: CheckboxValueType[]) => void;
  options: CheckboxOptionType[];
}> = ({ value, options,onChange }) => {
  const [checkedList, setCheckedList] = useState(value);
  const [indeterminate, setIndeterminate] = useState(false);
  const [checkAll, setCheckAll] = useState(false);
  const onChanged = (list: CheckboxValueType[]) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < options.length);
    setCheckAll(list.length === options.length);
    if (onChange) {
      onChange(list);
    }
  };

  const onCheckAllChange = (e: any) => {
    const res = e.target.checked? options.map(o=>o.value):[]
    setCheckedList( res);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };
  return <>
    <div style={{marginBottom:'5px'}}>
      <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
        全选
      </Checkbox>
    </div>
    <CheckboxGroup options={options} value={checkedList} onChange={onChanged} />
  </>;
};

export default CheckAll;
