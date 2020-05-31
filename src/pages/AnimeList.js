import { 
  React,
  Col,
  Row
} from '../libraries/libraries';
import Layout from './Layout';
import SearchAnime from '../components/SearchAnime';

const AnimeList = () => {
  return (
    <Layout>
      <div className="container">
        <Row>
          <Col lg={24} sm={12} xs={24} className='pr-15' >
            <SearchAnime />
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

export default AnimeList;
