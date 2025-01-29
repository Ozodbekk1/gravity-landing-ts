import { NavLink } from "react-router-dom"
import navLogo from "../assets/navLogo.svg"
const Navbar = (): JSX.Element => {
  return (
    <div className="flex justify-between items-center p-4 sm:px-8 md:px-12 sm:hidden md:flex">
      <NavLink to='/'><img src={navLogo} alt="Navbar Logo" /></NavLink>
      <NavLink to='/about'>About Us</NavLink>
      <NavLink to='/partners'>Partners</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
    </div>
  )
}

export default Navbar
