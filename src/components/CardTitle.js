import {
  React,
  Col
} from '../libraries/libraries';

const CardTitle = (props) => {
  return (
    <Col xs={24} className='title-movie'>
      <h2>{props.title}</h2>
      {props.children}
    </Col>
  )
}

export default CardTitle;
