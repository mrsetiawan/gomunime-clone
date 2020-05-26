import { React } from '../libraries/libraries';
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

      <div className='footer-wrap' style={footerWrap}>
        <div className='footer-bg'>
          <div className='container'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, harum.</p>
            <div span={18} className='order-by-alphabet' style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', alignItems:'top'}}>
              <div>1</div>
              <div>1</div>
              <div>1</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainFooter;
