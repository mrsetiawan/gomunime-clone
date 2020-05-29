import {
  React,
  Col,
  Row,
  connect,
  useEffect,
  useDispatch
} from '../libraries/libraries';
import {
  fetchHotSeries,
  fetchLatesRelease
} from '../services/action';
import Layout from './Layout';
import CardMovie from '../components/CardMovie';
import CardMoviesSidebar from '../components/CardMoviesSidebar';

const Home = (props) => {

  const { listHotSeries, listLatestRelease } = props
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHotSeries());
    dispatch(fetchLatesRelease());
  }, [dispatch]);

  return (
    <Layout>
      <div className="container">
        <Row>
          <Col lg={18} sm={12} xs={24} className='pr-15'>
            <CardMovie
              listMovies={listHotSeries}
              title='Hot series'
            />
            <CardMovie
              listMovies={listLatestRelease}
              title='Latest Release'
            />
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
  listHotSeries: state.listHotSeries.dataHotSeries,
  listLatestRelease: state.listLatesRelease.dataLatestRelease
})

export default connect(mapStateToProps, null)(Home);
