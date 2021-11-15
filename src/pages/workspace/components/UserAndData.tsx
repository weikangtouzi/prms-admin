import { Row, Col, Statistic, Card } from 'antd';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 12,
  style: { marginBottom: 24 },
};
const gridStyle = {
  width: '33.33%',
};

const UserAndData = ()=>{
  return <Row gutter={24}>
    <Col {...topColResponsiveProps}>
      <Card title="用户数">
        <Card.Grid hoverable={false} style={gridStyle}>
          <Statistic title="总用户数" value={112893} />
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          <Statistic title="个人" value={112893} />
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          <Statistic title="企业" value={112893} />
        </Card.Grid>
      </Card>
    </Col>
    <Col {...topColResponsiveProps}>
      <Card title="数据统计">
        <Card.Grid hoverable={false} style={gridStyle}>
          <Statistic title="职位数" value={112893} />
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          <Statistic title="课程数" value={112893} />
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          <Statistic title="项目数" value={112893} />
        </Card.Grid>
      </Card>
    </Col>
  </Row>
}

export default UserAndData;
