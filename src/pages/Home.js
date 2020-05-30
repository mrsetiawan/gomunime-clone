import {
  React,
  Col,
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
    if (listHotSeries.dataHotSeries.length < 1 && listLatestRelease.dataLatestRelease.length < 1) {
      dispatch(fetchHotSeries());
      dispatch(fetchLatesRelease());
    }
  }, [dispatch]);

  const hotSeries = listHotSeries.loading ? <div>loading...</div> : <CardMovie
    listMovies={listHotSeries.dataHotSeries}
    title='Hot series'
  />

  const latesRelease = listLatestRelease.loading ? <div>loading...</div> : <CardMovie
    listMovies={listLatestRelease.dataLatestRelease}
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

export default Home;
