import instagram from '../Images/Instagram.png'
import youtube from '../Images/Youtube.png'
import linkedin from '../Images/Linkedin.png'
import twitter from '../Images/Twitter.png'

export const Footer = () => {
  return (
    <footer className='flex flex-col items-center text-white bg-black'>
      <div className='flex justify-around w-96 py-5'>
        <a href='https://instagram.com/#' className='rounded-xl bg-white'><img src={instagram}/></a>
        <a href='https://youtube.com/#' className='rounded-xl bg-white'><img src={youtube}/></a>
        <a href='https://linkedin.com/#' className='rounded-xl bg-white'><img src={linkedin}/></a>
        <a href='https://twitter.com/#' className='rounded-xl bg-white'><img src={twitter}/></a>
      </div>
      <div className='py-5'>
        &copy; Created by Sarir Team
      </div>
    </footer>
  )
}