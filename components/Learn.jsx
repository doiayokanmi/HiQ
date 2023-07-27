import Image from 'next/image'
import React from 'react'

const Learn = () => {
  return (
    <>
        <section className="md:px-24 px-4 py-12 md:flex justify-between">
            <div className="basis-2/5 rounded">
                <Image src={'/bg.jpg'} width={500} height={520} alt='Iamge' className='rounded w-full'/>
            </div>
            <div className="basis-3/5 md:px-12 my-4 md:my-0">
                <h1 className='text-primary text-2xl font-bold'>About Us</h1>
                <h1 className='text-4xl font-bold py-2 lg:pe-32'>Learn <span className='text-primary'>Anytime</span> and Anywhere Now</h1>
                <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ratione aperiam illo beatae dolorem eaque ipsam voluptate, iusto, recusandae saepe natus nihil perferendis expedita enim soluta! Voluptatibus quis maiores eius.</p>

                <button className='sign'>Read More</button>
            </div>
        </section>
    </>
  )
}

export default Learn