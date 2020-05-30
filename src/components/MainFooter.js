import { React } from '../libraries/libraries';
import imgThumbnailSidebar from '../assets/images/footer.jpg';

const MainFooter = (props) => {

  const footerWrap = {
    backgroundImage: `url(${imgThumbnailSidebar})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: 'auto',
    color: 'white',
    opacity: '1'
  }

  return (
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
  )
}

export default MainFooter;
