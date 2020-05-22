import React from 'react';

function NavMenuChildren(props) {
  return (
    <div className={props.classDeg ? 'navbar-menu-deg' : 'navbar-menu'}>
      <div className='container'>
        <div className='navbar-flex'>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default NavMenuChildren;
