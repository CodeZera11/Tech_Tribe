import React from 'react'

const Banner = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10'>
        <div>
            <h1 className='text-7xl'>TechTribe&apos;s Blogs</h1>
            <h2 className='mt-5 md:mt-0 ml-3'>Welcome to Every Developers Favourite Blog in the Devosphere</h2>
        </div>
        <p className='max-w-sm mt-5 md:mt-7 text-gray-400 md:ml-3'>New product features | The latest in technology | The weekly debugging nightmares and More!</p>
    </div>
  )
}

export default Banner