import './Buttons.css'

const ButtonPrimary = (props) => {
  return (
   <div className='button-link button-link-primary '>
      <a href={props.URL}>{props.text}</a>
   </div>
  )
}

const ButtonSecondary = (props) => {
  return (
   <div className='button-link button-link-secondary'>
      <a href={props.URL}>{props.text}</a>
   </div>
  )
}
const ButtonFloat = (props) => {
  return (
   <div className='button-link button-link-primary button-float'>
      <a href={props.URL}>{props.text}</a>
   </div>
  )
}

export default ButtonPrimary
export {ButtonSecondary, ButtonFloat}