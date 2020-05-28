import {
  React,
  Col,
  Row,
  connect,
  useEffect
} from '../libraries/libraries';
import Layout from './Layout';
import CardMovie from '../components/CardMovie';
import CardMoviesSidebar from '../components/CardMoviesSidebar';
import { fetchMovieList } from '../services/action';

const Home = ({ listMovies, dispatch }) => {

  useEffect(() => {
    dispatch(fetchMovieList())
  }, []);

  return (
    <Layout>
      <div className="container">
        <Row>
          <Col lg={18} sm={12} xs={24} className='pr-15'>
            <CardMovie listMovies={listMovies} />
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <CardMoviesSidebar />
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

const mapStateToProps = (state) => ({
  listMovies: state.listMovies.dataMovie
})

export default connect(mapStateToProps, null)(Home);
