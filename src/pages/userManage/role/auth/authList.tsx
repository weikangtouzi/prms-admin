import React, { useState } from 'react';
import { Tree } from 'antd';

const treeData = [
  {
    title: '用户管理',
    key: '0-0',
    children: [
      {
        title: '用户列表',
        key: '0-0-0',
        children: [
          { title: '求职用户', key: '0-0-0-0' },
          { title: '招聘用户', key: '0-0-0-1' },
        ],
      },
      {
        title: '企业列表',
        key: '0-0-1',
        children: [
          { title: '列表', key: '0-0-1-0' },
          { title: '审核', key: '0-0-1-1' },
        ],
      },
      {
        title: '角色管理',
        key: '0-0-2',
      },
    ],
  },
  {
    title: '招聘管理',
    key: '0-1',
    children: [
      { title: '简历管理', key: '0-1-0-0' },
      { title: '职位管理', key: '0-1-0-1' },
      { title: '招聘会管理', key: '0-1-0-2' },
    ],
  },
  {
    title: '内容管理',
    key: '0-2',
  },
];
interface authListProp{
  authList: string[]|undefined,
  onChecked: (checkedKeysValue: any) => void
}

const AuthList = (props: authListProp) => {
  const {authList,onChecked} = props
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>(authList||[]);
  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>(authList||[]);
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);

  const onExpand = (expandedKeysValue: React.Key[]) => {
    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };

  const onCheck = (checkedKeysValue: any) => {
    setCheckedKeys(checkedKeysValue);
    onChecked(checkedKeysValue)
  };

  return (
    <Tree
      checkable
      onExpand={onExpand}
      expandedKeys={expandedKeys}
      autoExpandParent={autoExpandParent}
      onCheck={onCheck}
      checkedKeys={checkedKeys}
      selectedKeys={[]}
      treeData={treeData}
    />
  );
};
export default AuthList;
