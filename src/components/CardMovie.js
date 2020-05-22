import React from 'react';
import { Card } from 'antd';
import imgThumbnail from '../assets/images/thumbnaiil.jpg';
import CardTitle from './CardTitle';

const CardMovie = (props) => {

  const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => {
    return (
      <Card.Grid key={item} className="card-grid-custome">
        <img src={imgThumbnail} alt="img-thumbnail" />
        <div className='card-description'>
          <div className='card-desc-left'>
            <small>On going</small>
          </div>
          <div className='card-desc-right'>
            <small>Live Action</small>
          </div>
        </div>
        <div className='card-desc-bottom'>
          <small>Lorem ipsum dolor sit amet consectetur?</small>
        </div>
      </Card.Grid>
    )
  })

  return (
    <>
      <CardTitle title='Hot Series Update'>
        {items}
      </CardTitle>
    </>
  )

}

export default CardMovie;
