import './Hero.css'
import {ButtonPrimary} from '../../components/index'

const Hero = () => {
  return (
    <div className='hero-main'>
      <div className='hero-content'>
         <h6 className='hero-subtitle'>Welcome To Cyborg</h6>
         <h1 className='hero-title'><em>BROWSE</em> OUR POPULAR GAMES HERE</h1>
         <ButtonPrimary URL="browse.html" text="Browse Now" />
      </div>
    </div>
  )
}

export default Hero