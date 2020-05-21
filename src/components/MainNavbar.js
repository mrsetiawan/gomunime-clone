import React from 'react';
import { Row, Col, Input } from 'antd';
import images from '../../src/assets/images/gomu.png';
import NavMenuChildren from './NavMenuChildren';
const { Search } = Input;

const MainNavbar = () => {
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
        <NavMenuChildren>
          <span>Home</span>
          <span>Anime List</span>
          <span>Movie List</span>
          <span>Tv Series</span>
          <span>Live Action</span>
          <span>Completed</span>
          <span>OnGoing</span>
          <span>Anime Episode Terbaru</span>  
        </NavMenuChildren>
      </Row>
    </>
  )
}

export default MainNavbar;
