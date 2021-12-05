import { ProFormDateRangePicker, ProFormSelect, QueryFilter } from '@ant-design/pro-form';
import { Card, Typography } from 'antd';
import { Line } from '@ant-design/charts';
const { Text } = Typography;
const data = [
  { year: '05-01', value: 3 },
  { year: '05-03', value: 4 },
  { year: '05-05', value: 3.5 },
  { year: '05-07', value: 5 },
  { year: '05-09', value: 4.9 },
  { year: '05-11', value: 6 },
  { year: '05-13', value: 7 },
  { year: '05-15', value: 9 },
  { year: '05-17', value: 13 },
];
const statistic = () => {
  return <div>
    <Card bodyStyle={{paddingBottom:0}}>
      <QueryFilter<{
        tradeTime: string[];
        incomeType: string;
      }>
        onFinish={async (values) => {
          console.log(values.tradeTime);
        }}
      >
        <ProFormDateRangePicker name="tradeTime" label="交易时间" />
        <ProFormSelect
          name="incomeType"
          label="收入类型"
          valueEnum={{
            0: '全部',
            1: '充值',
            2: '刷新',
            3: '置顶',
          }}
        />
      </QueryFilter>
    </Card>
    <Card style={{marginTop:'16px'}}>
      <Text>本月收入：2000元，本周收入：1000元</Text>
      <Line
        forceFit
        height={320}
        xField="year"
        yField="value"
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
    </Card>
  </div>;
};

export default statistic;
