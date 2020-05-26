import {
  React,
  Card
} from '../libraries/libraries';

const CardTitle = (props) => {
  return (
    <Card title={props.title}>
      {props.children}
    </Card>
  )
}

export default CardTitle;
