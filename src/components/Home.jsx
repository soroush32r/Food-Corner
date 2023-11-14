import { Link } from 'react-router-dom'
import background from '../Images/Home-Background.jpg'

export const Home = () => {
  return (
    <div className='w-full h-screen bg-cover bg-center relative' style={
      {
        backgroundImage : `url(${background})`
      }}>
      <div className='flex w-5/6 h-5/6 justify-center items-start flex-col  text-white'>
        <h1 className='text-9xl font-semibold py-8'>Food Corner</h1>
        <h4 className='text-4xl px-2 py-8 font-semibold'>EVERY FAST FOOD AT A CLICK</h4>
        <Link to={'/Menu'} className='my-8 mx-2 py-4 px-8 bg-gray-600 rounded-lg hover:bg-yellow-300 hover:text-black'>
            Order Now
        </Link>
        
      </div>
    </div>
  )
}