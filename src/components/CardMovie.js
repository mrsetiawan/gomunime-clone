import {
  React,
  Link,
  Col,
  Row,
  LazyLoadImage,
  trackWindowScroll,
  PlayCircleOutlined

} from '../libraries/libraries.js';
import imgThumbnail from '../assets/images/thumbnaiil.jpg';
import CardTitle from './CardTitle';

const CardMovie = (props) => {

  const {
    listMovies,
    title,
    scrollPosition
  } = props

  const items = listMovies.map(list => {
    return (
      <Col lg={4} md={4} sm={6} xs={24} key={list.images}>
        <div className="card-grid-custome">
          <Link to={{
            pathname: `/detail-movie/${list.names}`,
            link: list.link,
            image: list.images
          }}>
            <LazyLoadImage
              alt={list.name}
              scrollPosition={scrollPosition}
              src={list.images}
              visibleByDefault={list.images.src === imgThumbnail}
            />
            <div className='card-wrapper'>
              <div className='card-main'>
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

  return (
    <>
      <CardTitle title={title}>
        <Row style={{ marginBottom: '35px' }}>
          {items}
        </Row>
      </CardTitle>
    </>
  )

}

export default trackWindowScroll(CardMovie);
