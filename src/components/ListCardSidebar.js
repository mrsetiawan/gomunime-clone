import { 
  React,
  Col,
  Row,
  LazyLoadImage,
  trackWindowScroll
} from '../libraries/libraries';
import imgThumbnail from '../assets/images/thumbnaiil.jpg';

const ListCardSidebar = (props) => {

  const { scrollPosition } = props;
  return (
    <div className='list-right-sidebar'>
      <Col span={24}>
        <Row>
          <Col xs={3} className='list-rating'>
            <p>1</p>
          </Col>
          <Col xs={5} className='list-image'>
            <LazyLoadImage
              alt='image-sidebar-right'
              scrollPosition={scrollPosition}
              src={imgThumbnail}
              visibleByDefault={imgThumbnail}
            />
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
}

export default trackWindowScroll(ListCardSidebar);
