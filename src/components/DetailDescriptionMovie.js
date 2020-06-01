import {
  React,
  Col,
  Row,
  PropTypes,
} from '../libraries/libraries';

const DetailDescriptionMovie = (props) => {

  const { names } = props;

  return (
    <>
      <Col lg={14} className='spacing-50'>
        <Col span={24}>
          <h2 style={{ color: 'white' }}>{names}</h2>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dicta earum obcaecati accusamus quo nesciunt.</p>
        </Col>
        <Col span={24} className='wrap-genres'>
          <Row gutter={16}>
            <Col xs={12}>
              <small><span className='text-orange'><b>Genre</b></span> : Drama, Fantasy, Romance, Sci</small>
              <small><span className='text-orange'><b>Released</b></span> :  Jul 19, 2019</small>
              <small><span className='text-orange'><b>Episodes</b></span> : 1</small>
              <small><span className='text-orange'><b>Posted on</b></span> : April 26, 2020</small>
            </Col>
            <Col xs={12}>
              <small><span className='text-orange'><b>Status</b></span> : Completed</small>
              <small><span className='text-orange'><b>Studio</b></span> : CoMix Wave Films</small>
              <small><span className='text-orange'><b>Type</b></span> : Movie</small>
              <small><span className='text-orange'><b>Posted by</b></span> : admin</small>
              <small><span className='text-orange'><b>Updated on</b></span> : May 29, 2020</small>
            </Col>
          </Row>
        </Col>
      </Col>
      <Col lg={4} className='spacing-50'>
        <button className='button-rating'>Rating 8.5</button>
      </Col>
      <Col span={18} offset={6}>
        <h3 style={{ color: 'white' }}>Trailer Title</h3>
        <br />
        <iframe width="100%" height="315" src={`https://www.youtube.com/embed/oS2oWZjejIg`}></iframe>
      </Col>
    </>
  )
}

export default DetailDescriptionMovie;