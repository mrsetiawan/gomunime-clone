import {
  React,
} from '../libraries/libraries';

const LineGradient = (props) => {
  return (
    <div className={props.classTop ? 'footer-line-top' : 'footer-line-bottom'} />
  )
}

export default LineGradient;
