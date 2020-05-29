import {
  React,
  Card,
  Link,
  LazyLoadImage,
  trackWindowScroll

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
      <Card.Grid className="card-grid-custome" key={list.images}>
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
          <div className='card-desc-bottom'>
            <small>{list.names.substring(0, 20)}</small>
          </div>
        </Link>
      </Card.Grid>
    )
  })

  return (
    <>
      <CardTitle title={title}>
        {items}
      </CardTitle>
    </>
  )

}

export default trackWindowScroll(CardMovie);
