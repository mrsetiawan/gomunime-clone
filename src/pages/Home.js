import {
  React,
  Col,
  useEffect
} from '../libraries/libraries';

import Layout from './Layout';
import CardMovie from '../components/CardMovie';

const Home = (props) => {

  const {
    listHotSeries,
    listLatestRelease,
    fetchHotSeries,
    fetchLatesRelease
  } = props

  useEffect(() => {
    if (listHotSeries.dataHotSeries.length < 1 && listLatestRelease.dataLatestRelease.length < 1) {
      fetchHotSeries();
      fetchLatesRelease();
    }
  }, []);

  const hotSeries = listHotSeries.loading ?
    <div>loading...</div> :
    <CardMovie
      listMovies={listHotSeries.dataHotSeries}
      title='Hot series'
    />

  const latesRelease = listLatestRelease.loading ?
    <div>loading...</div> :
    <CardMovie
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
