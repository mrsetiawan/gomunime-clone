import {
  React,
  Col,
  Row,
  useEffect,
} from '../libraries/libraries';
import Layout from './Layout';
import CardMoviesSidebar from '../components/CardMoviesSidebar';

const DetailMovie = ({ location }) => {

  useEffect(() => {
    console.log(location.link)
  }, [])

  return (
    <Layout>
      <div className="container">
        <Row>
          <Col lg={18} sm={12} xs={24} className='px-15'>
            <p>{location.link}</p>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            {/* <CardMoviesSidebar /> */}
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

export default DetailMovie;
