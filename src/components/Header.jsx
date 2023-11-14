import { Link } from "react-router-dom"
import logo from '../Images/Logo.png'

export const Header = () => {
  return (
    <header className="flex justify-between px-16 items-center bg-black text-white">
      <div className="perspective-1000">
        <Link to={'/'}>
          <img src={logo} className="w-32 h-32 rounded-md transform transition-transform ease-in-out hover:rotate-12"/>
        </Link>
      </div>
      <div className="flex w-96 justify-around">
        <Link to={'/'} className="hover:text-yellow-300">Home</Link>
        <Link to={'/menu'} className="hover:text-yellow-300">Menu</Link>
        <Link to={'/about'} className="hover:text-yellow-300">About</Link>
        <Link to={'/contact'} className="hover:text-yellow-300">Contact</Link>
      </div>
    </header>
  )
}