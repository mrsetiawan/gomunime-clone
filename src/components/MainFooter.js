import React from 'react';
import NavMenuChildren from './NavMenuChildren';
import imgThumbnailSidebar from '../assets/images/footerimg.jpg';

const MainFooter = (props) => {

  const footerWrap = {
    backgroundImage: `url(${imgThumbnailSidebar})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: 'auto',
    color: 'white'
  }

  const footerBg = {
    background: 'rgba(3, 12, 60, 0.76)',
    width: '100%',
    height: 'auto',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '15px'
    
  }

  return (
    <>
      <NavMenuChildren classDeg='navbar-menu-deg'>
        <span>Earnings Disclaimer</span>
        <span>Terms of Use</span>
        <span>Anime Episode Terbaru</span>
        <span>AnimeIndo</span>
        <span>Nanime</span>
        <span>Animeku</span>
        <span>RiiE</span>
        <span>Oploverz</span>
        <span>Anoboy</span>
        <span>Neonime</span>
        <span>Animenonton TV</span>
        <span>Mangaku</span>
      </NavMenuChildren>

      <div className='footer' style={footerWrap}>
        <div style={footerBg}>
          <div className='container'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, harum.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainFooter;
