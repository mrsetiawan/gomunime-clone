import {
  React,
  Link,
  Col,
  LazyLoadImage,
  trackWindowScroll,
  PlayCircleOutlined,
} from '../libraries/libraries.js';
import imgThumbnail from '../assets/images/thumbnaiil.jpg';
import CardTitle from './CardTitle';
import Slider from "react-slick";

class CardListSlider extends React.Component {

  render() {

    const {
      listMovies,
      title,
      scrollPosition
    } = this.props
    
    const items = listMovies.map(list => {
      return (
        <Col lg={24} md={4} sm={6} xs={24} key={list.images}>
          <div className="card-grid-custome-slider">
            <Link to={{
              pathname: `/detail-movie/${list.names}`,
              link: list.link,
              image: list.images,
              names: list.names
            }}>
              <LazyLoadImage
                alt={list.name}
                scrollPosition={scrollPosition}
                src={list.images}
                visibleByDefault={list.images.src === imgThumbnail}
              />
              <div className='card-wrapper-slider'>
                <div className='card-main-slider'>
                  <div>
                    <h1>
                      <PlayCircleOutlined style={{ color: 'white', fontSize: '60px' }} />
                    </h1>
                    <p>{list.names}</p>
                  </div>
                  <div>
                    <small>{list.status}</small>
                    <small>{list.type_anime}</small>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </Col>
      )
    })

    const settings = {
      dots: false,
      infinite: true,
      speed: 200,
      slidesToShow: 6,
      slidesToScroll: 1
    };

    return (
      <>
        <CardTitle title={title}>
          <Slider {...settings}>
            {items}
          </Slider>
        </CardTitle>
      </>
    )

  }
}

export default trackWindowScroll(CardListSlider);
