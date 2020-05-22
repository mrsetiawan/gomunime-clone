import React from 'react';
import { Card } from 'antd';

const CardTitle = (props) => {
  return (
    <Card title={props.title}>
      {props.children}
    </Card>
  )
}

export default CardTitle;
