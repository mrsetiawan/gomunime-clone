import {
  React,
  Card
} from '../libraries/libraries';

const CardTitle = (props) => {
  return (
    <Card title={props.title} style={{width: '100%'}}>
      {props.children}
    </Card>
  )
}

export default CardTitle;
