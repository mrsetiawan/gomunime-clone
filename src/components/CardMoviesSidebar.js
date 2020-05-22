import React from 'react';
import { Col, Row } from 'antd';
import imgThumbnail from '../assets/images/thumbnaiil.jpg';
import imgThumbnailSidebar from '../assets/images/footerimg.jpg';

const CardMoviesSidebar = () => {

  const item = [0, 1, 2, 3, 4, 5, 6].map(res => {
    return (
      <div className='list-right-sidebar' key={res}>
        <Col span={24}>
          <Row>
            <Col xs={3} className='list-rating'>
              <p>{res + 1}</p>
            </Col>
            <Col xs={5} className='list-image'>
              <img src={imgThumbnail} alt="img-left" />
            </Col>
            <Col xs={15} className='list-desc'>
              <p>Lorem, ipsum.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing.</p>
              <p>Lorem, ipsum dolor.</p>
            </Col>
          </Row>
        </Col>
      </div>
    )
  });

  const imageTop = {
    background: `url(${imgThumbnailSidebar})`, 
    width: '100%', 
    height: '200px', 
    backgroundRepeat: 'no-repeat', 
    backgroundSize: 'cover',
  }

  return (
    <>
      <Col span={24} style={imageTop}>
        <div style={{ background: '#5c6ece82', height: '111px', padding: '10px', color: 'white', zIndex: '1' }}>
          <Row>
            <Col xs={3} className='list-rating'>
              <p>1</p>
            </Col>
            <Col xs={5} className='list-image'>
              <img src={imgThumbnail} alt="img-left" />
            </Col>
            <Col xs={15} className='list-desc'>
              <p>Lorem, ipsum.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing.</p>
              <p>Lorem, ipsum dolor.</p>
            </Col>
          </Row>
        </div>
      </Col>
      {item}
    </>
  )
}

export default CardMoviesSidebar;
