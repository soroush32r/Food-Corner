import contactImg from '../Images/Contact.jpg'

export const Contact = () => {
  return (
    <div className='flex h-[600px]'>
      <div className='w-2/4'>
        <img src={contactImg} className='w-full h-full bg-cover' />
      </div>
      <div className='flex flex-col p-10 w-2/4 py-10'>
        <div className='my-10'>
          <h1 className='text-5xl font-semibold'>CONTACT US</h1>
        </div>
        <div className='w-full my-8'>
          <div>
            <h2 className='text-2xl text-gray-400'>Full Name</h2>
            <input className='border-b-2 w-full py-2 outline-none placeholder:text-black' placeholder='Enter full name ...' />
          </div>
          <div className='my-6'>
            <h2 className='text-2xl text-gray-400'>Email</h2>
            <input className='border-b-2 w-full py-2 outline-none placeholder:text-black' placeholder='Enter email ...' />
          </div>
          <div className='mt-6'>
            <h2 className='text-2xl text-gray-400'>Message</h2>
            <textarea className='border-b-2 h-20 w-full py-2 outline-none placeholder:text-black' placeholder='Enter message ...' />
          </div>
        </div>
        <div className=''>
          <button className='border-none bg-black py-2 px-8 text-white'>Send Message</button>
        </div>
      </div>
    </div>
  )
}