import './ProfileImage.css'

const ProfileImage = (props) => {
  return (
    <>
    <img className='img-rounded' src={props.image} alt='Profile'/>
    </>
  )
}

export default ProfileImage