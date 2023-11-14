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
        <Link to={'/'}>Menu</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/about'}>About</Link>
      </div>
    </header>
  )
}