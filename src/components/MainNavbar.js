import {
  React,
  Row,
  Col,
  Link,
} from '../libraries/libraries';
import images from '../../src/assets/images/gomu.png';
import NavMenuChildren from './NavMenuChildren';
import SearchMovies from './SearchMovies';
// import LineGradient from './LineGradient';

const MainNavbar = () => {
  return (
    <>
    <div className='main-navbar'>
      <div className='container'>
        <Row>
          <Col lg={14}>
            <NavMenuChildren>
              <Link to="/">
                <h1>Logo</h1>
              </Link>
              <Link to="/"><span>Home</span></Link>
              <Link to="/anime-list">Anime List</Link>
              <span>Movie List</span>
              <span>Live Action</span>
              <span>Live Action</span>
              <span>Completed</span>
              <span>OnGoing</span>
              <span>Anime Episode Terbaru</span>
            </NavMenuChildren>
          </Col>
          <Col lg={10}>
            {/* <SearchMovies /> */}
          </Col>
        </Row>
      </div>
      {/* <LineGradient classTop='footer-line-top' /> */}
    </div>
  </>
  )
}

export default MainNavbar;
