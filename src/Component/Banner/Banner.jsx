import bannerImg from '../../assets/banner.jpg'

export default function Banner() {
  return (
    <div className="text-center w-7/12 mx-auto h-[80vh] mb-96">
       <div className='relative z-10'>
       <h1 className="text-white text-5xl font-extrabold mb-4">
        Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="font-thin text-sm text-gray-100 w-10/12 mx-auto mb-5">
        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="btn rounded-3xl mb-36 text-banner_color">Shop Now</button>
        <div className='absolute top-1/3 z-50 mt-36 border border-white p-4 rounded-xl'>
            <img
            className='h-[568px] rounded-xl'
             src={bannerImg}/>
        </div>
       </div>
    </div>
  )
}
