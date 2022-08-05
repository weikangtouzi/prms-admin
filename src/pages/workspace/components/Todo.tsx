import { Row, Col, Statistic, Card } from 'antd';
const gridStyle = {
  width: '20%',
};
import { history } from 'umi'

const ToDo = ({ data })=>{
  return <Row style={{marginBottom:'24px'}}>
    <Col span={24}>
      <Card title="待办事项">
        <Card.Grid  style={gridStyle}>
          <Row>
            <Col span={9}>
              <img src='/workspace/tip.svg' alt='icon' style={{width:'50px'}}/>
            </Col>
            <Col span={15}>
              <Statistic title="发票申请" value={0} />
            </Col>
          </Row>
        </Card.Grid>
        <Card.Grid  style={gridStyle}>
          <Row>
            <Col span={9}>
              <img src='/workspace/cash.svg' alt='icon' style={{width:'55px'}}/>
            </Col>
            <Col span={15}>
              <Statistic title="提现管理" value={0} />
            </Col>
          </Row>
        </Card.Grid>
        <Card.Grid  style={gridStyle} onClick={() => {
        	history.push('/userManage/enterpriseList/companyAudit')
        }}>
          <Row>
            <Col span={9}>
              <img src='/workspace/check.svg' alt='icon' style={{width:'48px'}}/>
            </Col>
            <Col span={15}>
              <Statistic title="审核" value={data?.censors ?? 0} />
            </Col>
          </Row>
        </Card.Grid>
        <Card.Grid  style={gridStyle}>
          <Row>
            <Col span={9}>
              <img src='/workspace/jubao.svg' alt='icon' style={{width:'50px'}}/>
            </Col>
            <Col span={15}>
              <Statistic title="举报信息" value={0} />
            </Col>
          </Row>
        </Card.Grid>
        <Card.Grid  style={gridStyle}>
          <Row>
            <Col span={9}>
              <img src='/workspace/feedback.svg' alt='icon' style={{width:'52px'}}/>
            </Col>
            <Col span={15}>
              <Statistic title="反馈信息" value={0} />
            </Col>
          </Row>
        </Card.Grid>
      </Card>
    </Col>
  </Row>
}

export default ToDo;
