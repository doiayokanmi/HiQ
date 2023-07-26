import Image from 'next/image'
import React from 'react'

const Learn = () => {
  return (
    <>
        <section className="mt-36 px-24 py-12 flex justify-between">
            <div className="basis-2/5 rounded">
                <Image src={'/bg.jpg'} width={500} height={520} alt='Iamge' className='rounded'/>
            </div>
            <div className="basis-3/5 px-12">
                <h1 className='text-primary text-2xl font-bold'>About Us</h1>
                <h1 className='text-4xl font-bold py-2 pe-32'>Learn <span className='text-primary'>Anytime</span> and Anywhere Now</h1>
                <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ratione aperiam illo beatae dolorem eaque ipsam voluptate, iusto, recusandae saepe natus nihil perferendis expedita enim soluta! Voluptatibus quis maiores eius.</p>

                <button className='sign'>Read More</button>
            </div>
        </section>
    </>
  )
}

export default Learn