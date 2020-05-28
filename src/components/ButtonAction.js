import {
  React,
  Button
} from '../libraries/libraries';

const ButtonAction = (props) => {
  return (
    <Button 
      type={props.type} 
      shape={props.shape} 
      size={props.size} 
      className={props.float}
      >
      {props.children}
    </Button>
  )
}

export default ButtonAction;
