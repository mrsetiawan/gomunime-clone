import { React } from '../libraries/libraries';

function NavMenuChildren(props) {
  return (
    <div className='navbar-flex'>
      {props.children}
    </div>
  )
}

export default NavMenuChildren;
