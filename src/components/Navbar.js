import React from 'react';
import { Row, Col, Input } from 'antd';
import images from '../../src/assets/images/gomu.png';

const { Search } = Input;

const Navbar = () => {
  return (
    <>
      <div className='main-navbar'>
        <div className='container'>
          <Row justify="space-between">
            <Col span={18}>
              <img src={images} alt="tes" />
            </Col>
            <Col span={6}>
              <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{ width: 300 }}
              />
            </Col>
          </Row>
        </div>
      </div>

      <Row justify="start">
        <div className='navbar-menu'>
          <div className='container'>
            <div className='navbar-flex'>
              <span>Lorem, ipsum.</span>
              <span>Lorem, ipsum.</span>
              <span>Lorem, ipsum.</span>
              <span>Lorem, ipsum.</span>
              <span>Lorem, ipsum.</span>
              <span>Lorem, ipsum.</span>
            </div>
          </div>
        </div>
      </Row>
    </>
  )
}

export default Navbar;
