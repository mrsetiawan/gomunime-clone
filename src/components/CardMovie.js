import {
  React,
  Link,
  LazyLoadImage,
  trackWindowScroll,
  Col,
  Row

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
      <Col span={4} key={list.images}>
        <div className="card-grid-custome">
          <Link to={`/detail-movie/${list.link}`} >
            <LazyLoadImage
              alt={list.name}
              scrollPosition={scrollPosition}
              src={list.images}
              visibleByDefault={list.images.src === imgThumbnail}
            />
            <div className='card-description'>
              <div className='card-desc-left'>
                <small>{list.status}</small>
              </div>
              <div className='card-desc-right'>
                <small>{list.type_anime}</small>
              </div>
            </div>
            {/* <div className='card-desc-bottom'>
            <small>{list.names.substring(0, 20)}</small>
          </div> */}
            {/* <div className='card-grid-custom-hoverable'>
          </div> */}
          </Link>
        </div>
      </Col>
    )
  })

  return (
    <>
      <CardTitle title={title}>
        <Row style={{marginBottom: '35px'}}>
          {items}
        </Row>
      </CardTitle>
    </>
  )

}

export default trackWindowScroll(CardMovie);
