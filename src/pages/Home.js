import React from 'react';
import Layout from './Layout';
import CardMovie from '../components/CardMovie';
import { Col, Row } from 'antd';
import CardMoviesSidebar from '../components/CardMoviesSidebar';

const Home = () => {

  return (
    <Layout>
      <div className="container">
        <Row>
          <Col lg={18} sm={12} xs={24} className='px-15' >
            <CardMovie />
            <CardMovie />
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <CardMoviesSidebar />
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

export default Home;
