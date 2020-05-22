import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import images from '../../src/assets/images/gomu.png';
import NavMenuChildren from './NavMenuChildren';
import SearchMovies from './SearchMovies';

const MainNavbar = () => {
  return (
    <>
      <div className='main-navbar'>
        <div className='container'>
          <Row justify="space-between">
            <Col lg={18} md={12} sm={12} xs={24}>
              <Link to="/">
                <img src={images} alt="tes" />
              </Link>
            </Col>
            <Col lg={6} md={12} sm={12} xs={24}>
              <SearchMovies />
            </Col>
          </Row>
        </div>
      </div>

      <Row justify="start">
        <NavMenuChildren>
          <Link to="/">Home</Link>
          <Link to="/anime-list">Anime List</Link>
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
