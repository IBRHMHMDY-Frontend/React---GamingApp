import './Lists.css'
import { ButtonSecondary} from '../index'
const Lists = (props) => {
  return (
    <div className="gaming-library-card">
      <ul>
        <li>
          <img src={props.image} alt="Gaming_01" />
        </li>
        <li>
          <h4>{props.title}</h4>
          <span>{props.category}</span>
        </li>
        <li>
          <h4>Date Added</h4>
          <span>{props.dateAdded}</span>
        </li>
        <li>
          <h4>Hours Played</h4>
          <span>{props.HoursPlayed}</span>
        </li>
        <li>
          <h4>Currently</h4>
          <span>{props.currently}</span>
        </li>
        <ButtonSecondary URL="/#" text="Download"/>
      </ul>
    </div>
  )
}

export default Lists