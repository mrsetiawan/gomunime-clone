import {
  React,
  Col,
  Row,
  connect,
  useEffect,
  PlayCircleOutlined,
  PropTypes,
} from '../libraries/libraries';
import { fetchHotSeries } from '../services/action';
import Layout from './Layout';
import BannerImage from '../assets/images/footer.jpg';
import CardListSlider from '../components/CardListSlider';

const DetailMovie = (props) => {

  const {
    location,
    fetchHotSeries,
    listHotSeries
  } = props;

  const {
    image,
    link,
    names
  } = location

  useEffect(() => {
    if (listHotSeries.dataHotSeries.length < 1) {
      fetchHotSeries();
    }
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
                <Col span={24}>
                  <h2 style={{ color: 'white' }}>{names}</h2>
                  <br />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dicta earum obcaecati accusamus quo nesciunt.</p>
                </Col>
                <Col span={24} className='wrap-genres'>
                  <Row gutter={16}>
                    <Col xs={12}>
                      <small><span className='text-orange'><b>Genre</b></span> : Drama, Fantasy, Romance, Sci</small>
                      <small><span className='text-orange'><b>Released</b></span> :  Jul 19, 2019</small>
                      <small><span className='text-orange'><b>Episodes</b></span> : 1</small>
                      <small><span className='text-orange'><b>Posted on</b></span> : April 26, 2020</small>
                    </Col>
                    <Col xs={12}>
                      <small><span className='text-orange'><b>Status</b></span> : Completed</small>
                      <small><span className='text-orange'><b>Studio</b></span> : CoMix Wave Films</small>
                      <small><span className='text-orange'><b>Type</b></span> : Movie</small>
                      <small><span className='text-orange'><b>Posted by</b></span> : admin</small>
                      <small><span className='text-orange'><b>Updated on</b></span> : May 29, 2020</small>
                    </Col>
                  </Row>
                </Col>
              </Col>
              <Col lg={4} className='spacing-50'>
                <button className='button-rating'>Rating 8.5</button>
              </Col>
              <Col span={18} offset={6}>
                <h3 style={{ color: 'white' }}>Trailer Title</h3>
                <br />
                <iframe width="100%" height="315" src={`https://www.youtube.com/embed/oS2oWZjejIg`}></iframe>
              </Col>
            </Row>
          </Col>
          <Col lg={8} xs={24} className='p-0 spacing-50'>
            <Row type="flex" justify="end">
              <Col span={20}>
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
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <CardListSlider
              listMovies={listHotSeries.dataHotSeries}
              title='Recomended Series'
            />
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

const mapStateToProps = (state) => ({
  listHotSeries: state.listHotSeries
})

const mapDispatchToProps = {
  fetchHotSeries
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailMovie);
