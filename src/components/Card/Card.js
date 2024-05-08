import './Card.css';
import {FaStar,FaDownload} from 'react-icons/fa6';
const Card = (props) => {
  return (
   <div className="most-popular-item">
      <div className="card-wrapper">
      <img className='most-popular-image' src={props.image} alt="Popular_01" />
      <div className="most-popular-content">
         <h4 className='most-popular-title'>
            <span>{props.title}</span>
            <span>{props.category}</span>
         </h4>
         <ul>
            <li>
               <span className='star-icon'><FaStar/></span>
               <span>{props.rate}</span>
            </li>
            <li><span className='download-icon'><FaDownload/></span><span>{props.download}</span></li>
         </ul>
      </div>
      </div>
   </div>
  )
}

export default Card