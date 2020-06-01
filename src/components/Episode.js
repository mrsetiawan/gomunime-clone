import {
  React,
  Col,
  Row,
  PropTypes,
  PlayCircleOutlined,
} from '../libraries/libraries';

const Episode = (props) => {

  const { image } = props;

  return (
    <Col span={24} className='detail-episode-wrapper'>
      <Row gutter={[16, 16]}>
        <Col lg={8} className='detail-episode'>
          <p><PlayCircleOutlined /></p>
          <img src={image} alt="img-banner" />
        </Col>
        <Col lg={16}>
          <p><b>Episode 1</b></p>
          <p>Lorem, ipsum dolor.</p>
        </Col>
      </Row>
    </Col>
  )
}

export default Episode