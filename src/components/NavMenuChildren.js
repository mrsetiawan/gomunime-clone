import React from 'react';

function NavMenuChildren(props) {
  return (
    <div className='navbar-menu'>
      <div className='container'>
        <div className='navbar-flex'>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default NavMenuChildren;
