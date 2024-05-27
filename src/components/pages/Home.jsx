import React from 'react'

const Home = () => {
  return (
    <div className='w-screen font-sans'>

      <div className='p-6 pt-44 flex w-screen justify-around text-sans pb-14'> 
      <div className='w-1/2 pl-10'>
      <p className='text-6xl font-bold'>Dallol Alluminum</p>
      <p className='mt-4 text-gray-600'>Welcome to Dallol Aluminum - where innovation meets excellence in aluminum manufacturing. We are committed to delivering high-quality products that meet the needs of our customers. With a focus on precision and sustainability, we strive to exceed industry standards and provide solutions that drive progress in various sectors. Explore our range of premium aluminum products and experience the difference with Dallol Aluminum.</p>
      </div>
        <img src="src/img/one.png" alt="aluminum image" className='transition-transform'/>
      </div>
    
      <div className='bg-gray-400 text-white mb-10 w-screen'>
        <p className='text-center text-5xl text-white py-14 fony-bold font-bold'>Why Choose Us?</p>

        <div className='grid grid-cols-3 gap-x-8 place-items-center p-16 px-16'>

          <div className='border-r-2 border-white'>
            <img className='w-32 p-2 mx-auto hover:w-36 duration-400' src="src/img/onewhy.png" alt="commitment image" />
            <h3 className='font-bold text-2xl text-center'>Commitment to Excellence</h3>
            <p className='mr-8 mt-4 text-center'>Dallol Aluminum is renowned for its commitment to excellence, transparency, and exceptional customer service, ensuring that customers receive the finest regulation-compliant engineering designed for over 8000 hours per annum duty.</p>
          </div>

          <div className=''>
            <img className='w-32 mx-auto hover:w-36 duration-300' src="src/img/twowhy.png" alt="commitment image" />
            <h3 className='font-bold text-2xl text-center'>Industry Expertise</h3>
            <p className='mt-4 text-center'>With a legacy dating back to 1985, Dallol Aluminum boasts a dedicated team of planners, designers, engineers, and administration professionals who have expertly delivered superior aluminum solutions for major businesses across various regions.</p>
          </div>

          <div className='border-l-2 border-white'>
            <img className='w-28 mx-auto hover:w-36 duration-300' src="src/img/threewhy.png" alt="quality image" />
            <h3 className='font-bold text-2xl text-center'>Quality Assurance</h3>
            <p className='ml-8 mt-4 text-center'>The company maintains quality control as one of the pillars of its solutions, ensuring the highest quality. Our quality assurance practices are in every aspect of our operations, ensuring that our customers receive products of the highest standard.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
