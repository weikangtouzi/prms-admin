import { Card, Radio, Typography } from 'antd';
import styles from '../index.less';
import { Line } from '@ant-design/charts';
import numeral from 'numeral';
import type { DonutConfig } from '@ant-design/charts/es/donut';
import { useState } from 'react';

type SalesType = 'online' | 'stores';

const { Text } = Typography;
const data = [
  { year: '1991', value: 3 },
  { year: '1992', value: 4 },
  { year: '1993', value: 3.5 },
  { year: '1994', value: 5 },
  { year: '1995', value: 4.9 },
  { year: '1996', value: 6 },
  { year: '1997', value: 7 },
  { year: '1998', value: 9 },
  { year: '1999', value: 13 },
];
const UserGrow = () => {
  const [salesType] = useState<SalesType>('online');
  return <Card
    className={styles.salesCard}
    bordered={false}
    title='用户增长'
    style={{
      height: '100%',
    }}
    extra={
      <div className={styles.salesCardExtra}>
        <div className={styles.salesTypeRadio}>
          <Radio.Group value={salesType} onChange={() => {
          }}>
            <Radio.Button value='online'>本周</Radio.Button>
            <Radio.Button value='stores'>本月</Radio.Button>
          </Radio.Group>
        </div>
      </div>
    }
  >
    <div>
      <Text>本月新用户数：2000人，本周新用户数：1000人</Text>
      <Line
        forceFit
        height={320}
        xField='year'
        yField='value'
        data={data}
        meta={{
        year: { alias: '年份' },
        value: { alias: '人数' },
        }}
        point={{
          size: 5,
          shape: 'diamond',
        }}
      />
    </div>
  </Card>;
};

export default UserGrow;