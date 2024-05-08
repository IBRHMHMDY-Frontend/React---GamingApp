import './Navtem.css'
const NavItem = (props) => {
   return (
      <li className="nav-item active">
         {props.children}
      </li>
   )
}

const NavItemDropDown = (props) => {
   return(
      <li className="nav-item dropdown">
         {props.children}            
      </li>
   )
}

export default NavItem;
export {NavItemDropDown}
