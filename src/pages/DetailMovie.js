import {
  React,
  Col,
  Row,
  Button,
  useEffect,
  PlayCircleOutlined,
  PropTypes,
} from '../libraries/libraries';
import Layout from './Layout';
import BannerImage from '../assets/images/footer.jpg';

const DetailMovie = (props) => {

  const { location } = props;
  const { image, link } = location

  useEffect(() => {
    console.log(link)
  }, [])

  return (
    <Layout>
      <Col span={24} className='detail-banner'>
        <h1><PlayCircleOutlined /></h1>
        <img src={image} alt="img-banner" />
      </Col>
      <div className="container">
        <Row gutter={[16, 16]}>
          <Col lg={16} xs={24}>
            <Row gutter={16} justify="space-between" align="top">
              <Col lg={6} className='detail-description'>
                <img src={image} alt="img-banner" />
              </Col>
              <Col lg={14} className='spacing-50'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dicta earum obcaecati accusamus quo nesciunt.
              </Col>
              <Col lg={4} className='spacing-50'>
                <button className='button-rating'>Rating 8.5</button>
              </Col>
            </Row>
          </Col>
          <Col lg={8} xs={24} className='spacing-50' style={{paddingTop: '0 !important'}}>
            <Col span={24}>
              <Row gutter={16}>
                <Col lg={8} className='detail-episode'>
                  <p><PlayCircleOutlined /></p>
                  <img src={image} alt="img-banner" width='100%' style={{objectFit: 'cover',borderRadius: '10px',width: '100%',height: '50%',objectPosition: '50% 2%'}}/>
                </Col>
                <Col lg={16}>
                  <small><b>Episode 1</b></small>
                </Col>
              </Row>
            </Col>
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

DetailMovie.propTypes = {
  image: PropTypes.string,
  link: PropTypes.string
}

DetailMovie.defaultProps = {
  image: BannerImage,
  link: 'ini link'
};

export default DetailMovie;
