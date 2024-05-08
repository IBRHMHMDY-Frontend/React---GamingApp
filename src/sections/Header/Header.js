import './Header.css'
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import Profile from '../../assets/images/profile-header.jpg';
import { NavItem, NavItemDropDown, ProfileImage } from '../../components/index';
const Header = () => {
  return (
   <nav className="navbar navbar-expand-md navbar-dark header-height">
      <div className="container">
         <Link className="navbar-brand" to="/">
            <img src={logo} alt='LOGO'/>
         </Link>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
               <NavItem className="nav-item active">
                  <Link className="nav-link" to="/">Home</Link>
               </NavItem>
               <NavItem className="nav-item">
                  <Link className="nav-link" to="/browse">Browse</Link>

               </NavItem>
               <NavItemDropDown className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     Details
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                     <NavItem><Link className="dropdown-item" to="#">Fortinite</Link></NavItem>
                     <NavItem><Link className="dropdown-item" to="#">Call of Duty</Link></NavItem>
                  </ul>
               </NavItemDropDown>
               <NavItem className="nav-item">
                     <Link className="nav-link" to="#">Streams</Link>
               </NavItem>
               <NavItem className="nav-item ">
                     <Link className="nav-link profile" to="/profile">
                        <ProfileImage image={Profile} />
                        <span>Profile</span>
                     </Link>
               </NavItem>
            </ul>
         </div>
      </div>
   </nav>

  )
}

export default Header