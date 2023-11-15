import  aboutHeader  from '../Images/About.jpg'

export const About = () => {
  return (
    <div className='w-auto'>
      <div className='h-72 flex flex-col items-center overflow-hidden'>
        <img src={aboutHeader} className='w-full h-full object-cover'/>
      </div>
      <div className='text-center py-16'>
        <h1 className='text-6xl'>ABOUT US</h1>
      </div>
      <div className='pb-16 px-16'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laborum aliquam ullam facilis accusamus nihil laboriosam quod dicta nulla? Quibusdam fugit optio voluptatum similique at voluptates harum velit, amet natus. Ratione vitae corrupti odio consequatur rem ad deleniti, fuga repellat beatae eligendi unde explicabo officiis commodi eaque accusamus esse placeat perferendis? Ipsam assumenda eum necessitatibus omnis rem minima, ut illo, voluptatem aperiam quasi dolores! Aut a, asperiores fugit, fugiat inventore ipsa illum nisi voluptas incidunt doloribus totam ipsam enim nostrum nulla dolores dignissimos laborum sint excepturi temporibus eveniet omnis, repellat accusantium at. Sed impedit veniam rem adipisci optio voluptate sapiente.</p>
      </div>
    </div>
  )
}