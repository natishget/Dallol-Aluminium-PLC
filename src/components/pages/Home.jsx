import React from 'react'

const Home = () => {
  return (
    <div className='w-full font-sans'>

      <div className='lg:p-16 p-10 lg:pt-44 pt-36 lg:grid grid-cols-2 w-full text-sans pb-14'>
        <div className='lg:pb-0 pb-14'>
          <p className='text-6xl font-bold text-gray-700'>Dallol Alluminum</p>
          <p className='mt-4 text-gray-600'>Welcome to Dallol Aluminum - where innovation meets excellence in aluminum manufacturing. We are committed to delivering high-quality products that meet the needs of our customers. With a focus on precision and sustainability, we strive to exceed industry standards and provide solutions that drive progress in various sectors. Explore our range of premium aluminum products and experience the difference with Dallol Aluminum...</p>
          <button className='hover:bg-black bg-primary text-gray-900 font-bold hover:text-primary font-bold hover:font-bold py-2 mt-4 px-5 shadow-md transition duration-300 ease-in-out transform hover:scale-105'>Learn More</button>
        </div>
        <div className='md:p-6 my-auto flex justify-end'>
          <img src="src/img/one.png" alt="aluminum image" className='my-auto lg:mx-0 mx-auto' />
        </div>
      </div>

      <div className='bg-black text-white w-full'>
        <p className='text-center lg:text-5xl text-3xl text-primary md:py-14 py-12 fony-bold font-bold brdere-r-6 '>Why Choose Us?</p>

        <div className='grid md:grid-cols-3 md:gap-x-8 place-items-center pb-16 md:pt-10 md:px-16 px-6 md:text-base text-sm text-gray-100'>

          <div className='md:border-r-2 md:pb-0 pb-6 border-primary'>
            <img className='w-28 mx-auto hover:w-32 duration-300' src="src/img/onewhy.png" alt="commitment image" />
            <h3 className='md:mr-9 font-bold md:text-2xl text-xl text-center text-primary pt-8 mx-auto'>Commitment to Excellence</h3>
            <p className='md:mr-8 mt-4 text-center text-gray-200'>Dallol Aluminum is renowned for its commitment to excellence, transparency, and exceptional customer service, ensuring that customers receive the finest regulation-compliant engineering designed for over 8000 hours per annum duty.</p>
          </div>

          <div className='md:pt-0 pt-6 md:pb-0 pb-6'>
            <img className='w-32 mx-auto hover:w-36 duration-300' src="src/img/twowhy.png" alt="commitment image" />
            <h3 className='font-bold md:text-2xl text-xl text-center text-primary pt-4'>Industry Expertise</h3>
            <p className='mt-4 text-center text-gray-200'>With a legacy dating back to 1985, Dallol Aluminum boasts a dedicated team of planners, designers, engineers, and administration professionals who have expertly delivered superior aluminum solutions for major businesses across various regions.</p>
          </div>

          <div className='md:border-l-2 border-primary md:pt-0 pt-6'>
            <img className='w-32 mx-auto hover:w-36 duration-300' src="src/img/threewhy.png" alt="quality image" />
            <h3 className='md:ml-8 font-bold md:text-2xl text-xl text-center text-primary pt-4'>Quality Assurance</h3>
            <p className='md:ml-8 mt-4 text-center text-gray-200'>The company maintains quality control as one of the pillars of its solutions, ensuring the highest quality. Our quality assurance practices are in every aspect of our operations, ensuring that our customers receive products of the highest standard.</p>
          </div>
        </div>
      </div>

      <div className='grid lg:grid-cols-4 text-gray-600 bg-gray-100 md:p-14 p-8 lg:gap-x-6'>
        <div className='lg:my-auto mb-12'>
          <h3 className='font-bold text-gray-800 text-xl'>Crafted with excellent material</h3>
          <p>Dallol Aluminium products embody meticulous attention to quality and precision, ensuring unparalleled durability and performance in every application.</p>
          <button className='hover:bg-black bg-primary text-gray-900 font-bold hover:text-primary font-bold hover:font-bold py-2 mt-4 px-4 shadow-lg rounded-xl transition duration-300 ease-in-out transform hover:scale-105'>Explore</button>
        </div>

        <div className='rounded-xl bg-gray-200 lg:mb-0 mb-12'>
          <img className='rounded-t-xl lg:w-84 lg:h-64' src="src/img/oneimg.png" alt="" />
          <div>
            <h3 className='font-bold text-gray-800 text-xl pt-4 px-4'>Stainless Steel Plate</h3>
            <p className='p-4'>Versatile and corrosion-resistant material widely used in various industrial applications. This type of steel, known for its exceptional formability and weldability, is favored for its ability to withstand high temperatures and harsh environments.</p>
          </div>
        </div>

        <div className='rounded-xl bg-gray-200 lg:mb-0 mb-12'>
          <img className='rounded-t-xl lg:w-84 lg:h-64' src="src/img/twoimg.png" alt="" />
          <div>
            <h3 className='font-bold text-gray-800 text-xl pt-4 px-4'>Stainless Steel Wire</h3>
            <p className='p-4'>It is a type of wire made from stainless steel, a corrosion-resistant alloy. It is strong, durable, and resist rust and corrosion, making it suitable for various applications such as wire mesh, cable ties, and metal fabrications.</p>
          </div>
        </div>

        <div className='rounded-xl bg-gray-200 lg:mb-0'>
          <img className='rounded-t-xl mx-auto lg:w-84 lg:h-64' src="src/img/threeimg.png" alt="" />
          <div>
            <h3 className='font-bold text-gray-800 text-xl pt-4 px-4'>Aluminum in Windows</h3>
            <p className='p-4'>Aluminum is commonly used in windows due to its strength, structural integrity, and impact resistance, making it ideal for handling larger window sizes and providing a higher degree of impact resistance, particularly in areas prone to hurricanes.</p>
          </div>
        </div>
      </div>

      <div className='lg:pl-6 pt-10 lg:flex w-full justify-around text-sans'>
        <div className='lg:pl-10 md:px-10 lg:px-0 px-8'>
          <p className='md:text-4xl text-3xl font-bold text-gray-700'>Discover the Power of Aluminum: Request Your Personalized Quote Today!</p>
          <p className='mt-4 text-gray-600'>Ready to elevate your projects with the strength and versatility of premium aluminum products? Explore our extensive range of high-quality aluminum solutions, engineered to meet your diverse needs. Take the first step towards enhancing your designs and constructions by requesting a personalized quote today. Let our experts guide you through our exceptional aluminum offerings, tailored to elevate your vision to new heights. Experience the power of aluminum – contact us now to unlock a world of possibilities!</p>
          <button className='hover:bg-black bg-primary text-gray-900 font-bold hover:text-primary font-bold hover:font-bold py-2 mt-4 px-5 shadow-md transition duration-300 ease-in-out transform hover:scale-105'>Contact Us</button>
        </div>
        <div className='lg:pl-0 pl-12 pt-14 -mt-32 lg:mt-0 lg:pt-0 lg:pl-0 flex justify-end lg:flex-none lg:pr-0'>
          <img src="src/img/fourimg.png" alt="aluminum image" className='' />
        </div>
        
      </div>

    </div>
  )
}

export default Home
