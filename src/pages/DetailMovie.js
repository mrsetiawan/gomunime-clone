import {
  React,
  Col,
  Row,
  useEffect,
  PlayCircleOutlined,
  PropTypes,
} from '../libraries/libraries';

import Layout from './Layout';
import BannerImage from '../assets/images/footer.jpg';

import DetailDescriptionMovie from '../components/DetailDescriptionMovie';
import Episode from '../components/Episode';
import CardRecommendedSeries from '../containers/RecommendedSeries';

const DetailMovie = (props) => {

  const { location } = props;

  const {
    image,
    link,
    names
  } = location

  useEffect(() => {
   
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
              <DetailDescriptionMovie names={names} />
            </Row>
          </Col>
          <Col lg={8} xs={24} className='p-0 spacing-50'>
            <Row type="flex" justify="end">
              <Col span={20}>
                <Episode 
                  image={image} 
                />
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <CardRecommendedSeries />
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
