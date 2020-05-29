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

const Home = (props) => {

  const { listHotSeries, listLatestRelease } = props
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHotSeries());
    dispatch(fetchLatesRelease());
  }, [dispatch]);

  const hotSeries = listHotSeries.loading ? <div>loading...</div> : <CardMovie
    listMovies={listHotSeries.dataHotSeries}
    title='Hot series'
  />

  const latesRelease = <CardMovie
    listMovies={listLatestRelease}
    title='Latest Release'
  />
  return (
    <Layout>
      <div className="container">
        <Col lg={24} sm={12} xs={24}>
          {hotSeries}
          {latesRelease}
        </Col>
      </div>
    </Layout>
  )
}

const mapStateToProps = (state) => ({
  listHotSeries: state.listHotSeries,
  listLatestRelease: state.listLatesRelease.dataLatestRelease
})

export default connect(mapStateToProps, null)(Home);
