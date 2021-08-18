import React from 'react';
import { Input,Button } from 'antd';
const { TextArea } = Input;
import styles from '../index.less'

const PrivacyAgreement = ()=>{
  return <div className={styles.editContainer}>
    <TextArea showCount maxLength={500} className={styles.textArea}/>
    <div className={styles.footer}>
      <Button type={'primary'}>确定</Button>
    </div>
  </div>
}

export default PrivacyAgreement;
