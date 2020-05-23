import React from 'react';
import { Col, Row } from 'antd';
import imgThumbnailSidebar from '../assets/images/footerimg.jpg';

const ListCardSidebarTop = (props) => {

  const elementWrapper = {
    background: `url(${imgThumbnailSidebar})`,
    width: '100%',
    height: '180px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }

  const elementChild = {
    background: '#5c6ece82',
    width: '100%',
    height: '100px',
    padding: '10px',
    color: 'white',
    zIndex: '1',
    position: 'absolute',
    bottom: '0'
  }

  return (
    <Col span={24} style={elementWrapper}>
      <div style={elementChild}>
        <Row>
          <Col xs={3} className='list-rating'>
            <p>1</p>
          </Col>
          <Col xs={5} className='list-image'>
            <img src={imgThumbnailSidebar} alt="img-left" />
          </Col>
          <Col xs={15} className='list-desc'>
            <p>Lorem, ipsum.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing.</p>
            <p>Lorem, ipsum dolor.</p>
          </Col>
        </Row>
      </div>
    </Col>
  )
}

export default ListCardSidebarTop;
