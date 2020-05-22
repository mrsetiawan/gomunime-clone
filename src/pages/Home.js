import React from 'react';
import Layout from './Layout';
import CardMovie from '../components/CardMovie';
import { Col, Row } from 'antd';
import imgThumbnail from '../assets/images/thumbnaiil.jpg';

const Home = () => {

  return (
    <Layout>
      <div className="container">
        <Row>
          <Col className='px-15' lg={18} xs={24}>
            <CardMovie />
          </Col>
          <Col lg={6} xs={24}>
            <div style={{ padding: '9px', background: 'white' }}>
              <Col className='list-right-sidebar' span={24}>
                <Row>
                  <Col xs={3}>
                    1
                  </Col>
                  <Col xs={5}>
                    <img src={imgThumbnail} alt="img-left" />
                  </Col>
                  <Col xs={16}>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem, ipsum dolor.</p>
                  </Col>
                </Row>
              </Col>
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

export default Home;
