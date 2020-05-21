import React from 'react';
import Layout from './Layout';
import CardMovie from '../components/CardMovie';
import { Col, Row } from 'antd';

const Home = () => {

  return (
    <Layout>
      <div className="container">
        <Row>
          <Col lg={18} xs={24}>
            <CardMovie />
          </Col>
          <Col lg={6} xs={24}>
            <p>right</p>
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

export default Home;
