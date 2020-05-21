import React from 'react';
import MainNavbar from '../components/MainNavbar';
import MainFooter from '../components/MainFooter';

const Layout = (props) => {
  return (
    <div>
      <MainNavbar />
      {props.children}
      <MainFooter />
    </div>
  )
}

export default Layout;
